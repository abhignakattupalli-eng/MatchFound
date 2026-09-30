const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../models/User');
const Item = require('../models/Item');
const Claim = require('../models/Claim');
const Notification = require('../models/Notification');

dotenv.config({ path: __dirname + '/../.env' });

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smart_campus_lost_found';
    await mongoose.connect(mongoUri);
    console.log('[Seed] Connected to MongoDB...');

    // Clear existing data
    await User.deleteMany({});
    await Item.deleteMany({});
    await Claim.deleteMany({});
    await Notification.deleteMany({});
    console.log('[Seed] Cleared existing data.');

    // Passwords
    const salt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash('admin123', salt);
    const studentPassword = await bcrypt.hash('student123', salt);

    // 1. Create Admin
    const admin = await User.create({
      name: 'Campus Security Admin',
      studentId: 'ADM001',
      email: 'admin@campus.edu',
      phone: '+1 (555) 019-2834',
      department: 'Campus Safety & Administration',
      year: 'Staff',
      password: adminPassword,
      role: 'admin',
      isActive: true,
    });

    // 2. Create Students
    const student1 = await User.create({
      name: 'Sarah Jenkins',
      studentId: 'STU1024',
      email: 'sarah.jenkins@campus.edu',
      phone: '+1 (555) 234-5678',
      department: 'Computer Science',
      year: '3rd Year',
      password: studentPassword,
      role: 'student',
      isActive: true,
    });

    const student2 = await User.create({
      name: 'Alex Chen',
      studentId: 'STU2048',
      email: 'alex.chen@campus.edu',
      phone: '+1 (555) 345-6789',
      department: 'Mechanical Engineering',
      year: '2nd Year',
      password: studentPassword,
      role: 'student',
      isActive: true,
    });

    const student3 = await User.create({
      name: 'Priya Sharma',
      studentId: 'STU3096',
      email: 'priya.sharma@campus.edu',
      phone: '+1 (555) 456-7890',
      department: 'Business Administration',
      year: '4th Year',
      password: studentPassword,
      role: 'student',
      isActive: true,
    });

    console.log('[Seed] Created users (1 Admin, 3 Students).');

    // 3. Create Sample Items
    const sampleItems = [
      {
        reportId: 'LOST-102934',
        itemName: 'Space Gray MacBook Pro 14"',
        category: 'Electronics',
        description: 'Left in Library 2nd Floor study cubicle around 3:30 PM. Has a sticker of React and GitHub on the lid.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        type: 'lost',
        location: 'Main University Library, 2nd Floor Cubicle #14',
        date: '2026-09-28',
        time: '15:30',
        status: 'Searching',
        reportedBy: student1._id,
        additionalInfo: 'Serial ending in 9J2K. Crucial notes for final year project on it!',
      },
      {
        reportId: 'LOST-582910',
        itemName: 'Navy Herschel Little America Backpack',
        category: 'Bags',
        description: 'Dark blue backpack with brown leather straps. Left on the bench outside Engineering Hall.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
        type: 'lost',
        location: 'Engineering Building West Entrance Courtyard',
        date: '2026-09-27',
        time: '11:15',
        status: 'Searching',
        reportedBy: student2._id,
        additionalInfo: 'Contains a spiral notebook and graphing calculator.',
      },
      {
        reportId: 'LOST-471029',
        itemName: 'Campus ID Card & Lanyard',
        category: 'ID Cards',
        description: 'Blue university lanyard with student ID card for Sarah Jenkins, along with a dormitory key card.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
        type: 'lost',
        location: 'Student Dining Commons - North Hall',
        date: '2026-09-29',
        time: '13:00',
        status: 'Searching',
        reportedBy: student1._id,
        additionalInfo: 'Dorm room access card attached.',
      },
      {
        reportId: 'FND-739102',
        itemName: 'Apple AirPods Pro (2nd Gen) in White Case',
        category: 'Electronics',
        description: 'Found on the treadmill in the Student Athletic Recreation Center.',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
        type: 'found',
        location: 'Campus Recreation Center, Treadmill Row #3',
        date: '2026-09-28',
        time: '08:45',
        status: 'Found', // Verified by admin
        reportedBy: student2._id,
        verifiedBy: admin._id,
        verificationNotes: 'Verified and safely stored at Student Center Front Desk.',
        additionalInfo: 'Has a small scratch on bottom edge of case.',
      },
      {
        reportId: 'FND-849201',
        itemName: 'Calculus: Early Transcendentals 8th Edition',
        category: 'Books',
        description: 'Hardcover textbook found on table 4 at Campus Starbucks.',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        type: 'found',
        location: 'Student Union Starbucks Cafe, Table 4',
        date: '2026-09-26',
        time: '14:20',
        status: 'Found',
        reportedBy: student3._id,
        verifiedBy: admin._id,
        additionalInfo: 'Has yellow highlighter in Chapter 4.',
      },
      {
        reportId: 'FND-620194',
        itemName: 'Set of 3 Keys with Red Honda Keyfob',
        category: 'Keys',
        description: 'Car key and two brass keys on a braided red keychain.',
        image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
        type: 'found',
        location: 'Parking Lot B, Row 4',
        date: '2026-09-29',
        time: '09:10',
        status: 'Pending Verification', // Waiting for admin verification!
        reportedBy: student3._id,
        additionalInfo: 'Found near space 42.',
      },
      {
        reportId: 'FND-192837',
        itemName: 'University Navy Fleece Zip Hoodie (Size M)',
        category: 'Clothing',
        description: 'Official collegiate navy zip hoodie left over a lecture hall seat.',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
        type: 'found',
        location: 'Science Auditorium 101, Row F',
        date: '2026-09-25',
        time: '17:00',
        status: 'Returned', // Completed returned item
        reportedBy: student1._id,
        verifiedBy: admin._id,
        additionalInfo: 'Successfully handed back to original owner on Sept 27.',
      },
      {
        reportId: 'FND-918234',
        itemName: 'Titanium Ray-Ban Aviator Sunglasses in Leather Case',
        category: 'Accessories',
        description: 'Brown leather case with gold frame aviators inside.',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
        type: 'found',
        location: 'Quad Green Lawn Benches',
        date: '2026-09-27',
        time: '16:00',
        status: 'Found',
        reportedBy: student2._id,
        verifiedBy: admin._id,
        additionalInfo: 'Prescription lenses.',
      },
    ];

    const createdItems = await Item.insertMany(sampleItems);
    console.log(`[Seed] Created ${createdItems.length} items.`);

    // 4. Create Sample Claim
    const airpodsItem = createdItems.find((i) => i.reportId === 'FND-739102');
    if (airpodsItem) {
      await Claim.create({
        itemId: airpodsItem._id,
        claimant: student1._id,
        reason: 'I was using the treadmill #3 on Monday morning around 8:30 AM before my CS301 class and realized I left my AirPods case on the console cup holder.',
        identifyingDetails: 'The Bluetooth device name is "Sarah\'s Pods" and the silicone ear tips are size Small. There is a tiny red dot marked with sharpie inside the lid.',
        proof: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=400&q=80',
        status: 'Pending',
      });
      console.log('[Seed] Created sample claim for AirPods.');
    }

    // 5. Create Sample Notifications
    await Notification.create([
      {
        userId: student1._id,
        message: 'Your report for "Space Gray MacBook Pro 14"" (LOST-102934) has been submitted. Campus status: Searching.',
        type: 'REPORT_SUBMITTED',
        relatedItemId: createdItems[0]._id,
        read: true,
      },
      {
        userId: student2._id,
        message: 'Your found item report for "Apple AirPods Pro" (FND-739102) has been verified by campus administration and published.',
        type: 'REPORT_VERIFIED',
        relatedItemId: airpodsItem ? airpodsItem._id : null,
        read: false,
      },
      {
        userId: student2._id,
        message: 'Someone submitted a claim for your item "Apple AirPods Pro" (FND-739102). Administration review is underway.',
        type: 'CLAIM_SUBMITTED',
        relatedItemId: airpodsItem ? airpodsItem._id : null,
        read: false,
      },
      {
        userId: admin._id,
        message: 'New found report "Set of 3 Keys with Red Honda Keyfob" (FND-620194) requires administrative verification.',
        type: 'STATUS_CHANGE',
        relatedItemId: createdItems[5]._id,
        read: false,
      },
    ]);

    console.log('[Seed] Database seed completed successfully!');
    console.log('\n================ DEMO CREDENTIALS ================');
    console.log('Admin:');
    console.log('  Email / ID: admin@campus.edu or ADM001');
    console.log('  Password:   admin123');
    console.log('\nStudent 1:');
    console.log('  Email / ID: sarah.jenkins@campus.edu or STU1024');
    console.log('  Password:   student123');
    console.log('\nStudent 2:');
    console.log('  Email / ID: alex.chen@campus.edu or STU2048');
    console.log('  Password:   student123');
    console.log('===================================================\n');

    process.exit(0);
  } catch (error) {
    console.error('[Seed] Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
