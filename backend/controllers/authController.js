const User = require('../models/User');
const Notification = require('../models/Notification');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const secret = process.env.JWT_SECRET || 'smart_campus_lost_and_found_secret_key_2026';
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      email: user.email,
      studentId: user.studentId,
      name: user.name,
    },
    secret,
    { expiresIn: '7d' }
  );
};

// @desc    Register a new student
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const {
      name,
      studentId,
      email,
      phone,
      department,
      year,
      password,
      confirmPassword,
      role,
    } = req.body;

    // Validate empty fields
    if (
      !name ||
      !studentId ||
      !email ||
      !phone ||
      !department ||
      !year ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required. Please fill in all information.',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address format. Please provide a valid college email.',
      });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match. Please verify and try again.',
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.',
      });
    }

    // Check existing email
    const existingEmail = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'A user with this college email already exists.',
      });
    }

    // Check existing student ID
    const existingStudentId = await User.findOne({
      studentId: studentId.toUpperCase().trim(),
    });
    if (existingStudentId) {
      return res.status(400).json({
        success: false,
        message: 'A student with this Student ID is already registered.',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const userRole = role === 'admin' ? 'admin' : 'student';
    const newUser = await User.create({
      name: name.trim(),
      studentId: studentId.toUpperCase().trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      department: department.trim(),
      year: year.trim(),
      password: hashedPassword,
      role: userRole,
    });

    // Create welcome notification
    await Notification.create({
      userId: newUser._id,
      message: `Welcome to Smart Campus Lost & Found, ${newUser.name}! Your account has been registered successfully.`,
      type: 'GENERAL',
    });

    return res.status(201).json({
      success: true,
      message: 'Registration successful! You can now log in with your credentials.',
      user: {
        id: newUser._id,
        name: newUser.name,
        studentId: newUser.studentId,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error during registration.',
    });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    // Validate empty fields
    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: 'Empty fields detected: Please enter your Email / Student ID and Password.',
      });
    }

    const trimmedIdentifier = identifier.trim();

    // Check if input looks like an email or studentId
    const isEmail = trimmedIdentifier.includes('@');
    let user;
    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedIdentifier)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email format. Please check your email address.',
        });
      }
      user = await User.findOne({ email: trimmedIdentifier.toLowerCase() });
    } else {
      user = await User.findOne({ studentId: trimmedIdentifier.toUpperCase() });
    }

    // User not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please check your credentials or register for an account.',
      });
    }

    // Check account status
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Your account has been deactivated by campus administration.',
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect password. Please verify and try again.',
      });
    }

    // Generate token
    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      user: {
        id: user._id,
        name: user.name,
        studentId: user.studentId,
        email: user.email,
        phone: user.phone,
        department: user.department,
        year: user.year,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error during login.',
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update profile
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const { name, phone, department, year } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    if (name) user.name = name.trim();
    if (phone) user.phone = phone.trim();
    if (department) user.department = department.trim();
    if (year) user.year = year.trim();

    await user.save();

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully.',
      user: {
        id: user._id,
        name: user.name,
        studentId: user.studentId,
        email: user.email,
        phone: user.phone,
        department: user.department,
        year: user.year,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Change password
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required to update your password.',
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password and confirmation do not match.',
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
      });
    }

    const user = await User.findById(req.user._id);
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Current password does not match our records.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    // Add notification
    await Notification.create({
      userId: user._id,
      message: 'Your password was successfully changed. If this was not you, notify campus security immediately.',
      type: 'GENERAL',
    });

    return res.status(200).json({
      success: true,
      message: 'Password changed successfully.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Forgot password simulation / reset request
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide your registered email address.' });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(404).json({ success: false, message: 'No registered user found with that email address.' });
    }

    // In campus setup, generate a reset code or simulated reset instruction
    return res.status(200).json({
      success: true,
      message: `Password reset instructions have been dispatched to ${email}. For instant assistance on campus, please visit the IT Helpdesk at Administration Block Room 102.`,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  register,
  login,
  getMe,
  updateProfile,
  changePassword,
  forgotPassword,
};
