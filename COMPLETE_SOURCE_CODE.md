# SMART CAMPUS LOST & FOUND - COMPLETE SOURCE CODE REPOSITORY

Generated on: 2026-09-29T16:23:15.342Z
Project: Smart Campus Lost & Found Web Application
Stack: React, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
Total Files Extracted: 54

---

## TABLE OF CONTENTS

1. [README.md](#file-readme-md)
2. [.env.example](#file--env-example)
3. [backend/package.json](#file-backend-package-json)
4. [backend/.env.example](#file-backend--env-example)
5. [backend/server.js](#file-backend-server-js)
6. [backend/config/db.js](#file-backend-config-db-js)
7. [backend/models/User.js](#file-backend-models-user-js)
8. [backend/models/Item.js](#file-backend-models-item-js)
9. [backend/models/Claim.js](#file-backend-models-claim-js)
10. [backend/models/Notification.js](#file-backend-models-notification-js)
11. [backend/middleware/auth.js](#file-backend-middleware-auth-js)
12. [backend/controllers/authController.js](#file-backend-controllers-authcontroller-js)
13. [backend/controllers/itemController.js](#file-backend-controllers-itemcontroller-js)
14. [backend/controllers/claimController.js](#file-backend-controllers-claimcontroller-js)
15. [backend/controllers/adminController.js](#file-backend-controllers-admincontroller-js)
16. [backend/controllers/notificationController.js](#file-backend-controllers-notificationcontroller-js)
17. [backend/routes/authRoutes.js](#file-backend-routes-authroutes-js)
18. [backend/routes/itemRoutes.js](#file-backend-routes-itemroutes-js)
19. [backend/routes/claimRoutes.js](#file-backend-routes-claimroutes-js)
20. [backend/routes/adminRoutes.js](#file-backend-routes-adminroutes-js)
21. [backend/routes/notificationRoutes.js](#file-backend-routes-notificationroutes-js)
22. [backend/utils/seed.js](#file-backend-utils-seed-js)
23. [frontend/package.json](#file-frontend-package-json)
24. [frontend/vite.config.js](#file-frontend-vite-config-js)
25. [frontend/index.html](#file-frontend-index-html)
26. [frontend/src/main.jsx](#file-frontend-src-main-jsx)
27. [frontend/src/App.jsx](#file-frontend-src-app-jsx)
28. [frontend/src/index.css](#file-frontend-src-index-css)
29. [frontend/src/services/api.js](#file-frontend-src-services-api-js)
30. [frontend/src/context/AuthContext.jsx](#file-frontend-src-context-authcontext-jsx)
31. [frontend/src/context/NotificationContext.jsx](#file-frontend-src-context-notificationcontext-jsx)
32. [frontend/src/components/StatusBadge.jsx](#file-frontend-src-components-statusbadge-jsx)
33. [frontend/src/components/LoadingSpinner.jsx](#file-frontend-src-components-loadingspinner-jsx)
34. [frontend/src/components/ItemCard.jsx](#file-frontend-src-components-itemcard-jsx)
35. [frontend/src/components/Navbar.jsx](#file-frontend-src-components-navbar-jsx)
36. [frontend/src/components/Footer.jsx](#file-frontend-src-components-footer-jsx)
37. [frontend/src/components/ProtectedRoute.jsx](#file-frontend-src-components-protectedroute-jsx)
38. [frontend/src/components/AdminRoute.jsx](#file-frontend-src-components-adminroute-jsx)
39. [frontend/src/components/ClaimModal.jsx](#file-frontend-src-components-claimmodal-jsx)
40. [frontend/src/components/ContactModal.jsx](#file-frontend-src-components-contactmodal-jsx)
41. [frontend/src/components/ReportIssueModal.jsx](#file-frontend-src-components-reportissuemodal-jsx)
42. [frontend/src/pages/LoginPage.jsx](#file-frontend-src-pages-loginpage-jsx)
43. [frontend/src/pages/RegisterPage.jsx](#file-frontend-src-pages-registerpage-jsx)
44. [frontend/src/pages/HomePage.jsx](#file-frontend-src-pages-homepage-jsx)
45. [frontend/src/pages/LostItemsPage.jsx](#file-frontend-src-pages-lostitemspage-jsx)
46. [frontend/src/pages/FoundItemsPage.jsx](#file-frontend-src-pages-founditemspage-jsx)
47. [frontend/src/pages/ReportLostPage.jsx](#file-frontend-src-pages-reportlostpage-jsx)
48. [frontend/src/pages/ReportFoundPage.jsx](#file-frontend-src-pages-reportfoundpage-jsx)
49. [frontend/src/pages/ItemDetailsPage.jsx](#file-frontend-src-pages-itemdetailspage-jsx)
50. [frontend/src/pages/MyReportsPage.jsx](#file-frontend-src-pages-myreportspage-jsx)
51. [frontend/src/pages/NotificationsPage.jsx](#file-frontend-src-pages-notificationspage-jsx)
52. [frontend/src/pages/ProfilePage.jsx](#file-frontend-src-pages-profilepage-jsx)
53. [frontend/src/pages/AdminDashboardPage.jsx](#file-frontend-src-pages-admindashboardpage-jsx)
54. [frontend/src/pages/NotFoundPage.jsx](#file-frontend-src-pages-notfoundpage-jsx)

---

<a id="file-readme-md"></a>
## FILE: `README.md`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\README.md`

```markdown
# Smart Campus Lost & Found System 🎓🔍

A modern, full-stack collegiate web application designed for university campuses. It enables students and faculty to report lost belongings, log found items, search campus registries, submit secure ownership claims, and return items to their rightful owners. Includes a role-protected administrative dashboard for campus security personnel.

---

## 🌟 Key Features

### For Students
- **Lost Item Reporting**: File detailed reports with images, categories, last-seen locations, and timestamps.
- **Found Item Reporting**: Submit items found on campus, automatically routing them to the admin verification queue.
- **Search & Filter Directory**: Filter items by category, location, date, and keyword search with real-time feedback.
- **Privacy-Preserving Claims**: Submit ownership claims with identifying details (serial numbers, stickers, marks) and upload proof photos.
- **Secure Reporter Contact**: Send direct messages to reporters via internal notifications without exposing private email or phone numbers.
- **My Reports Dashboard**: Dedicated views for "My Lost Reports" and "My Found Reports" with edit, delete, and "Mark as Returned" capabilities.
- **Real-Time Notification Hub**: Immediate notifications when reports are verified, claims are approved or rejected, or items are returned.
- **Profile Management**: Maintain academic department, year, contact information, and change passwords securely.

### For Campus Security & Administrators
- **Executive Dashboard Metrics**: Live counters for Total Users, Lost Reports, Found Reports, Pending Verifications, Pending Claims, and Resolved Cases.
- **Report Verification Queue**: Review submitted found items and publish them to the student directory with 1 click.
- **Claim Moderation**: Inspect student ownership arguments and photo proof, approve or reject claims, and append administrative notes.
- **User Account Management**: Search registered students and instantly activate or deactivate accounts.
- **Category & Status Analytics**: Visual distribution across campus item categories and lifecycle states.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, React Router v6, Vite, Axios, Lucide Icons, Plus Jakarta Sans |
| **Backend** | Node.js, Express.js, REST APIs, Multer, CORS, Dotenv |
| **Database** | MongoDB & Mongoose ORM |
| **Security & Auth** | JWT (JSON Web Tokens), bcryptjs password hashing, Role-based Access Control (RBAC) |

---

## 📁 Project Directory Structure

```text
smart-campus-lost-found/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection handler
│   ├── controllers/
│   │   ├── adminController.js    # Statistics, verification & user management
│   │   ├── authController.js     # Register, login, profile & password change
│   │   ├── claimController.js    # Claim submission & approval workflow
│   │   ├── itemController.js     # Lost & found item CRUD, filtering & contact
│   │   └── notificationController.js # Read/unread notifications
│   ├── middleware/
│   │   └── auth.js               # JWT verification & requireAdmin authorization
│   ├── models/
│   │   ├── Claim.js              # Claim schema
│   │   ├── Item.js               # Item report schema
│   │   ├── Notification.js       # Notification schema
│   │   └── User.js               # User & student schema
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── claimRoutes.js
│   │   ├── itemRoutes.js
│   │   └── notificationRoutes.js
│   ├── utils/
│   │   └── seed.js               # Database seeding script with realistic campus records
│   ├── .env                      # Backend environment variables
│   ├── .env.example              # Sample environment template
│   ├── package.json
│   └── server.js                 # Express server entry point
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminRoute.jsx    # Admin-only route guard
│   │   │   ├── ClaimModal.jsx    # Item ownership claim modal with image proof
│   │   │   ├── ContactModal.jsx  # Safe reporter contact modal
│   │   │   ├── Footer.jsx        # Campus branding and helpdesk info
│   │   │   ├── ItemCard.jsx      # Item card with badges & actions
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Navbar.jsx        # Responsive navigation with badge alerts
│   │   │   ├── ProtectedRoute.jsx# Auth route guard
│   │   │   ├── ReportIssueModal.jsx # Report incorrect info modal
│   │   │   └── StatusBadge.jsx   # Color-coded status pills
│   │   ├── context/
│   │   │   ├── AuthContext.jsx   # Global user state & JWT handling
│   │   │   └── NotificationContext.jsx # Notification synchronization & badge counter
│   │   ├── pages/
│   │   │   ├── AdminDashboardPage.jsx # Multi-tab admin moderation portal
│   │   │   ├── FoundItemsPage.jsx     # Verified found items catalog
│   │   │   ├── HomePage.jsx           # Landing hero, categories & recent items
│   │   │   ├── ItemDetailsPage.jsx    # Full item view with privacy compliance
│   │   │   ├── LoginPage.jsx          # Login with role redirect & demo autofill
│   │   │   ├── LostItemsPage.jsx      # Lost items directory with multi-filters
│   │   │   ├── MyReportsPage.jsx      # Student's lost & found submissions
│   │   │   ├── NotFoundPage.jsx       # 404 page
│   │   │   ├── NotificationsPage.jsx  # Activity log with unread tracking
│   │   │   ├── ProfilePage.jsx        # User profile & password management
│   │   │   ├── RegisterPage.jsx       # Student registration with validation
│   │   │   ├── ReportFoundPage.jsx    # Found item submission
│   │   │   └── ReportLostPage.jsx     # Lost item submission
│   │   ├── services/
│   │   │   └── api.js                 # Axios API client with JWT interceptor
│   │   ├── App.jsx                    # Route mapping
│   │   ├── index.css                  # Collegiate design system & responsive styling
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .env.example
└── README.md
```

---

## 🚀 Step-by-Step Setup Guide

### 1. Install Dependencies

#### Backend Dependencies:
```bash
cd backend
npm install
```

#### Frontend Dependencies:
```bash
cd ../frontend
npm install
```

---

### 2. Configure MongoDB

Ensure MongoDB is running locally or prepare your MongoDB Atlas connection string.
- If using local MongoDB, default URI: `mongodb://127.0.0.1:27017/smart_campus_lost_found`
- If using MongoDB Atlas, obtain your URI: `mongodb+srv://<user>:<password>@cluster.mongodb.net/smart_campus_lost_found`

---

### 3. Configure Environment Variables

Create `.env` in the `backend/` folder (or copy from `.env.example`):

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smart_campus_lost_found
JWT_SECRET=smart_campus_lost_and_found_secret_key_2026_super_secure
NODE_ENV=development
```

---

### 4. Seed Demo Data (Recommended)

Pre-populates the database with realistic students, campus security admin, lost items, found items, claims, and notifications:

```bash
cd backend
npm run seed
```

---

### 5. Start Backend Server

```bash
cd backend
npm start
```
The backend API will start on: **`http://localhost:5000`**
Health check endpoint: `http://localhost:5000/api/health`

---

### 6. Start Frontend Development Server

Open a second terminal window:

```bash
cd frontend
npm run dev
```
The frontend portal will launch on: **`http://localhost:3000`**

---

## 🔑 Demo Credentials

| Role | Email / Student ID | Password | Access Level |
|---|---|---|---|
| **Campus Security Admin** | `admin@campus.edu` or `ADM001` | `admin123` | Full Admin Dashboard, Verification, Claims, User Management |
| **Student 1** | `sarah.jenkins@campus.edu` or `STU1024` | `student123` | Standard Student Portal (CS Junior) |
| **Student 2** | `alex.chen@campus.edu` or `STU2048` | `student123` | Standard Student Portal (ME Sophomore) |

> 💡 **Tip**: On the login page, you can click the **"Admin Demo"** or **"Student Demo"** quick autofill buttons to sign in with 1 click!

---

## 🧪 Testing Verification Guide

### Testing Student Functions
1. **Login as Student**: Use `sarah.jenkins@campus.edu` / `student123`.
2. **Report a Lost Item**: Go to **Report Lost**, fill in the item details (e.g., Graphing Calculator), attach an image or URL, and submit. You will receive a unique report ID like `LOST-XXXXXX` with status `Searching`.
3. **Report a Found Item**: Go to **Report Found**, fill in found details (e.g., Water Bottle in Gym), and submit. It will receive status `Pending Verification`.
4. **Browse & Filter**: Visit **Lost Items** or **Found Items** and test searching by keyword, filtering by category (Electronics, Bags, etc.), and location.
5. **Submit a Claim**: Click on an approved item in **Found Items** (e.g., Apple AirPods Pro), click **"Claim This Item"**, specify your proof and identifying marks, and submit.
6. **Check My Reports**: Visit **My Reports** to see your two sections: "MY LOST REPORTS" and "MY FOUND REPORTS". Test editing, viewing, and clicking **"Mark as Returned"**.
7. **Notifications**: Click **Notifications** in the navbar to review status alerts and mark them as read.

### Testing Admin Functions
1. **Login as Admin**: Sign in with `admin@campus.edu` / `admin123`. You are automatically redirected to `/admin`.
2. **Review Metrics**: View stats for Total Users, Lost Reports, Found Reports, Pending Verification, Pending Claims, and Resolved Cases.
3. **Verify Found Reports**: Open the **Found Reports** tab. Look for items with status `Pending Verification` (e.g. `FND-620194`), and click **"Verify & Publish"**. The status changes to `Found` and becomes visible to students!
4. **Manage Claims**: Open the **Claims** tab. Click **"View Details"** on pending claims to inspect student explanations and proof photos. Click **"Approve Claim"** or **"Reject Claim"**. Approving automatically changes item status to `Claimed` and alerts the student.
5. **Manage Users**: Open the **Users** tab. Search for students, view their contact details, and click **"Deactivate"** or **"Activate"** to toggle access.

---

## 🔒 Security Implementation Details

- **Password Hashing**: Passwords hashed with `bcryptjs` using a salt work factor of 10.
- **JWT Authentication**: JSON Web Tokens signed with secret key and validated via Express middleware.
- **Role-Based Access Control (RBAC)**: All admin routes are protected by `authenticateToken` + `requireAdmin`. Unauthorized requests receive `403 Forbidden`.
- **Privacy Protection**: Student email and telephone numbers are hidden from public item listings and can only be accessed through privacy-safe messaging or by administrators.

---

## 📄 License & Academic Attribution
Developed for collegiate campus property recovery demonstrations.
Open-source under the MIT License.

```

---

<a id="file--env-example"></a>
## FILE: `.env.example`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\.env.example`

```markdown
MONGO_URI=mongodb://127.0.0.1:27017/smart_campus_lost_found
JWT_SECRET=your_jwt_secret_key_here
PORT=5000

```

---

<a id="file-backend-package-json"></a>
## FILE: `backend/package.json`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\package.json`

```json
{
  "name": "smart-campus-backend",
  "version": "1.0.0",
  "description": "Backend API for Smart Campus Lost & Found",
  "main": "server.js",
  "type": "commonjs",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node utils/seed.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.1",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.2"
  }
}

```

---

<a id="file-backend--env-example"></a>
## FILE: `backend/.env.example`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\.env.example`

```markdown
MONGO_URI=mongodb://127.0.0.1:27017/smart_campus_lost_found
JWT_SECRET=your_jwt_secret_key_here
PORT=5000

```

---

<a id="file-backend-server-js"></a>
## FILE: `backend/server.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\server.js`

```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Static files directory for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/claims', require('./routes/claimRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    system: 'Smart Campus Lost & Found Backend',
    timestamp: new Date().toISOString(),
  });
});

// Root welcome endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Smart Campus Lost & Found API',
    documentation: '/api/health',
  });
});

// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Resource not found at ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Smart Campus Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

```

---

<a id="file-backend-config-db-js"></a>
## FILE: `backend/config/db.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\config\db.js`

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smart_campus_lost_found';
    const conn = await mongoose.connect(mongoUri);
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

```

---

<a id="file-backend-models-user-js"></a>
## FILE: `backend/models/User.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\models\User.js`

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    studentId: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
      trim: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true,
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);

```

---

<a id="file-backend-models-item-js"></a>
## FILE: `backend/models/Item.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\models\Item.js`

```javascript
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    reportId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    itemName: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Electronics',
        'Bags',
        'Books',
        'ID Cards',
        'Keys',
        'Clothing',
        'Accessories',
        'Other',
      ],
      default: 'Other',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    image: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
      enum: ['lost', 'found'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: [
        'Pending Verification',
        'Searching',
        'Found',
        'Claimed',
        'Returned',
        'Rejected',
      ],
      default: function () {
        return this.type === 'lost' ? 'Searching' : 'Pending Verification';
      },
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    additionalInfo: {
      type: String,
      default: '',
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    verificationNotes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Virtual for item claims if needed
itemSchema.virtual('claims', {
  ref: 'Claim',
  localField: '_id',
  foreignField: 'itemId',
});

module.exports = mongoose.model('Item', itemSchema);

```

---

<a id="file-backend-models-claim-js"></a>
## FILE: `backend/models/Claim.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\models\Claim.js`

```javascript
const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    claimant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reason: {
      type: String,
      required: [true, 'Please explain why this item belongs to you'],
      trim: true,
    },
    identifyingDetails: {
      type: String,
      required: [true, 'Please provide identifying details'],
      trim: true,
    },
    proof: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    adminNotes: {
      type: String,
      default: '',
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Claim', claimSchema);

```

---

<a id="file-backend-models-notification-js"></a>
## FILE: `backend/models/Notification.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\models\Notification.js`

```javascript
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: [
        'REPORT_SUBMITTED',
        'REPORT_VERIFIED',
        'REPORT_REJECTED',
        'CLAIM_SUBMITTED',
        'CLAIM_APPROVED',
        'CLAIM_REJECTED',
        'ITEM_RETURNED',
        'MESSAGE',
        'STATUS_CHANGE',
        'GENERAL',
      ],
      default: 'GENERAL',
    },
    relatedItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      default: null,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Notification', notificationSchema);

```

---

<a id="file-backend-middleware-auth-js"></a>
## FILE: `backend/middleware/auth.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\middleware\auth.js`

```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'smart_campus_lost_and_found_secret_key_2026';

    const decoded = jwt.verify(token, secret);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token: User no longer exists.',
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Account has been deactivated. Please contact campus admin.',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired authentication token.',
    });
  }
};

const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied: Admin privileges required.',
    });
  }
  next();
};

const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const secret = process.env.JWT_SECRET || 'smart_campus_lost_and_found_secret_key_2026';
      const decoded = jwt.verify(token, secret);
      const user = await User.findById(decoded.id).select('-password');
      if (user && user.isActive) {
        req.user = user;
      }
    }
  } catch (err) {
    // Ignore error in optionalAuth
  }
  next();
};

module.exports = {
  authenticateToken,
  requireAdmin,
  optionalAuth,
};

```

---

<a id="file-backend-controllers-authcontroller-js"></a>
## FILE: `backend/controllers/authController.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\controllers\authController.js`

```javascript
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

```

---

<a id="file-backend-controllers-itemcontroller-js"></a>
## FILE: `backend/controllers/itemController.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\controllers\itemController.js`

```javascript
const Item = require('../models/Item');
const Notification = require('../models/Notification');
const User = require('../models/User');

// Helper to generate unique human-readable report ID
const generateReportId = (type) => {
  const prefix = type === 'lost' ? 'LOST' : 'FND';
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomSuffix}`;
};

// @desc    Get all items with search, filter, and sorting
// @route   GET /api/items
// @access  Public (with optionalAuth)
const getItems = async (req, res) => {
  try {
    const {
      type,
      category,
      location,
      date,
      search,
      status,
      sort = 'newest',
      limit,
      myReports,
    } = req.query;

    const query = {};

    // Filter by type (lost / found)
    if (type) {
      query.type = type.toLowerCase();
    }

    // Filter by category
    if (category && category !== 'All') {
      query.category = category;
    }

    // Filter by location (case-insensitive substring)
    if (location && location.trim() !== '') {
      query.location = { $regex: location.trim(), $options: 'i' };
    }

    // Filter by date
    if (date) {
      query.date = date;
    }

    // Search query across itemName and description
    if (search && search.trim() !== '') {
      const searchRegex = { $regex: search.trim(), $options: 'i' };
      query.$or = [{ itemName: searchRegex }, { description: searchRegex }, { location: searchRegex }];
    }

    // If fetching my reports (logged-in user only)
    if (myReports === 'true') {
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Authentication required for My Reports.' });
      }
      query.reportedBy = req.user._id;
    } else {
      // Public view restrictions:
      // "Only verified found reports should be publicly displayed"
      const isAdmin = req.user && req.user.role === 'admin';
      if (!isAdmin) {
        if (query.type === 'found') {
          // Exclude 'Pending Verification' and 'Rejected' for public found items
          query.status = { $in: ['Found', 'Claimed', 'Returned'] };
        } else if (!query.type) {
          // If viewing combined feed, found items must not be Pending Verification or Rejected
          query.$or = [
            { type: 'lost' },
            { type: 'found', status: { $in: ['Found', 'Claimed', 'Returned'] } },
          ];
        }
      }
    }

    // Explicit status filter if requested and permitted
    if (status && status !== 'All') {
      query.status = status;
    }

    // Sort order
    let sortOption = { createdAt: -1 };
    if (sort === 'oldest') {
      sortOption = { createdAt: 1 };
    } else if (sort === 'date_desc') {
      sortOption = { date: -1 };
    } else if (sort === 'date_asc') {
      sortOption = { date: 1 };
    }

    let itemsQuery = Item.find(query)
      .populate('reportedBy', 'name studentId department year')
      .sort(sortOption);

    if (limit) {
      itemsQuery = itemsQuery.limit(parseInt(limit, 10));
    }

    const items = await itemsQuery.exec();

    return res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single item details
// @route   GET /api/items/:id
// @access  Public (optionalAuth)
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    let item;

    // Check if ID is MongoDB ObjectId or custom reportId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      item = await Item.findById(id).populate('reportedBy', 'name studentId department year email phone');
    } else {
      item = await Item.findOne({ reportId: id.toUpperCase() }).populate('reportedBy', 'name studentId department year email phone');
    }

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    // Security requirement: Do not expose sensitive personal info publicly
    const isOwner = req.user && req.user._id.toString() === item.reportedBy._id.toString();
    const isAdmin = req.user && req.user.role === 'admin';

    const itemObj = item.toObject();
    if (!isOwner && !isAdmin) {
      // Hide reporter direct phone & email to protect student privacy
      if (itemObj.reportedBy) {
        delete itemObj.reportedBy.phone;
        delete itemObj.reportedBy.email;
      }
    }

    return res.status(200).json({
      success: true,
      item: itemObj,
      isOwner,
      isAdmin,
    });
  } catch (error) {
    console.error('Error fetching item details:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Report a lost item
// @route   POST /api/items/lost
// @access  Private
const reportLostItem = async (req, res) => {
  try {
    const {
      itemName,
      category,
      description,
      location,
      date,
      time,
      image,
      additionalInfo,
    } = req.body;

    if (!itemName || !category || !description || !location || !date) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Item Name, Category, Description, Location, and Date).',
      });
    }

    const reportId = generateReportId('lost');

    const newItem = await Item.create({
      reportId,
      itemName: itemName.trim(),
      category,
      description: description.trim(),
      image: image || '',
      type: 'lost',
      location: location.trim(),
      date,
      time: time || '',
      status: 'Searching',
      reportedBy: req.user._id,
      additionalInfo: additionalInfo ? additionalInfo.trim() : '',
    });

    // Create confirmation notification for the student
    await Notification.create({
      userId: req.user._id,
      message: `Your lost item report for "${newItem.itemName}" (Report ID: ${reportId}) has been successfully submitted. Campus status: Searching.`,
      type: 'REPORT_SUBMITTED',
      relatedItemId: newItem._id,
    });

    return res.status(201).json({
      success: true,
      message: 'Lost item report submitted successfully!',
      reportId,
      item: newItem,
    });
  } catch (error) {
    console.error('Error reporting lost item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Report a found item
// @route   POST /api/items/found
// @access  Private
const reportFoundItem = async (req, res) => {
  try {
    const {
      itemName,
      category,
      description,
      location,
      date,
      time,
      image,
      additionalInfo,
    } = req.body;

    if (!itemName || !category || !description || !location || !date) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Item Name, Category, Description, Found Location, and Date).',
      });
    }

    const reportId = generateReportId('found');

    const newItem = await Item.create({
      reportId,
      itemName: itemName.trim(),
      category,
      description: description.trim(),
      image: image || '',
      type: 'found',
      location: location.trim(),
      date,
      time: time || '',
      status: 'Pending Verification',
      reportedBy: req.user._id,
      additionalInfo: additionalInfo ? additionalInfo.trim() : '',
    });

    // Create notification for the student
    await Notification.create({
      userId: req.user._id,
      message: `Your found item report for "${newItem.itemName}" (Report ID: ${reportId}) has been received and sent to Campus Admin for verification.`,
      type: 'REPORT_SUBMITTED',
      relatedItemId: newItem._id,
    });

    // Notify administrators of new pending item
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        message: `New found item submitted: "${newItem.itemName}" (${reportId}) requires verification.`,
        type: 'STATUS_CHANGE',
        relatedItemId: newItem._id,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Found item report submitted successfully! It is pending admin verification.',
      reportId,
      item: newItem,
    });
  } catch (error) {
    console.error('Error reporting found item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update report (owner or admin)
// @route   PUT /api/items/:id
// @access  Private
const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    const isOwner = item.reportedBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Unauthorized: You can only edit your own reports.' });
    }

    const {
      itemName,
      category,
      description,
      location,
      date,
      time,
      image,
      additionalInfo,
      status,
    } = req.body;

    if (itemName) item.itemName = itemName.trim();
    if (category) item.category = category;
    if (description) item.description = description.trim();
    if (location) item.location = location.trim();
    if (date) item.date = date;
    if (time !== undefined) item.time = time;
    if (image !== undefined) item.image = image;
    if (additionalInfo !== undefined) item.additionalInfo = additionalInfo;

    // Only admin or owner can change status
    if (status && (isAdmin || isOwner)) {
      item.status = status;
    }

    await item.save();

    return res.status(200).json({
      success: true,
      message: 'Item updated successfully.',
      item,
    });
  } catch (error) {
    console.error('Error updating item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete report (owner or admin)
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    const isOwner = item.reportedBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Unauthorized: You can only delete your own reports.' });
    }

    await Item.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: 'Report deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting item:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Mark item as returned
// @route   PUT /api/items/:id/return
// @access  Private
const markAsReturned = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    const isOwner = item.reportedBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Unauthorized to change this report status.' });
    }

    item.status = 'Returned';
    await item.save();

    // Create notification for owner
    await Notification.create({
      userId: item.reportedBy,
      message: `Your item "${item.itemName}" (${item.reportId}) has been successfully marked as Returned!`,
      type: 'ITEM_RETURNED',
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Item has been marked as returned.',
      item,
    });
  } catch (error) {
    console.error('Error marking item as returned:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Safe contact reporter without exposing direct phone/email
// @route   POST /api/items/:id/contact
// @access  Private
const contactReporter = async (req, res) => {
  try {
    const { message, contactInfo } = req.body;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, message: 'Please provide a message for the reporter.' });
    }

    // Send notification to the reporter
    await Notification.create({
      userId: item.reportedBy,
      message: `Campus member ${req.user.name} (${req.user.department}, ${req.user.year}) sent a message regarding "${item.itemName}" (${item.reportId}): "${message.trim()}". Preferred contact: ${contactInfo || req.user.email}`,
      type: 'MESSAGE',
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been securely sent to the reporter via campus notifications.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Report incorrect information on an item
// @route   POST /api/items/:id/report-issue
// @access  Private
const reportIncorrectInfo = async (req, res) => {
  try {
    const { reason, notes } = req.body;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    // Notify admins
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        message: `Issue reported on item "${item.itemName}" (${item.reportId}) by ${req.user.name}: [${reason}] ${notes || ''}`,
        type: 'GENERAL',
        relatedItemId: item._id,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you. Campus administration has been notified to review this listing.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getItems,
  getItemById,
  reportLostItem,
  reportFoundItem,
  updateItem,
  deleteItem,
  markAsReturned,
  contactReporter,
  reportIncorrectInfo,
};

```

---

<a id="file-backend-controllers-claimcontroller-js"></a>
## FILE: `backend/controllers/claimController.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\controllers\claimController.js`

```javascript
const Claim = require('../models/Claim');
const Item = require('../models/Item');
const Notification = require('../models/Notification');
const User = require('../models/User');

// @desc    Submit a claim for an item
// @route   POST /api/items/:id/claim
// @access  Private
const submitClaim = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason, identifyingDetails, proof } = req.body;

    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found.' });
    }

    // Do not allow reporting user to claim their own item
    if (item.reportedBy.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot claim an item that you reported yourself.',
      });
    }

    if (!reason || !identifyingDetails) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both the reason you believe this item is yours and identifying details.',
      });
    }

    // Check if user already submitted a pending claim for this item
    const existingClaim = await Claim.findOne({
      itemId: item._id,
      claimant: req.user._id,
      status: 'Pending',
    });
    if (existingClaim) {
      return res.status(400).json({
        success: false,
        message: 'You already have a pending claim submitted for this item.',
      });
    }

    const claim = await Claim.create({
      itemId: item._id,
      claimant: req.user._id,
      reason: reason.trim(),
      identifyingDetails: identifyingDetails.trim(),
      proof: proof || '',
      status: 'Pending',
    });

    // Notify the item reporter
    await Notification.create({
      userId: item.reportedBy,
      message: `Someone submitted a claim for your item "${item.itemName}" (${item.reportId}). Reviewing by campus admin is underway.`,
      type: 'CLAIM_SUBMITTED',
      relatedItemId: item._id,
    });

    // Notify the claimant
    await Notification.create({
      userId: req.user._id,
      message: `Your claim for "${item.itemName}" (${item.reportId}) was submitted successfully and is currently under review.`,
      type: 'CLAIM_SUBMITTED',
      relatedItemId: item._id,
    });

    // Notify campus admins
    const admins = await User.find({ role: 'admin' });
    for (const admin of admins) {
      await Notification.create({
        userId: admin._id,
        message: `New claim submitted by ${req.user.name} for item "${item.itemName}" (${item.reportId}).`,
        type: 'CLAIM_SUBMITTED',
        relatedItemId: item._id,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Your claim has been submitted successfully for verification.',
      claim,
    });
  } catch (error) {
    console.error('Error submitting claim:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get claims submitted by logged in user
// @route   GET /api/claims/my
// @access  Private
const getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ claimant: req.user._id })
      .populate('itemId')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: claims.length,
      claims,
    });
  } catch (error) {
    console.error('Error fetching student claims:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all claims (Admin or Reporter)
// @route   GET /api/claims
// @access  Private (Admin or item owners)
const getAllClaims = async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== 'admin') {
      // If student, only get claims for items they reported
      const myItems = await Item.find({ reportedBy: req.user._id }).select('_id');
      const itemIds = myItems.map((it) => it._id);
      query.itemId = { $in: itemIds };
    }

    const claims = await Claim.find(query)
      .populate('itemId')
      .populate('claimant', 'name studentId email phone department year')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: claims.length,
      claims,
    });
  } catch (error) {
    console.error('Error fetching claims:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update claim status (Approve or Reject)
// @route   PUT /api/claims/:id
// @access  Private (Admin)
const updateClaimStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;

    if (!['Approved', 'Rejected', 'Pending'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be Pending, Approved, or Rejected.',
      });
    }

    const claim = await Claim.findById(req.params.id)
      .populate('itemId')
      .populate('claimant', 'name email');

    if (!claim) {
      return res.status(404).json({ success: false, message: 'Claim not found.' });
    }

    claim.status = status;
    if (adminNotes !== undefined) claim.adminNotes = adminNotes;
    claim.reviewedBy = req.user._id;
    await claim.save();

    const item = await Item.findById(claim.itemId._id || claim.itemId);

    if (status === 'Approved') {
      // Update item status to 'Claimed'
      if (item) {
        item.status = 'Claimed';
        await item.save();

        // Notify reporter
        await Notification.create({
          userId: item.reportedBy,
          message: `The claim on your item "${item.itemName}" (${item.reportId}) was verified and approved by administration. Status updated to Claimed.`,
          type: 'CLAIM_APPROVED',
          relatedItemId: item._id,
        });
      }

      // Notify claimant
      await Notification.create({
        userId: claim.claimant._id || claim.claimant,
        message: `Your claim for item "${item ? item.itemName : 'Campus Item'}" was approved! Please visit the campus Lost & Found desk to collect your item.`,
        type: 'CLAIM_APPROVED',
        relatedItemId: item ? item._id : null,
      });
    } else if (status === 'Rejected') {
      // Notify claimant
      await Notification.create({
        userId: claim.claimant._id || claim.claimant,
        message: `Your claim for item "${item ? item.itemName : 'Campus Item'}" was rejected. ${adminNotes ? 'Reason: ' + adminNotes : 'Identifying details did not match.'}`,
        type: 'CLAIM_REJECTED',
        relatedItemId: item ? item._id : null,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Claim status successfully updated to ${status}.`,
      claim,
    });
  } catch (error) {
    console.error('Error updating claim status:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  submitClaim,
  getMyClaims,
  getAllClaims,
  updateClaimStatus,
};

```

---

<a id="file-backend-controllers-admincontroller-js"></a>
## FILE: `backend/controllers/adminController.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\controllers\adminController.js`

```javascript
const User = require('../models/User');
const Item = require('../models/Item');
const Claim = require('../models/Claim');
const Notification = require('../models/Notification');

// @desc    Get Admin Dashboard statistics and analytics
// @route   GET /api/admin/dashboard
// @access  Private (Admin)
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'student' });
    const totalLostReports = await Item.countDocuments({ type: 'lost' });
    const totalFoundReports = await Item.countDocuments({ type: 'found' });
    const pendingVerification = await Item.countDocuments({ status: 'Pending Verification' });
    const pendingClaims = await Claim.countDocuments({ status: 'Pending' });
    const resolvedCases = await Item.countDocuments({ status: { $in: ['Returned', 'Claimed'] } });

    // Category breakdown
    const categoryStats = await Item.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    // Status breakdown
    const statusStats = await Item.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    // Recent activities (recent reports and recent claims)
    const recentReports = await Item.find()
      .populate('reportedBy', 'name studentId department')
      .sort({ createdAt: -1 })
      .limit(5);

    const recentClaims = await Claim.find()
      .populate('itemId', 'itemName reportId')
      .populate('claimant', 'name studentId')
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalLostReports,
        totalFoundReports,
        pendingVerification,
        pendingClaims,
        resolvedCases,
      },
      categoryStats,
      statusStats,
      recentReports,
      recentClaims,
    });
  } catch (error) {
    console.error('Error fetching admin dashboard stats:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all registered users / students
// @route   GET /api/admin/users
// @access  Private (Admin)
const getUsers = async (req, res) => {
  try {
    const { search, role, status } = req.query;
    const query = {};

    if (role && role !== 'All') {
      query.role = role;
    } else {
      // By default show students or all users
      query.role = { $in: ['student', 'admin'] };
    }

    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'deactivated') {
      query.isActive = false;
    }

    if (search && search.trim() !== '') {
      const regex = { $regex: search.trim(), $options: 'i' };
      query.$or = [
        { name: regex },
        { email: regex },
        { studentId: regex },
        { department: regex },
      ];
    }

    const users = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Activate or deactivate student account
// @route   PUT /api/admin/users/:id/status
// @access  Private (Admin)
const toggleUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    // Protect against self-deactivation by admin
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'Admin cannot deactivate their own active account.',
      });
    }

    user.isActive = isActive !== undefined ? isActive : !user.isActive;
    await user.save();

    await Notification.create({
      userId: user._id,
      message: `Your campus account status has been updated to: ${user.isActive ? 'Active' : 'Deactivated'}.`,
      type: 'GENERAL',
    });

    return res.status(200).json({
      success: true,
      message: `User account successfully ${user.isActive ? 'activated' : 'deactivated'}.`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all reports with admin filters
// @route   GET /api/admin/reports
// @access  Private (Admin)
const getAllAdminReports = async (req, res) => {
  try {
    const { type, status, category, search } = req.query;
    const query = {};

    if (type && type !== 'All') {
      query.type = type;
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search && search.trim() !== '') {
      const regex = { $regex: search.trim(), $options: 'i' };
      query.$or = [{ itemName: regex }, { reportId: regex }, { location: regex }, { description: regex }];
    }

    const reports = await Item.find(query)
      .populate('reportedBy', 'name studentId email phone department year')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    console.error('Error fetching admin reports:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Verify a found item report
// @route   PUT /api/admin/reports/:id/verify
// @access  Private (Admin)
const verifyReport = async (req, res) => {
  try {
    const { notes } = req.body;
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Report not found.' });
    }

    item.status = 'Found';
    item.verifiedBy = req.user._id;
    if (notes) item.verificationNotes = notes;
    await item.save();

    // Create notification for reporter
    await Notification.create({
      userId: item.reportedBy,
      message: `Your found item report for "${item.itemName}" (${item.reportId}) has been verified by campus administration and is now visible to students!`,
      type: 'REPORT_VERIFIED',
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Report verified successfully and published to campus listings.',
      item,
    });
  } catch (error) {
    console.error('Error verifying report:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update report status or reject
// @route   PUT /api/admin/reports/:id/status
// @access  Private (Admin)
const updateReportStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Report not found.' });
    }

    const validStatuses = [
      'Pending Verification',
      'Searching',
      'Found',
      'Claimed',
      'Returned',
      'Rejected',
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Valid options are: ${validStatuses.join(', ')}`,
      });
    }

    item.status = status;
    if (notes) item.verificationNotes = notes;
    await item.save();

    // Notify student of status update
    let notifType = 'STATUS_CHANGE';
    let notifMsg = `The status of your report for "${item.itemName}" (${item.reportId}) has been changed to "${status}".`;

    if (status === 'Rejected') {
      notifType = 'REPORT_REJECTED';
      notifMsg = `Your report for "${item.itemName}" (${item.reportId}) was rejected by administration. ${notes ? 'Note: ' + notes : ''}`;
    } else if (status === 'Returned') {
      notifType = 'ITEM_RETURNED';
      notifMsg = `Your item "${item.itemName}" (${item.reportId}) has been marked as returned.`;
    }

    await Notification.create({
      userId: item.reportedBy,
      message: notifMsg,
      type: notifType,
      relatedItemId: item._id,
    });

    return res.status(200).json({
      success: true,
      message: `Report status updated to ${status}.`,
      item,
    });
  } catch (error) {
    console.error('Error updating report status:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete fake or inappropriate report
// @route   DELETE /api/admin/reports/:id
// @access  Private (Admin)
const deleteAdminReport = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Report not found.' });
    }

    // Notify user that report was removed by admin
    await Notification.create({
      userId: item.reportedBy,
      message: `Your report for "${item.itemName}" (${item.reportId}) was removed by campus administration as it violates policy or contains inappropriate content.`,
      type: 'REPORT_REJECTED',
    });

    await Item.findByIdAndDelete(req.params.id);
    await Claim.deleteMany({ itemId: item._id });

    return res.status(200).json({
      success: true,
      message: 'Report and associated claims have been permanently removed.',
    });
  } catch (error) {
    console.error('Error deleting report:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getDashboardStats,
  getUsers,
  toggleUserStatus,
  getAllAdminReports,
  verifyReport,
  updateReportStatus,
  deleteAdminReport,
};

```

---

<a id="file-backend-controllers-notificationcontroller-js"></a>
## FILE: `backend/controllers/notificationController.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\controllers\notificationController.js`

```javascript
const Notification = require('../models/Notification');

// @desc    Get user notifications
// @route   GET /api/notifications
// @access  Private
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user._id })
      .populate('relatedItemId', 'itemName reportId type image')
      .sort({ createdAt: -1 })
      .limit(50);

    const unreadCount = await Notification.countDocuments({
      userId: req.user._id,
      read: false,
    });

    return res.status(200).json({
      success: true,
      unreadCount,
      notifications,
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Mark a notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found.' });
    }

    notification.read = true;
    await notification.save();

    return res.status(200).json({
      success: true,
      notification,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Mark all notifications as read
// @route   PUT /api/notifications/read-all
// @access  Private
const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany({ userId: req.user._id, read: false }, { $set: { read: true } });

    return res.status(200).json({
      success: true,
      message: 'All notifications marked as read.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a notification
// @route   DELETE /api/notifications/:id
// @access  Private
const deleteNotification = async (req, res) => {
  try {
    await Notification.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    return res.status(200).json({
      success: true,
      message: 'Notification deleted.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
};

```

---

<a id="file-backend-routes-authroutes-js"></a>
## FILE: `backend/routes/authRoutes.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\routes\authRoutes.js`

```javascript
const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateProfile,
  changePassword,
  forgotPassword,
} = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken, getMe);
router.put('/profile', authenticateToken, updateProfile);
router.put('/change-password', authenticateToken, changePassword);
router.post('/forgot-password', forgotPassword);

module.exports = router;

```

---

<a id="file-backend-routes-itemroutes-js"></a>
## FILE: `backend/routes/itemRoutes.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\routes\itemRoutes.js`

```javascript
const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  reportLostItem,
  reportFoundItem,
  updateItem,
  deleteItem,
  markAsReturned,
  contactReporter,
  reportIncorrectInfo,
} = require('../controllers/itemController');
const { submitClaim } = require('../controllers/claimController');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

router.get('/', optionalAuth, getItems);
router.get('/:id', optionalAuth, getItemById);

router.post('/lost', authenticateToken, reportLostItem);
router.post('/found', authenticateToken, reportFoundItem);
router.put('/:id', authenticateToken, updateItem);
router.delete('/:id', authenticateToken, deleteItem);
router.put('/:id/return', authenticateToken, markAsReturned);

// Claim an item
router.post('/:id/claim', authenticateToken, submitClaim);

// Safe contact reporter
router.post('/:id/contact', authenticateToken, contactReporter);

// Report incorrect information
router.post('/:id/report-issue', authenticateToken, reportIncorrectInfo);

module.exports = router;

```

---

<a id="file-backend-routes-claimroutes-js"></a>
## FILE: `backend/routes/claimRoutes.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\routes\claimRoutes.js`

```javascript
const express = require('express');
const router = express.Router();
const {
  getMyClaims,
  getAllClaims,
  updateClaimStatus,
} = require('../controllers/claimController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

router.get('/my', authenticateToken, getMyClaims);
router.get('/', authenticateToken, getAllClaims);
router.put('/:id', authenticateToken, requireAdmin, updateClaimStatus);

module.exports = router;

```

---

<a id="file-backend-routes-adminroutes-js"></a>
## FILE: `backend/routes/adminRoutes.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\routes\adminRoutes.js`

```javascript
const express = require('express');
const router = express.Router();
const {
  getDashboardStats,
  getUsers,
  toggleUserStatus,
  getAllAdminReports,
  verifyReport,
  updateReportStatus,
  deleteAdminReport,
} = require('../controllers/adminController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// All admin routes require valid JWT and admin role
router.use(authenticateToken, requireAdmin);

router.get('/dashboard', getDashboardStats);
router.get('/users', getUsers);
router.put('/users/:id/status', toggleUserStatus);
router.get('/reports', getAllAdminReports);
router.put('/reports/:id/verify', verifyReport);
router.put('/reports/:id/status', updateReportStatus);
router.delete('/reports/:id', deleteAdminReport);

module.exports = router;

```

---

<a id="file-backend-routes-notificationroutes-js"></a>
## FILE: `backend/routes/notificationRoutes.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\routes\notificationRoutes.js`

```javascript
const express = require('express');
const router = express.Router();
const {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} = require('../controllers/notificationController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken, getNotifications);
router.put('/read-all', authenticateToken, markAllAsRead);
router.put('/:id/read', authenticateToken, markAsRead);
router.delete('/:id', authenticateToken, deleteNotification);

module.exports = router;

```

---

<a id="file-backend-utils-seed-js"></a>
## FILE: `backend/utils/seed.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\utils\seed.js`

```javascript
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

```

---

<a id="file-frontend-package-json"></a>
## FILE: `frontend/package.json`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\package.json`

```json
{
  "name": "smart-campus-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.2",
    "lucide-react": "^0.395.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.2.11"
  }
}

```

---

<a id="file-frontend-vite-config-js"></a>
## FILE: `frontend/vite.config.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

```

---

<a id="file-frontend-index-html"></a>
## FILE: `frontend/index.html`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a365d'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smart Campus Lost & Found | University Portal</title>
    <!-- Google Fonts for modern clean typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

<a id="file-frontend-src-main-jsx"></a>
## FILE: `frontend/src/main.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\main.jsx`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

---

<a id="file-frontend-src-app-jsx"></a>
## FILE: `frontend/src/App.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\App.jsx`

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LostItemsPage from './pages/LostItemsPage';
import FoundItemsPage from './pages/FoundItemsPage';
import ReportLostPage from './pages/ReportLostPage';
import ReportFoundPage from './pages/ReportFoundPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import MyReportsPage from './pages/MyReportsPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/lost-items" element={<LostItemsPage />} />
                <Route path="/found-items" element={<FoundItemsPage />} />
                <Route path="/items/:id" element={<ItemDetailsPage />} />

                {/* Protected Student Routes */}
                <Route
                  path="/report-lost"
                  element={
                    <ProtectedRoute>
                      <ReportLostPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/report-found"
                  element={
                    <ProtectedRoute>
                      <ReportFoundPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/my-reports"
                  element={
                    <ProtectedRoute>
                      <MyReportsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    <ProtectedRoute>
                      <NotificationsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />

                {/* Role-Based Protected Admin Route */}
                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <AdminDashboardPage />
                    </AdminRoute>
                  }
                />

                {/* 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

```

---

<a id="file-frontend-src-index-css"></a>
## FILE: `frontend/src/index.css`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\index.css`

```css
:root {
  --primary: #0f2b48;
  --primary-dark: #0a1b2e;
  --primary-light: #1b446f;
  --accent: #d97706;
  --accent-light: #fef3c7;
  --accent-hover: #b45309;
  --success: #059669;
  --success-light: #d1fae5;
  --danger: #dc2626;
  --danger-light: #fee2e2;
  --warning: #f59e0b;
  --warning-light: #fef3c7;
  --info: #2563eb;
  --info-light: #dbeafe;
  
  --bg-main: #f8fafc;
  --bg-card: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --text-light: #94a3b8;
  --border: #e2e8f0;
  --border-focus: #3b82f6;

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

input, select, textarea {
  font-family: inherit;
  font-size: 0.95rem;
}

/* Layout helpers */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* Header & Navbar */
.navbar {
  background-color: var(--primary);
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 12px rgba(10, 27, 46, 0.15);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.navbar-brand-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  padding: 8px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  color: #e2e8f0;
  padding: 0.5rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-link:hover, .nav-link.active {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.12);
}

.nav-link-badge {
  background-color: var(--accent);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: var(--radius-full);
}

.nav-user-menu {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0.5rem;
  padding-left: 0.75rem;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.user-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-role-tag {
  background-color: #f59e0b;
  color: #0f172a;
  font-weight: 700;
  font-size: 0.65rem;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
}

.user-role-tag.admin {
  background-color: #10b981;
  color: #ffffff;
}

.mobile-toggle {
  display: none;
  color: #ffffff;
  padding: 6px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0f2b48 0%, #173d66 60%, #1f4e82 100%);
  color: #ffffff;
  padding: 4.5rem 0 5rem;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fef3c7;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--primary-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-accent {
  background-color: #d97706;
  color: #ffffff;
}

.btn-accent:hover {
  background-color: #b45309;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: #ffffff;
  color: var(--primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background-color: #f1f5f9;
  border-color: #cbd5e1;
}

.btn-outline-white {
  background-color: transparent;
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
}

.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
}

.btn-danger {
  background-color: var(--danger);
  color: #ffffff;
}

.btn-danger:hover {
  background-color: #b91c1c;
}

.btn-success {
  background-color: var(--success);
  color: #ffffff;
}

.btn-success:hover {
  background-color: #047857;
}

.btn-sm {
  padding: 0.45rem 0.85rem;
  font-size: 0.825rem;
}

.btn-lg {
  padding: 0.9rem 1.8rem;
  font-size: 1.05rem;
}

.btn-block {
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* Category Cards Grid */
.categories-section {
  padding: 3.5rem 0;
}

.section-header {
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: 0.25rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  gap: 1.25rem;
}

.category-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.category-card:hover, .category-card.selected {
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  background-color: #f8fafc;
}

.category-card.selected {
  border-color: var(--primary);
  background: #eff6ff;
}

.category-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: #eff6ff;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.category-card:hover .category-icon {
  background-color: var(--primary);
  color: #ffffff;
}

.category-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
}

/* Item Card Grid */
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.item-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
  position: relative;
}

.item-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: #cbd5e1;
}

.item-card-media {
  position: relative;
  height: 190px;
  background-color: #f1f5f9;
  overflow: hidden;
}

.item-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.item-card:hover .item-card-img {
  transform: scale(1.04);
}

.item-card-type-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 0.725rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: var(--shadow-sm);
}

.item-card-type-tag.lost {
  background-color: var(--danger);
  color: #ffffff;
}

.item-card-type-tag.found {
  background-color: var(--success);
  color: #ffffff;
}

.item-card-status {
  position: absolute;
  top: 12px;
  right: 12px;
}

.item-card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.item-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.item-category-pill {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary);
  background-color: #e0f2fe;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.item-report-id {
  font-size: 0.75rem;
  color: var(--text-light);
  font-family: monospace;
}

.item-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-card-description {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.45;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.item-card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f1f5f9;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.item-card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}

/* Status Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

.badge-searching {
  background-color: #fee2e2;
  color: #b91c1c;
}

.badge-pending {
  background-color: #fef3c7;
  color: #b45309;
}

.badge-found {
  background-color: #d1fae5;
  color: #047857;
}

.badge-claimed {
  background-color: #ede9fe;
  color: #6d28d9;
}

.badge-returned {
  background-color: #e0e7ff;
  color: #3730a3;
}

.badge-rejected {
  background-color: #f1f5f9;
  color: #64748b;
  text-decoration: line-through;
}

/* Filter & Search Toolbar */
.filter-bar {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  background-color: #ffffff;
  color: var(--text-main);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.form-error-msg {
  color: var(--danger);
  font-size: 0.775rem;
  font-weight: 500;
}

/* Auth Cards & Forms */
.auth-page-container {
  min-height: calc(100vh - 72px - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
}

.auth-card {
  width: 100%;
  max-width: 520px;
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
}

.auth-card.register-card {
  max-width: 720px;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.auth-alert {
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.auth-alert-error {
  background-color: var(--danger-light);
  color: #991b1b;
  border: 1px solid #fecaca;
}

.auth-alert-success {
  background-color: var(--success-light);
  color: #065f46;
  border: 1px solid #a7f3d0;
}

/* Modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
}

.modal-content {
  background-color: #ffffff;
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
  padding: 2rem;
  position: relative;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.modal-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--primary);
}

.modal-close-btn {
  color: var(--text-light);
  padding: 4px;
  border-radius: var(--radius-sm);
  transition: color 0.15s ease;
}

.modal-close-btn:hover {
  color: var(--text-main);
}

/* Admin Dashboard Tables & Panels */
.admin-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1;
}

.stat-label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-top: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.admin-nav-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid var(--border);
  margin-bottom: 1.5rem;
  overflow-x: auto;
}

.admin-nav-tab {
  padding: 0.75rem 1.25rem;
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--text-muted);
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.admin-nav-tab:hover {
  color: var(--primary);
}

.admin-nav-tab.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.data-table-container {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
}

.data-table th {
  background-color: #f8fafc;
  color: var(--text-muted);
  font-weight: 600;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

.data-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

.data-table tbody tr:hover {
  background-color: #f8fafc;
}

/* Footer */
.footer {
  background-color: var(--primary-dark);
  color: #94a3b8;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-brand {
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.footer-link-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link-title {
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}

.footer-link {
  font-size: 0.875rem;
  transition: color 0.15s ease;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
  font-size: 0.8rem;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .hero-title {
    font-size: 2.4rem;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background-color: var(--primary);
    flex-direction: column;
    align-items: stretch;
    padding: 1.25rem;
    gap: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  .nav-links.mobile-open {
    display: flex;
  }
  .nav-user-menu {
    border-left: none;
    padding-left: 0;
    margin-left: 0;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    align-items: stretch;
  }
  .footer-grid {
    grid-template-columns: 1fr;
  }
}

```

---

<a id="file-frontend-src-services-api-js"></a>
## FILE: `frontend/src/services/api.js`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\services\api.js`

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for consistent error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If unauthorized or token expired, remove token
    if (error.response && error.response.status === 401) {
      // Don't clear on login attempt failures
      if (!error.config.url.includes('/auth/login')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    return Promise.reject(error);
  }
);

// Auth Services
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  changePassword: (data) => api.put('/auth/change-password', data),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
};

// Item Services
export const itemService = {
  getItems: (params) => api.get('/items', { params }),
  getItemById: (id) => api.get(`/items/${id}`),
  reportLost: (data) => api.post('/items/lost', data),
  reportFound: (data) => api.post('/items/found', data),
  updateItem: (id, data) => api.put(`/items/${id}`, data),
  deleteItem: (id) => api.delete(`/items/${id}`),
  markAsReturned: (id) => api.put(`/items/${id}/return`),
  contactReporter: (id, data) => api.post(`/items/${id}/contact`, data),
  reportIssue: (id, data) => api.post(`/items/${id}/report-issue`, data),
};

// Claim Services
export const claimService = {
  submitClaim: (itemId, data) => api.post(`/items/${itemId}/claim`, data),
  getMyClaims: () => api.get('/claims/my'),
  getAllClaims: () => api.get('/claims'),
  updateClaimStatus: (id, data) => api.put(`/claims/${id}`, data),
};

// Notification Services
export const notificationService = {
  getNotifications: () => api.get('/notifications'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
  deleteNotification: (id) => api.delete(`/notifications/${id}`),
};

// Admin Services
export const adminService = {
  getDashboardStats: () => api.get('/admin/dashboard'),
  getUsers: (params) => api.get('/admin/users', { params }),
  toggleUserStatus: (id, isActive) => api.put(`/admin/users/${id}/status`, { isActive }),
  getAllReports: (params) => api.get('/admin/reports', { params }),
  verifyReport: (id, notes) => api.put(`/admin/reports/${id}/verify`, { notes }),
  updateReportStatus: (id, status, notes) => api.put(`/admin/reports/${id}/status`, { status, notes }),
  deleteReport: (id) => api.delete(`/admin/reports/${id}`),
};

export default api;

```

---

<a id="file-frontend-src-context-authcontext-jsx"></a>
## FILE: `frontend/src/context/AuthContext.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\context\AuthContext.jsx`

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');

      if (savedToken) {
        if (savedUser) {
          try {
            setUser(JSON.parse(savedUser));
          } catch (e) {
            console.error('Failed to parse cached user data', e);
          }
        }

        try {
          const res = await authService.getMe();
          if (res.data.success && res.data.user) {
            setUser(res.data.user);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        } catch (err) {
          console.warn('Session expired or invalid token:', err.response?.data?.message);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (identifier, password) => {
    const res = await authService.login({ identifier, password });
    if (res.data.success) {
      const { token: receivedToken, user: receivedUser } = res.data;
      setToken(receivedToken);
      setUser(receivedUser);
      localStorage.setItem('token', receivedToken);
      localStorage.setItem('user', JSON.stringify(receivedUser));
      return receivedUser;
    }
    throw new Error(res.data.message || 'Login failed');
  };

  const register = async (userData) => {
    const res = await authService.register(userData);
    return res.data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const isAuthenticated = !!token && !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        isAdmin,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;

```

---

<a id="file-frontend-src-context-notificationcontext-jsx"></a>
## FILE: `frontend/src/context/NotificationContext.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\context\NotificationContext.jsx`

```javascript
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { notificationService } from '../services/api';
import { useAuth } from './AuthContext';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = useCallback(async () => {
    if (!isAuthenticated) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    try {
      setLoading(true);
      const res = await notificationService.getNotifications();
      if (res.data.success) {
        setNotifications(res.data.notifications || []);
        setUnreadCount(res.data.unreadCount || 0);
      }
    } catch (err) {
      console.error('Failed to load notifications:', err);
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchNotifications();
    // Periodic check every 30 seconds if authenticated
    let interval;
    if (isAuthenticated) {
      interval = setInterval(fetchNotifications, 30000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [fetchNotifications, isAuthenticated]);

  const markAsRead = async (id) => {
    try {
      await notificationService.markAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error('Error marking all notifications as read:', err);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await notificationService.deleteNotification(id);
      const target = notifications.find((n) => n._id === id);
      setNotifications((prev) => prev.filter((n) => n._id !== id));
      if (target && !target.read) {
        setUnreadCount((prev) => Math.max(0, prev - 1));
      }
    } catch (err) {
      console.error('Error deleting notification:', err);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        loading,
        fetchNotifications,
        markAsRead,
        markAllAsRead,
        deleteNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export default NotificationContext;

```

---

<a id="file-frontend-src-components-statusbadge-jsx"></a>
## FILE: `frontend/src/components/StatusBadge.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\StatusBadge.jsx`

```javascript
import React from 'react';
import { Search, Clock, CheckCircle2, ShieldAlert, Award, RotateCcw, XCircle } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const norm = (status || '').toLowerCase();

  if (norm === 'searching') {
    return (
      <span className="badge badge-searching">
        <Search size={12} /> Searching
      </span>
    );
  }

  if (norm.includes('pending')) {
    return (
      <span className="badge badge-pending">
        <Clock size={12} /> {status}
      </span>
    );
  }

  if (norm === 'found' || norm === 'verified') {
    return (
      <span className="badge badge-found">
        <CheckCircle2 size={12} /> Verified Found
      </span>
    );
  }

  if (norm === 'claimed') {
    return (
      <span className="badge badge-claimed">
        <Award size={12} /> Claimed
      </span>
    );
  }

  if (norm === 'returned') {
    return (
      <span className="badge badge-returned">
        <RotateCcw size={12} /> Returned
      </span>
    );
  }

  if (norm === 'rejected') {
    return (
      <span className="badge badge-rejected">
        <XCircle size={12} /> Rejected
      </span>
    );
  }

  return <span className="badge">{status}</span>;
};

export default StatusBadge;

```

---

<a id="file-frontend-src-components-loadingspinner-jsx"></a>
## FILE: `frontend/src/components/LoadingSpinner.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\LoadingSpinner.jsx`

```javascript
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ message = 'Loading campus records...' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
      <Loader2 size={36} className="animate-spin" style={{ animation: 'spin 1s linear infinite', color: 'var(--primary)', marginBottom: '0.75rem' }} />
      <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>{message}</p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;

```

---

<a id="file-frontend-src-components-itemcard-jsx"></a>
## FILE: `frontend/src/components/ItemCard.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\ItemCard.jsx`

```javascript
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, ChevronRight, HandHeart } from 'lucide-react';
import StatusBadge from './StatusBadge';

// Category-based placeholder images if none provided
const CATEGORY_IMAGES = {
  Electronics: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
  Bags: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
  Books: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
  'ID Cards': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80',
  Keys: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
  Clothing: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
  Accessories: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
  Other: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
};

const ItemCard = ({ item, onClaimClick }) => {
  const navigate = useNavigate();

  const imageUrl =
    item.image && item.image.trim() !== ''
      ? item.image
      : CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES.Other;

  return (
    <div className="item-card">
      <div className="item-card-media">
        <img
          src={imageUrl}
          alt={item.itemName}
          className="item-card-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES.Other;
          }}
        />
        <span className={`item-card-type-tag ${item.type}`}>
          {item.type === 'lost' ? 'Lost Item' : 'Found Item'}
        </span>
        <div className="item-card-status">
          <StatusBadge status={item.status} />
        </div>
      </div>

      <div className="item-card-body">
        <div className="item-card-header">
          <span className="item-category-pill">{item.category}</span>
          <span className="item-report-id">#{item.reportId}</span>
        </div>

        <h3 className="item-card-title">{item.itemName}</h3>
        <p className="item-card-description">{item.description}</p>

        <div className="item-card-meta">
          <div className="meta-row">
            <MapPin size={14} color="var(--primary-light)" />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {item.location}
            </span>
          </div>
          <div className="meta-row">
            <Calendar size={14} color="var(--primary-light)" />
            <span>
              {item.type === 'lost' ? 'Lost on: ' : 'Found on: '}
              {item.date} {item.time ? `at ${item.time}` : ''}
            </span>
          </div>
        </div>

        <div className="item-card-actions">
          <Link
            to={`/items/${item._id}`}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, textDecoration: 'none' }}
          >
            View Details <ChevronRight size={14} />
          </Link>

          {item.type === 'found' &&
            item.status === 'Found' &&
            onClaimClick && (
              <button
                type="button"
                onClick={() => onClaimClick(item)}
                className="btn btn-accent btn-sm"
                title="Claim this item"
              >
                <HandHeart size={14} /> Claim
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

```

---

<a id="file-frontend-src-components-navbar-jsx"></a>
## FILE: `frontend/src/components/Navbar.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\Navbar.jsx`

```javascript
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Search,
  PackageSearch,
  PlusCircle,
  FileText,
  Bell,
  User,
  Shield,
  LogOut,
  LogIn,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { unreadCount } = useNotifications();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <div className="navbar-brand-icon">
              <Compass size={22} color="#ffffff" />
            </div>
            <div>
              <span>SMART CAMPUS</span>
              <span style={{ color: '#f59e0b', marginLeft: '6px', fontWeight: 600, fontSize: '0.9em' }}>
                LOST & FOUND
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Navigation Links */}
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/lost-items" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Lost Items
            </NavLink>

            <NavLink to="/found-items" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Found Items
            </NavLink>

            <NavLink to="/report-lost" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              <PlusCircle size={15} /> Report Lost
            </NavLink>

            <NavLink to="/report-found" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              <Sparkles size={15} /> Report Found
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink to="/my-reports" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  <FileText size={15} /> My Reports
                </NavLink>

                <NavLink to="/notifications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  <Bell size={15} />
                  <span>Notifications</span>
                  {unreadCount > 0 && <span className="nav-link-badge">{unreadCount}</span>}
                </NavLink>

                <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  <User size={15} /> Profile
                </NavLink>

                {isAdmin && (
                  <NavLink to="/admin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                    <Shield size={15} color="#10b981" /> Admin
                  </NavLink>
                )}

                <div className="nav-user-menu">
                  <div className="user-badge">
                    <span style={{ fontWeight: 600 }}>{user?.name?.split(' ')[0]}</span>
                    <span className={`user-role-tag ${isAdmin ? 'admin' : ''}`}>
                      {user?.role}
                    </span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                    title="Log Out"
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="nav-user-menu">
                <Link to="/login" className="btn btn-outline-white btn-sm" onClick={closeMenu}>
                  <LogIn size={14} /> Login
                </Link>
                <Link to="/register" className="btn btn-accent btn-sm" onClick={closeMenu}>
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

```

---

<a id="file-frontend-src-components-footer-jsx"></a>
## FILE: `frontend/src/components/Footer.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\Footer.jsx`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, Clock, HelpCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              SMART CAMPUS <span style={{ color: '#f59e0b' }}>LOST & FOUND</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              The official centralized recovery portal for students, faculty, and campus security.
              Helping reconnect lost belongings with their owners swiftly and securely.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#cbd5e1' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>Campus Security Verified & Encrypted</span>
            </div>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-link-title">Quick Access</h4>
            <Link to="/lost-items" className="footer-link">Browse Lost Items</Link>
            <Link to="/found-items" className="footer-link">Browse Found Items</Link>
            <Link to="/report-lost" className="footer-link">Report Lost Belonging</Link>
            <Link to="/report-found" className="footer-link">Turn In Found Item</Link>
            <Link to="/my-reports" className="footer-link">Check My Submissions</Link>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-link-title">Campus Hub</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <MapPin size={15} color="#94a3b8" />
              <span>Student Center Room 108</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Clock size={15} color="#94a3b8" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Phone size={15} color="#94a3b8" />
              <span>(555) 019-2834 (Security Desk)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Mail size={15} color="#94a3b8" />
              <span>lostandfound@campus.edu</span>
            </div>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-link-title">Demo Access</h4>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '0.5rem' }}>
              Admin Demo: <code>admin@campus.edu</code> (<code>admin123</code>)
            </p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '0.5rem' }}>
              Student Demo: <code>sarah.jenkins@campus.edu</code> (<code>student123</code>)
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <Link to="/login" className="btn btn-secondary btn-sm" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>
                Quick Login Portal
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Smart Campus Lost & Found System. All rights reserved. Secure collegiate property recovery platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

---

<a id="file-frontend-src-components-protectedroute-jsx"></a>
## FILE: `frontend/src/components/ProtectedRoute.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\ProtectedRoute.jsx`

```javascript
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner message="Verifying campus credentials..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;

```

---

<a id="file-frontend-src-components-adminroute-jsx"></a>
## FILE: `frontend/src/components/AdminRoute.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\AdminRoute.jsx`

```javascript
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner message="Checking administrator privileges..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;

```

---

<a id="file-frontend-src-components-claimmodal-jsx"></a>
## FILE: `frontend/src/components/ClaimModal.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\ClaimModal.jsx`

```javascript
import React, { useState } from 'react';
import { X, HandHeart, AlertCircle, CheckCircle2, ShieldCheck, Upload } from 'lucide-react';
import { claimService } from '../services/api';
import { useNotifications } from '../context/NotificationContext';

const ClaimModal = ({ item, onClose, onSuccess }) => {
  const [reason, setReason] = useState('');
  const [identifyingDetails, setIdentifyingDetails] = useState('');
  const [proof, setProof] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { fetchNotifications } = useNotifications();

  if (!item) return null;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be smaller than 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProof(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!reason.trim() || !identifyingDetails.trim()) {
      setError('Please fill in both the ownership explanation and identifying details.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await claimService.submitClaim(item._id, {
        reason,
        identifyingDetails,
        proof,
      });

      if (res.data.success) {
        setSuccess(true);
        fetchNotifications();
        setTimeout(() => {
          if (onSuccess) onSuccess();
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to submit claim. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <HandHeart size={22} color="var(--accent)" />
            <h3 className="modal-title">Submit Item Ownership Claim</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>
            {item.itemName}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Report ID: <span style={{ fontFamily: 'monospace' }}>#{item.reportId}</span> • Found at: {item.location}
          </div>
        </div>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>Claim submitted successfully! Administration is reviewing your submission.</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">
              Why do you believe this item belongs to you? *
            </label>
            <textarea
              className="form-textarea"
              placeholder="e.g. I was studying at table 4 when I left this behind around 2:00 PM before class..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              rows={3}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">
              Identifying details (Serial number, marks, stickers, unique contents) *
            </label>
            <textarea
              className="form-textarea"
              placeholder="e.g. There is a sticker of Python on the top right, serial ending in 492, and small scratch on bottom corner..."
              value={identifyingDetails}
              onChange={(e) => setIdentifyingDetails(e.target.value)}
              required
              rows={3}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">
              Optional proof or reference image (Receipt, photo from camera roll)
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="claim-proof-input"
                style={{ display: 'none' }}
              />
              <label
                htmlFor="claim-proof-input"
                className="btn btn-secondary btn-sm"
                style={{ cursor: 'pointer' }}
              >
                <Upload size={14} /> Upload Proof Photo
              </label>
              {proof && (
                <span style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: 600 }}>
                  ✓ Image attached
                </span>
              )}
            </div>
            {proof && (
              <div style={{ marginTop: '0.5rem', width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img src={proof} alt="Proof preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-accent"
              disabled={submitting || success}
            >
              {submitting ? 'Submitting Claim...' : 'Submit Claim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimModal;

```

---

<a id="file-frontend-src-components-contactmodal-jsx"></a>
## FILE: `frontend/src/components/ContactModal.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\ContactModal.jsx`

```javascript
import React, { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { itemService } from '../services/api';
import { useAuth } from '../context/AuthContext';

const ContactModal = ({ item, onClose }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [contactInfo, setContactInfo] = useState(user?.email || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!item) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please provide a message.');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      const res = await itemService.contactReporter(item._id, {
        message,
        contactInfo,
      });

      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to dispatch message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={22} color="var(--primary)" />
            <h3 className="modal-title">Secure Reporter Contact</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
          To safeguard student privacy, contact requests are relayed securely through internal campus notifications.
        </p>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} />
            <span>Message sent to the reporter via their campus dashboard notification center!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">Your Message to the Reporter *</label>
            <textarea
              className="form-textarea"
              placeholder="e.g. Hello, I believe this is my item or I have more information about where it was seen..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Your Preferred Callback Information</label>
            <input
              type="text"
              className="form-input"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Email or phone number"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting || success}>
              <Send size={15} /> {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

```

---

<a id="file-frontend-src-components-reportissuemodal-jsx"></a>
## FILE: `frontend/src/components/ReportIssueModal.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\components\ReportIssueModal.jsx`

```javascript
import React, { useState } from 'react';
import { X, Flag, AlertCircle, CheckCircle2 } from 'lucide-react';
import { itemService } from '../services/api';

const ReportIssueModal = ({ item, onClose }) => {
  const [reason, setReason] = useState('Incorrect location');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!item) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError('');
      const res = await itemService.reportIssue(item._id, { reason, notes });
      if (res.data.success) {
        setSuccess(true);
        setTimeout(() => onClose(), 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit report.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Flag size={20} color="var(--danger)" />
            <h3 className="modal-title">Report Incorrect Information</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} />
            <span>Campus security administration has been notified for review.</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">Nature of Discrepancy</label>
            <select
              className="form-select"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="Incorrect location">Incorrect location or building</option>
              <option value="Item already returned/found">Item already returned or resolved</option>
              <option value="Inaccurate item description">Inaccurate description or wrong photo</option>
              <option value="Spam / Duplicate listing">Duplicate or spam report</option>
              <option value="Other">Other policy violation</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Details / Observations</label>
            <textarea
              className="form-textarea"
              placeholder="Please provide specifics to help administration resolve this..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-danger" disabled={submitting || success}>
              {submitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueModal;

```

---

<a id="file-frontend-src-pages-loginpage-jsx"></a>
## FILE: `frontend/src/pages/LoginPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\LoginPage.jsx`

```javascript
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, AlertCircle, CheckCircle2, Shield, User, HelpCircle, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/api';

const LoginPage = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotStatus, setForgotStatus] = useState({ error: '', success: '', loading: false });

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Pick up message passed from registration or other redirects
  const successMessage = location.state?.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Field validations as requested in Section 1
    if (!identifier.trim() || !password) {
      setError('Empty fields: Please provide your Email / Student ID and Password.');
      return;
    }

    if (identifier.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier.trim())) {
        setError('Invalid email address format.');
        return;
      }
    }

    try {
      setLoading(true);
      const loggedUser = await login(identifier.trim(), password);

      // Section requirement: After login, redirect user according to their role
      if (loggedUser.role === 'admin') {
        navigate('/admin');
      } else {
        const destination = location.state?.from?.pathname || '/';
        navigate(destination);
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Login failed.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setForgotStatus({ error: 'Please enter your registered college email.', success: '', loading: false });
      return;
    }

    try {
      setForgotStatus({ error: '', success: '', loading: true });
      const res = await authService.forgotPassword(forgotEmail);
      setForgotStatus({ error: '', success: res.data.message, loading: false });
    } catch (err) {
      setForgotStatus({
        error: err.response?.data?.message || 'Password reset request failed.',
        success: '',
        loading: false,
      });
    }
  };

  const autofillDemo = (type) => {
    if (type === 'admin') {
      setIdentifier('admin@campus.edu');
      setPassword('admin123');
    } else {
      setIdentifier('sarah.jenkins@campus.edu');
      setPassword('student123');
    }
    setError('');
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-header">
          <div style={{ display: 'inline-flex', padding: '12px', background: '#eff6ff', borderRadius: '50%', marginBottom: '1rem', color: 'var(--primary)' }}>
            <Lock size={28} />
          </div>
          <h2 className="auth-title">Campus Portal Sign In</h2>
          <p className="auth-subtitle">
            Enter your college credentials to access Smart Campus Lost & Found
          </p>
        </div>

        {/* Demo Fast Login Helpers */}
        <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.85rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
            Quick Demo Autofill
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => autofillDemo('student')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem' }}
            >
              <User size={13} /> Student Demo
            </button>
            <button
              type="button"
              onClick={() => autofillDemo('admin')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem', color: 'var(--success)' }}
            >
              <Shield size={13} /> Admin Demo
            </button>
          </div>
        </div>

        {successMessage && (
          <div className="auth-alert auth-alert-success">
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            <span>{successMessage}</span>
          </div>
        )}

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label">Email or Student ID *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. sarah.jenkins@campus.edu or STU1024"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label">Password *</label>
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                style={{ fontSize: '0.8rem', color: 'var(--info)', fontWeight: 600 }}
              >
                Forgot Password?
              </button>
            </div>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your account password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            disabled={loading}
            style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}
          >
            <LogIn size={18} /> {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            New student or faculty member?{' '}
            <Link
              to="/register"
              style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal-overlay" onClick={() => setShowForgotModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px' }}>
            <div className="modal-header">
              <h3 className="modal-title">Password Assistance</h3>
              <button className="modal-close-btn" onClick={() => setShowForgotModal(false)}>
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              Enter your registered college email to receive instant account recovery instructions.
            </p>

            {forgotStatus.error && (
              <div className="auth-alert auth-alert-error">
                <AlertCircle size={18} />
                <span>{forgotStatus.error}</span>
              </div>
            )}

            {forgotStatus.success && (
              <div className="auth-alert auth-alert-success">
                <CheckCircle2 size={18} />
                <span>{forgotStatus.success}</span>
              </div>
            )}

            <form onSubmit={handleForgotSubmit}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">College Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="e.g. sarah.jenkins@campus.edu"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForgotModal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={forgotStatus.loading}
                >
                  {forgotStatus.loading ? 'Sending...' : 'Request Reset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

```

---

<a id="file-frontend-src-pages-registerpage-jsx"></a>
## FILE: `frontend/src/pages/RegisterPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\RegisterPage.jsx`

```javascript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DEPARTMENTS = [
  'Computer Science & Engineering',
  'Mechanical Engineering',
  'Electrical & Electronics Engineering',
  'Civil Engineering',
  'Business Administration (MBA / BBA)',
  'Biotechnology & Life Sciences',
  'Design & Architecture',
  'Arts & Humanities',
  'Physics & Mathematics',
  'Other Campus Department',
];

const YEARS = ['1st Year (Freshman)', '2nd Year (Sophomore)', '3rd Year (Junior)', '4th Year (Senior)', 'Postgraduate', 'Faculty / Staff'];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    department: 'Computer Science & Engineering',
    year: '1st Year (Freshman)',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validations (Section 2)
    const { name, studentId, email, phone, department, year, password, confirmPassword } = formData;

    if (!name.trim() || !studentId.trim() || !email.trim() || !phone.trim() || !password || !confirmPassword) {
      setError('All fields are required. Please fill in all information.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Invalid email address format. Please enter a valid college email.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please ensure both passwords match.');
      return;
    }

    try {
      setLoading(true);
      await register({
        name: name.trim(),
        studentId: studentId.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        department,
        year,
        password,
        confirmPassword,
      });

      // Redirect to login page upon successful registration
      navigate('/login', {
        state: {
          message: 'Account registered successfully! You can now log in with your credentials.',
        },
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card register-card">
        <div className="auth-header">
          <div style={{ display: 'inline-flex', padding: '12px', background: '#eff6ff', borderRadius: '50%', marginBottom: '1rem', color: 'var(--primary)' }}>
            <UserPlus size={28} />
          </div>
          <h2 className="auth-title">Create Campus Account</h2>
          <p className="auth-subtitle">
            Join the Smart Campus Lost & Found community to report and claim belongings
          </p>
        </div>

        {error && (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="e.g. Alex Chen"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Student ID / Faculty ID *</label>
              <input
                type="text"
                name="studentId"
                className="form-input"
                placeholder="e.g. STU2048 or ADM002"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">College Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="e.g. alex.chen@campus.edu"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="e.g. +1 (555) 234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Department *</label>
              <select
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Academic Year *</label>
              <select
                name="year"
                className="form-select"
                value={formData.year}
                onChange={handleChange}
                required
              >
                {YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Password * (Min 6 characters)</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                placeholder="Re-type your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={16} color="var(--success)" />
            <span>Passwords are securely hashed using bcrypt prior to database storage.</span>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            disabled={loading}
            style={{ marginBottom: '1.5rem' }}
          >
            <UserPlus size={18} /> {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Already have an active campus account?{' '}
            <Link
              to="/login"
              style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

```

---

<a id="file-frontend-src-pages-homepage-jsx"></a>
## FILE: `frontend/src/pages/HomePage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\HomePage.jsx`

```javascript
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Laptop,
  Briefcase,
  BookOpen,
  CreditCard,
  Key,
  Shirt,
  Glasses,
  HelpCircle,
  PlusCircle,
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { itemService } from '../services/api';
import ItemCard from '../components/ItemCard';
import ClaimModal from '../components/ClaimModal';
import LoadingSpinner from '../components/LoadingSpinner';

const CATEGORIES = [
  { name: 'Electronics', icon: Laptop },
  { name: 'Bags', icon: Briefcase },
  { name: 'Books', icon: BookOpen },
  { name: 'ID Cards', icon: CreditCard },
  { name: 'Keys', icon: Key },
  { name: 'Clothing', icon: Shirt },
  { name: 'Accessories', icon: Glasses },
  { name: 'Other', icon: HelpCircle },
];

const HomePage = () => {
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClaimItem, setSelectedClaimItem] = useState(null);
  const navigate = useNavigate();

  const fetchRecentItems = async () => {
    try {
      setLoading(true);
      const res = await itemService.getItems({ limit: 6, sort: 'newest' });
      if (res.data.success) {
        setRecentItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching recent items:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentItems();
  }, []);

  const handleCategoryClick = (catName) => {
    navigate(`/lost-items?category=${encodeURIComponent(catName)}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} /> Campus Security & Recovery Portal
            </div>
            <h1 className="hero-title">Lost Something on Campus?</h1>
            <p className="hero-subtitle">
              Report lost items, find missing belongings, and help return found items to their owners.
            </p>
            <div className="hero-actions">
              <Link to="/report-lost" className="btn btn-accent btn-lg">
                <PlusCircle size={18} /> Report Lost Item
              </Link>
              <Link to="/report-found" className="btn btn-outline-white btn-lg">
                <Sparkles size={18} /> Report Found Item
              </Link>
              <Link to="/lost-items" className="btn btn-secondary btn-lg">
                <Search size={18} /> Browse Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Explore by Category</h2>
              <p className="section-subtitle">
                Quickly locate items cataloged across campus facilities
              </p>
            </div>
          </div>

          <div className="category-grid">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="category-card"
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  <div className="category-icon">
                    <Icon size={24} />
                  </div>
                  <span className="category-name">{cat.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recently Reported Items Section */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recently Reported Items</h2>
              <p className="section-subtitle">
                Latest lost and verified found belongings logged across campus
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/lost-items" className="btn btn-secondary btn-sm">
                View All Lost ({'>'})
              </Link>
              <Link to="/found-items" className="btn btn-secondary btn-sm">
                View All Found ({'>'})
              </Link>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner message="Retrieving latest campus reports..." />
          ) : recentItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <RotateCcw size={32} color="var(--text-light)" style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>No Reports Currently Listed</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Be the first to file a lost or found report.</p>
            </div>
          ) : (
            <div className="items-grid">
              {recentItems.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onClaimClick={(it) => setSelectedClaimItem(it)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Claim Modal */}
      {selectedClaimItem && (
        <ClaimModal
          item={selectedClaimItem}
          onClose={() => setSelectedClaimItem(null)}
          onSuccess={fetchRecentItems}
        />
      )}
    </div>
  );
};

export default HomePage;

```

---

<a id="file-frontend-src-pages-lostitemspage-jsx"></a>
## FILE: `frontend/src/pages/LostItemsPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\LostItemsPage.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, RotateCcw, PlusCircle, AlertCircle } from 'lucide-react';
import { itemService } from '../services/api';
import ItemCard from '../components/ItemCard';
import LoadingSpinner from '../components/LoadingSpinner';

const CATEGORIES = [
  'All',
  'Electronics',
  'Bags',
  'Books',
  'ID Cards',
  'Keys',
  'Clothing',
  'Accessories',
  'Other',
];

const LostItemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [sort, setSort] = useState('newest');

  // Keep category in sync with query param if it changes
  useEffect(() => {
    if (searchParams.get('category')) {
      setCategory(searchParams.get('category'));
    }
  }, [searchParams]);

  const fetchLostItems = async () => {
    try {
      setLoading(true);
      setError('');
      const params = {
        type: 'lost',
        sort,
      };

      if (searchTerm.trim()) params.search = searchTerm.trim();
      if (category && category !== 'All') params.category = category;
      if (location.trim()) params.location = location.trim();
      if (date) params.date = date;

      const res = await itemService.getItems(params);
      if (res.data.success) {
        setItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching lost items:', err);
      setError('Unable to load lost items. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLostItems();
  }, [category, sort]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchLostItems();
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategory('All');
    setLocation('');
    setDate('');
    setSort('newest');
    setSearchParams({});
    setTimeout(() => {
      fetchLostItems();
    }, 50);
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Campus Directory
            </span>
            <h1 className="section-title">Lost Belongings</h1>
            <p className="section-subtitle">
              Browse, search, and help find items reported missing across campus grounds
            </p>
          </div>
          <Link to="/report-lost" className="btn btn-primary">
            <PlusCircle size={16} /> Report Lost Item
          </Link>
        </div>

        {/* Filter Toolbar (Section 4 features) */}
        <form onSubmit={handleSearchSubmit} className="filter-bar">
          <div className="filter-grid">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Search by Item Name or Keyword</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. MacBook Pro, Blue Backpack, Keys..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '2.4rem' }}
                />
                <Search
                  size={16}
                  color="var(--text-light)"
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  if (e.target.value === 'All') {
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                  } else {
                    setSearchParams({ category: e.target.value });
                  }
                }}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Campus Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Library, Dining Hall..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date Lost</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sort By</label>
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="date_desc">Lost Date (Recent to Past)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleResetFilters}
            >
              <RotateCcw size={14} /> Reset Filters
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              <Filter size={14} /> Apply Filters
            </button>
          </div>
        </form>

        {/* Results */}
        {loading ? (
          <LoadingSpinner message="Searching lost items database..." />
        ) : error ? (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <Search size={36} color="var(--text-light)" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No Lost Items Matching Your Criteria
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
              Try adjusting your search terms or clearing your location and date filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
              Showing {items.length} reported lost item{items.length !== 1 ? 's' : ''}
            </div>
            <div className="items-grid">
              {items.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LostItemsPage;

```

---

<a id="file-frontend-src-pages-founditemspage-jsx"></a>
## FILE: `frontend/src/pages/FoundItemsPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\FoundItemsPage.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Sparkles, Search, Filter, RotateCcw, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { itemService } from '../services/api';
import ItemCard from '../components/ItemCard';
import ClaimModal from '../components/ClaimModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = [
  'All',
  'Electronics',
  'Bags',
  'Books',
  'ID Cards',
  'Keys',
  'Clothing',
  'Accessories',
  'Other',
];

const FoundItemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedClaimItem, setSelectedClaimItem] = useState(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [sort, setSort] = useState('newest');

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const fetchFoundItems = async () => {
    try {
      setLoading(true);
      setError('');
      const params = {
        type: 'found',
        sort,
      };

      if (searchTerm.trim()) params.search = searchTerm.trim();
      if (category && category !== 'All') params.category = category;
      if (location.trim()) params.location = location.trim();
      if (date) params.date = date;

      const res = await itemService.getItems(params);
      if (res.data.success) {
        setItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching found items:', err);
      setError('Unable to load found items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoundItems();
  }, [category, sort]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchFoundItems();
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategory('All');
    setLocation('');
    setDate('');
    setSort('newest');
    setSearchParams({});
    setTimeout(() => {
      fetchFoundItems();
    }, 50);
  };

  const handleClaimInitiated = (item) => {
    if (!isAuthenticated) {
      navigate('/login', {
        state: { message: 'Please log in to submit a claim for this item.' },
      });
      return;
    }
    setSelectedClaimItem(item);
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Verified Inventory
            </span>
            <h1 className="section-title">Found Belongings</h1>
            <p className="section-subtitle">
              Browse verified items turned into campus administration. Recognize yours? Submit an ownership claim.
            </p>
          </div>
          <Link to="/report-found" className="btn btn-accent">
            <Sparkles size={16} /> Report Found Item
          </Link>
        </div>

        {/* Security / Verification Badge info */}
        <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 'var(--radius-md)', padding: '0.85rem 1.25rem', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#065f46' }}>
          <ShieldCheck size={20} color="#059669" style={{ flexShrink: 0 }} />
          <span>
            <strong>Campus Verification Standard:</strong> Only verified found reports reviewed by campus security administration are publicly displayed to prevent false claims.
          </span>
        </div>

        {/* Filter Bar */}
        <form onSubmit={handleSearchSubmit} className="filter-bar">
          <div className="filter-grid">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Search Item Name or Details</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. AirPods, HydroFlask, Sunglasses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '2.4rem' }}
                />
                <Search
                  size={16}
                  color="var(--text-light)"
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  if (e.target.value === 'All') {
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                  } else {
                    setSearchParams({ category: e.target.value });
                  }
                }}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Found Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Gym, Recreation Center, Union..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date Found</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sort Order</label>
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="date_desc">Found Date (Recent to Past)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleResetFilters}
            >
              <RotateCcw size={14} /> Reset
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              <Filter size={14} /> Apply Filters
            </button>
          </div>
        </form>

        {/* Results */}
        {loading ? (
          <LoadingSpinner message="Loading verified found inventory..." />
        ) : error ? (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <Sparkles size={36} color="var(--text-light)" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No Verified Found Items Found
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
              No items currently match your search criteria. Check back soon or report a lost item.
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
              Showing {items.length} verified found item{items.length !== 1 ? 's' : ''}
            </div>
            <div className="items-grid">
              {items.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onClaimClick={handleClaimInitiated}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Claim Modal */}
      {selectedClaimItem && (
        <ClaimModal
          item={selectedClaimItem}
          onClose={() => setSelectedClaimItem(null)}
          onSuccess={fetchFoundItems}
        />
      )}
    </div>
  );
};

export default FoundItemsPage;

```

---

<a id="file-frontend-src-pages-reportlostpage-jsx"></a>
## FILE: `frontend/src/pages/ReportLostPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\ReportLostPage.jsx`

```javascript
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PlusCircle, Upload, AlertCircle, CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { itemService } from '../services/api';
import { useNotifications } from '../context/NotificationContext';

const CATEGORIES = [
  'Electronics',
  'Bags',
  'Books',
  'ID Cards',
  'Keys',
  'Clothing',
  'Accessories',
  'Other',
];

const ReportLostPage = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'Electronics',
    description: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    image: '',
    additionalInfo: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState(null);

  const navigate = useNavigate();
  const { fetchNotifications } = useNotifications();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image file must be under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setImagePreview(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { itemName, category, description, location, date } = formData;
    if (!itemName.trim() || !category || !description.trim() || !location.trim() || !date) {
      setError('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    try {
      setLoading(true);
      const res = await itemService.reportLost(formData);
      if (res.data.success) {
        setSuccessData({
          reportId: res.data.reportId,
          item: res.data.item,
          message: res.data.message,
        });
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit lost report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div style={{ padding: '3.5rem 1rem 5rem' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.5rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
              Lost Report Submitted!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Your report has been successfully recorded in the campus registry.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.75rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Unique Report ID:</span>
                <span style={{ fontWeight: 700, fontFamily: 'monospace', color: 'var(--primary)' }}>
                  #{successData.reportId}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Item Name:</span>
                <span style={{ fontWeight: 600 }}>{successData.item.itemName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Current Status:</span>
                <span style={{ fontWeight: 700, color: '#dc2626' }}>Searching</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <Link to="/my-reports" className="btn btn-primary">
                View in My Reports <ArrowRight size={16} />
              </Link>
              <Link to="/lost-items" className="btn btn-secondary">
                Return to Lost Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            New Missing Belonging Notice
          </span>
          <h1 className="section-title">Report a Lost Item</h1>
          <p className="section-subtitle">
            Provide detailed information to increase the chances of campus members or security finding your item.
          </p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.25rem', boxShadow: 'var(--shadow-md)' }}>
          {error && (
            <div className="auth-alert auth-alert-error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Item Name *</label>
                <input
                  type="text"
                  name="itemName"
                  className="form-input"
                  placeholder="e.g. 14-inch Silver MacBook Pro"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Detailed Description *</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Describe color, brand, model, case, stickers, marks, or unique characteristics..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Last Seen Location *</label>
                <input
                  type="text"
                  name="location"
                  className="form-input"
                  placeholder="e.g. Library 2nd floor, Cafeteria, Science Hall..."
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date Lost *</label>
                <input
                  type="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Time Lost</label>
                <input
                  type="time"
                  name="time"
                  className="form-input"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Image Upload / URL */}
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Upload Item Image (Photo or Reference)</label>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    id="lost-image-file"
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor="lost-image-file"
                    className="btn btn-secondary"
                    style={{ width: '100%', cursor: 'pointer', marginBottom: '0.5rem' }}
                  >
                    <Upload size={16} /> Choose Photo from Device
                  </label>
                  <input
                    type="url"
                    name="image"
                    className="form-input"
                    placeholder="Or enter image URL (https://...)"
                    value={formData.image.startsWith('data:') ? '' : formData.image}
                    onChange={handleImageUrlChange}
                  />
                </div>

                {imagePreview && (
                  <div style={{ width: '90px', height: '90px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 }}>
                    <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Additional Information (Confidential/Internal)</label>
              <textarea
                name="additionalInfo"
                className="form-textarea"
                placeholder="e.g. Serial numbers, private identifiers, or reward information..."
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={2}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              disabled={loading}
            >
              <PlusCircle size={18} /> {loading ? 'Submitting Report...' : 'Submit Lost Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportLostPage;

```

---

<a id="file-frontend-src-pages-reportfoundpage-jsx"></a>
## FILE: `frontend/src/pages/ReportFoundPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\ReportFoundPage.jsx`

```javascript
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Upload, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { itemService } from '../services/api';
import { useNotifications } from '../context/NotificationContext';

const CATEGORIES = [
  'Electronics',
  'Bags',
  'Books',
  'ID Cards',
  'Keys',
  'Clothing',
  'Accessories',
  'Other',
];

const ReportFoundPage = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'Electronics',
    description: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    image: '',
    additionalInfo: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState(null);

  const navigate = useNavigate();
  const { fetchNotifications } = useNotifications();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image file must be under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setImagePreview(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { itemName, category, description, location, date } = formData;
    if (!itemName.trim() || !category || !description.trim() || !location.trim() || !date) {
      setError('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    try {
      setLoading(true);
      const res = await itemService.reportFound(formData);
      if (res.data.success) {
        setSuccessData({
          reportId: res.data.reportId,
          item: res.data.item,
          message: res.data.message,
        });
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit found report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div style={{ padding: '3.5rem 1rem 5rem' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.5rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <ShieldCheck size={36} />
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
              Found Report Submitted!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Thank you for turning in a campus belonging! Your report is now in the <strong>Admin Verification Queue</strong>.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.75rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Unique Report ID:</span>
                <span style={{ fontWeight: 700, fontFamily: 'monospace', color: 'var(--primary)' }}>
                  #{successData.reportId}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Item Name:</span>
                <span style={{ fontWeight: 600 }}>{successData.item.itemName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Verification Status:</span>
                <span style={{ fontWeight: 700, color: '#d97706' }}>Pending Verification</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                Campus administration will verify details before making this item publicly claimable by students.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <Link to="/my-reports" className="btn btn-primary">
                View in My Reports <ArrowRight size={16} />
              </Link>
              <Link to="/" className="btn btn-secondary">
                Return to Campus Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Campus Good Samaritan Turn-In
          </span>
          <h1 className="section-title">Report a Found Item</h1>
          <p className="section-subtitle">
            Found an unattended phone, keys, or textbook? Help return it safely to its rightful student or faculty owner.
          </p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.25rem', boxShadow: 'var(--shadow-md)' }}>
          {error && (
            <div className="auth-alert auth-alert-error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Item Name *</label>
                <input
                  type="text"
                  name="itemName"
                  className="form-input"
                  placeholder="e.g. Set of car keys with red Honda tag"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Description *</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Describe visible characteristics (color, condition, physical features)..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Found Location *</label>
                <input
                  type="text"
                  name="location"
                  className="form-input"
                  placeholder="e.g. Parking Lot B row 4, Dining Hall table 12..."
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date Found *</label>
                <input
                  type="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time Found</label>
                <input
                  type="time"
                  name="time"
                  className="form-input"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Image Upload / URL */}
            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Upload Item Photo (Recommended for verification)</label>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    id="found-image-file"
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor="found-image-file"
                    className="btn btn-secondary"
                    style={{ width: '100%', cursor: 'pointer', marginBottom: '0.5rem' }}
                  >
                    <Upload size={16} /> Choose Photo from Device
                  </label>
                  <input
                    type="url"
                    name="image"
                    className="form-input"
                    placeholder="Or enter image URL (https://...)"
                    value={formData.image.startsWith('data:') ? '' : formData.image}
                    onChange={handleImageUrlChange}
                  />
                </div>

                {imagePreview && (
                  <div style={{ width: '90px', height: '90px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 }}>
                    <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Additional Information / Hand-over Notes</label>
              <textarea
                name="additionalInfo"
                className="form-textarea"
                placeholder="e.g. Handed to Student Center Front Desk, or still in possession..."
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={2}
              />
            </div>

            <button
              type="submit"
              className="btn btn-accent btn-block btn-lg"
              disabled={loading}
            >
              <Sparkles size={18} /> {loading ? 'Submitting Found Report...' : 'Submit Found Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportFoundPage;

```

---

<a id="file-frontend-src-pages-itemdetailspage-jsx"></a>
## FILE: `frontend/src/pages/ItemDetailsPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\ItemDetailsPage.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Clock,
  Tag,
  HandHeart,
  MessageSquare,
  Flag,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Trash2,
  Edit,
  RotateCcw,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { itemService } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import ClaimModal from '../components/ClaimModal';
import ContactModal from '../components/ContactModal';
import ReportIssueModal from '../components/ReportIssueModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

const ItemDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin } = useAuth();
  const { fetchNotifications } = useNotifications();

  const [item, setItem] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  // Modals
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const fetchItemDetails = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await itemService.getItemById(id);
      if (res.data.success) {
        setItem(res.data.item);
        setIsOwner(res.data.isOwner);
        setEditFormData({
          itemName: res.data.item.itemName,
          category: res.data.item.category,
          description: res.data.item.description,
          location: res.data.item.location,
          date: res.data.item.date,
          time: res.data.item.time,
          additionalInfo: res.data.item.additionalInfo || '',
        });
      }
    } catch (err) {
      console.error('Error fetching item:', err);
      setError('Item not found or unavailable.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemDetails();
  }, [id]);

  const handleMarkReturned = async () => {
    if (!window.confirm('Are you sure you want to mark this item as Returned?')) return;
    try {
      const res = await itemService.markAsReturned(item._id);
      if (res.data.success) {
        setActionSuccess('Item successfully marked as Returned!');
        fetchItemDetails();
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update status.');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this report? This action cannot be undone.')) return;
    try {
      const res = await itemService.deleteItem(item._id);
      if (res.data.success) {
        navigate('/my-reports');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete report.');
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await itemService.updateItem(item._id, editFormData);
      if (res.data.success) {
        setShowEditModal(false);
        setActionSuccess('Report updated successfully!');
        fetchItemDetails();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update report.');
    }
  };

  if (loading) {
    return <LoadingSpinner message="Fetching campus item details..." />;
  }

  if (error || !item) {
    return (
      <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '500px' }}>
          <AlertCircle size={40} color="var(--danger)" style={{ marginBottom: '1rem' }} />
          <h2>Item Not Found</h2>
          <p style={{ color: 'var(--text-muted)', margin: '0.75rem 0 1.5rem' }}>
            {error || 'This campus item report does not exist or has been removed.'}
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Campus Home
          </Link>
        </div>
      </div>
    );
  }

  const defaultPlaceholder =
    item.type === 'lost'
      ? 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1000&q=80'
      : 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80';

  const imageUrl = item.image && item.image.trim() !== '' ? item.image : defaultPlaceholder;

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <ArrowLeft size={14} /> Back
          </button>
        </div>

        {actionSuccess && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle size={18} />
            <span>{actionSuccess}</span>
          </div>
        )}

        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* Large Item Image (Section 8 requirement) */}
            <div style={{ position: 'relative', minHeight: '340px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={imageUrl}
                alt={item.itemName}
                style={{ width: '100%', height: '100%', maxHeight: '480px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultPlaceholder;
                }}
              />
              <span className={`item-card-type-tag ${item.type}`} style={{ top: '18px', left: '18px' }}>
                {item.type === 'lost' ? 'Lost Belonging' : 'Found Belonging'}
              </span>
            </div>

            {/* Item Details Information */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="item-category-pill" style={{ fontSize: '0.85rem', padding: '4px 10px' }}>
                  {item.category}
                </span>
                <StatusBadge status={item.status} />
              </div>

              <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: '1.25' }}>
                {item.itemName}
              </h1>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontFamily: 'monospace' }}>
                Report ID: <strong>#{item.reportId}</strong>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                  Description
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>

              {/* Meta Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} color="var(--primary)" /> Location
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {item.location}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} color="var(--primary)" /> Date
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {item.date}
                  </div>
                </div>

                {item.time && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <Clock size={14} color="var(--primary)" /> Time
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      {item.time}
                    </div>
                  </div>
                )}
              </div>

              {/* Reporter Info (Privacy Compliant) */}
              <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem' }}>
                  <UserCheck size={16} /> Reported by: {item.reportedBy?.name || 'Campus Student'}
                </div>
                <div>
                  {item.reportedBy?.department} • {item.reportedBy?.year}
                </div>
                {/* Notice that sensitive personal phone and email are not exposed publicly */}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>
                  🔒 Student private email & phone are protected under campus privacy policy.
                </div>
              </div>

              {/* Actions Toolbar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                {/* Claim Item Button */}
                {item.status !== 'Returned' && item.status !== 'Claimed' && (
                  <button
                    type="button"
                    onClick={() => {
                      if (!isAuthenticated) {
                        navigate('/login', { state: { message: 'Please sign in to submit a claim.' } });
                      } else {
                        setShowClaimModal(true);
                      }
                    }}
                    className="btn btn-accent"
                    style={{ flex: 1, minWidth: '160px' }}
                  >
                    <HandHeart size={16} /> Claim This Item
                  </button>
                )}

                {/* Contact Reporter */}
                <button
                  type="button"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate('/login', { state: { message: 'Please sign in to contact the reporter.' } });
                    } else {
                      setShowContactModal(true);
                    }
                  }}
                  className="btn btn-secondary"
                >
                  <MessageSquare size={16} /> Contact Reporter
                </button>

                {/* Report Incorrect Info */}
                <button
                  type="button"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate('/login', { state: { message: 'Please sign in to report an issue.' } });
                    } else {
                      setShowReportModal(true);
                    }
                  }}
                  className="btn btn-secondary"
                  title="Report Incorrect Information"
                >
                  <Flag size={16} /> Report Issue
                </button>
              </div>

              {/* Owner / Admin Management Controls */}
              {(isOwner || isAdmin) && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Owner Options:
                  </span>
                  {item.status !== 'Returned' && (
                    <button
                      onClick={handleMarkReturned}
                      className="btn btn-success btn-sm"
                    >
                      <RotateCcw size={14} /> Mark as Returned
                    </button>
                  )}
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="btn btn-secondary btn-sm"
                  >
                    <Edit size={14} /> Edit Report
                  </button>
                  <button
                    onClick={handleDelete}
                    className="btn btn-danger btn-sm"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Claim Modal */}
      {showClaimModal && (
        <ClaimModal
          item={item}
          onClose={() => setShowClaimModal(false)}
          onSuccess={() => {
            fetchItemDetails();
            setActionSuccess('Claim submitted successfully!');
          }}
        />
      )}

      {/* Contact Reporter Modal */}
      {showContactModal && (
        <ContactModal
          item={item}
          onClose={() => setShowContactModal(false)}
        />
      )}

      {/* Report Incorrect Information Modal */}
      {showReportModal && (
        <ReportIssueModal
          item={item}
          onClose={() => setShowReportModal(false)}
        />
      )}

      {/* Edit Report Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Edit Campus Report</h3>
              <button className="modal-close-btn" onClick={() => setShowEditModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleEditSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Item Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={editFormData.itemName || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, itemName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-input"
                  value={editFormData.location || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  value={editFormData.description || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Additional Notes</label>
                <textarea
                  className="form-textarea"
                  value={editFormData.additionalInfo || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, additionalInfo: e.target.value })}
                  rows={2}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsPage;

```

---

<a id="file-frontend-src-pages-myreportspage-jsx"></a>
## FILE: `frontend/src/pages/MyReportsPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\MyReportsPage.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { itemService } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import { useNotifications } from '../context/NotificationContext';

const MyReportsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Editing state
  const [editingItem, setEditingItem] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const { fetchNotifications } = useNotifications();

  const fetchMyReports = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await itemService.getItems({ myReports: 'true' });
      if (res.data.success) {
        setItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching my reports:', err);
      setError('Unable to load your campus reports.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyReports();
  }, []);

  const handleMarkReturned = async (id, name) => {
    if (!window.confirm(`Mark "${name}" as Returned? This will confirm the item was successfully recovered.`)) return;
    try {
      const res = await itemService.markAsReturned(id);
      if (res.data.success) {
        setSuccessMsg(`"${name}" has been marked as returned!`);
        fetchMyReports();
        fetchNotifications();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update status.');
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete report for "${name}"? This cannot be undone.`)) return;
    try {
      const res = await itemService.deleteItem(id);
      if (res.data.success) {
        setSuccessMsg(`Report for "${name}" deleted.`);
        fetchMyReports();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete report.');
    }
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setEditFormData({
      itemName: item.itemName,
      category: item.category,
      description: item.description,
      location: item.location,
      date: item.date,
      time: item.time,
      additionalInfo: item.additionalInfo || '',
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await itemService.updateItem(editingItem._id, editFormData);
      if (res.data.success) {
        setEditingItem(null);
        setSuccessMsg('Report updated successfully!');
        fetchMyReports();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update report.');
    }
  };

  const lostReports = items.filter((it) => it.type === 'lost');
  const foundReports = items.filter((it) => it.type === 'found');

  const renderReportTable = (reportList, typeLabel) => {
    if (reportList.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            You haven't filed any {typeLabel.toLowerCase()} reports yet.
          </p>
          <Link
            to={typeLabel === 'Lost' ? '/report-lost' : '/report-found'}
            className="btn btn-primary btn-sm"
          >
            <PlusCircle size={14} /> Report {typeLabel} Item
          </Link>
        </div>
      );
    }

    return (
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Item Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reportList.map((item) => (
              <tr key={item._id}>
                <td style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                  #{item.reportId}
                </td>
                <td>
                  <div style={{ fontWeight: 600 }}>{item.itemName}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{item.category}</div>
                </td>
                <td>
                  {item.date} {item.time ? `(${item.time})` : ''}
                </td>
                <td>{item.location}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                    <Link
                      to={`/items/${item._id}`}
                      className="btn btn-secondary btn-sm"
                      title="View Details"
                      style={{ padding: '0.35rem 0.6rem' }}
                    >
                      <Eye size={14} />
                    </Link>

                    <button
                      onClick={() => openEditModal(item)}
                      className="btn btn-secondary btn-sm"
                      title="Edit Report"
                      style={{ padding: '0.35rem 0.6rem' }}
                    >
                      <Edit size={14} />
                    </button>

                    {item.status !== 'Returned' && (
                      <button
                        onClick={() => handleMarkReturned(item._id, item.itemName)}
                        className="btn btn-success btn-sm"
                        title="Mark as Returned"
                        style={{ padding: '0.35rem 0.6rem' }}
                      >
                        <RotateCcw size={14} />
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(item._id, item.itemName)}
                      className="btn btn-danger btn-sm"
                      title="Delete Report"
                      style={{ padding: '0.35rem 0.6rem' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Student Management
            </span>
            <h1 className="section-title">My Reports</h1>
            <p className="section-subtitle">
              Manage all lost property listings and found item turn-ins you have submitted
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link to="/report-lost" className="btn btn-primary btn-sm">
              <PlusCircle size={14} /> New Lost Report
            </Link>
            <Link to="/report-found" className="btn btn-accent btn-sm">
              <Sparkles size={14} /> New Found Report
            </Link>
          </div>
        </div>

        {successMsg && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {error && (
          <div className="auth-alert auth-alert-error" style={{ marginBottom: '1.5rem' }}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <LoadingSpinner message="Loading your submitted reports..." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* MY LOST REPORTS (Section 10) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--danger)' }}>●</span> MY LOST REPORTS ({lostReports.length})
                </h2>
              </div>
              {renderReportTable(lostReports, 'Lost')}
            </div>

            {/* MY FOUND REPORTS (Section 10) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--success)' }}>●</span> MY FOUND REPORTS ({foundReports.length})
                </h2>
              </div>
              {renderReportTable(foundReports, 'Found')}
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="modal-overlay" onClick={() => setEditingItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Edit Report #{editingItem.reportId}</h3>
                <button className="modal-close-btn" onClick={() => setEditingItem(null)}>
                  ✕
                </button>
              </div>

              <form onSubmit={handleEditSubmit}>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Item Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editFormData.itemName || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, itemName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editFormData.location || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-textarea"
                    value={editFormData.description || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                    rows={3}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Additional Notes</label>
                  <textarea
                    className="form-textarea"
                    value={editFormData.additionalInfo || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, additionalInfo: e.target.value })}
                    rows={2}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setEditingItem(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Updates
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReportsPage;

```

---

<a id="file-frontend-src-pages-notificationspage-jsx"></a>
## FILE: `frontend/src/pages/NotificationsPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\NotificationsPage.jsx`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  CheckCircle2,
  Clock,
  Award,
  RotateCcw,
  XCircle,
  MessageSquare,
  ShieldCheck,
  CheckCheck,
  Trash2,
  Info,
} from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import LoadingSpinner from '../components/LoadingSpinner';

const getNotificationIcon = (type) => {
  switch (type) {
    case 'REPORT_SUBMITTED':
      return <Clock size={18} color="#2563eb" />;
    case 'REPORT_VERIFIED':
      return <ShieldCheck size={18} color="#059669" />;
    case 'REPORT_REJECTED':
      return <XCircle size={18} color="#dc2626" />;
    case 'CLAIM_SUBMITTED':
      return <Award size={18} color="#d97706" />;
    case 'CLAIM_APPROVED':
      return <CheckCircle2 size={18} color="#059669" />;
    case 'CLAIM_REJECTED':
      return <XCircle size={18} color="#dc2626" />;
    case 'ITEM_RETURNED':
      return <RotateCcw size={18} color="#4f46e5" />;
    case 'MESSAGE':
      return <MessageSquare size={18} color="#0284c7" />;
    default:
      return <Info size={18} color="#64748b" />;
  }
};

const NotificationsPage = () => {
  const {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Activity Feed
            </span>
            <h1 className="section-title">Campus Notifications</h1>
            <p className="section-subtitle">
              Real-time updates regarding reports, verification, claims, and status changes
            </p>
          </div>
          {notifications.length > 0 && unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <CheckCheck size={16} /> Mark All as Read
            </button>
          )}
        </div>

        {loading ? (
          <LoadingSpinner message="Checking campus notification center..." />
        ) : notifications.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <Bell size={40} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No Notifications Yet
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '380px', margin: '0 auto 1.5rem' }}>
              When you submit reports or someone claims an item, status alerts will appear right here.
            </p>
            <Link to="/lost-items" className="btn btn-secondary btn-sm">
              Explore Campus Registry
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {notifications.map((notif) => {
              const dateStr = new Date(notif.createdAt).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={notif._id}
                  style={{
                    backgroundColor: notif.read ? '#ffffff' : '#f0f9ff',
                    border: `1px solid ${notif.read ? 'var(--border)' : '#bae6fd'}`,
                    borderLeft: `4px solid ${notif.read ? 'var(--border)' : 'var(--primary)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      background: notif.read ? '#f1f5f9' : '#e0f2fe',
                      padding: '8px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {getNotificationIcon(notif.type)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)' }}>
                        {dateStr}
                      </span>
                      {!notif.read && (
                        <span
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            background: '#0284c7',
                            color: '#ffffff',
                            padding: '2px 6px',
                            borderRadius: 'var(--radius-full)',
                            textTransform: 'uppercase',
                          }}
                        >
                          New
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.5', margin: '0.25rem 0' }}>
                      {notif.message}
                    </p>

                    {notif.relatedItemId && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <Link
                          to={`/items/${notif.relatedItemId._id || notif.relatedItemId}`}
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}
                        >
                          View Item Record
                        </Link>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif._id)}
                        className="btn btn-secondary btn-sm"
                        title="Mark as read"
                        style={{ padding: '0.3rem 0.5rem' }}
                      >
                        <CheckCheck size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notif._id)}
                      className="btn btn-secondary btn-sm"
                      title="Delete notification"
                      style={{ padding: '0.3rem 0.5rem', color: 'var(--danger)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

```

---

<a id="file-frontend-src-pages-profilepage-jsx"></a>
## FILE: `frontend/src/pages/ProfilePage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\ProfilePage.jsx`

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  BookOpen,
  GraduationCap,
  Shield,
  Edit,
  Key,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Hash,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/api';

const DEPARTMENTS = [
  'Computer Science & Engineering',
  'Mechanical Engineering',
  'Electrical & Electronics Engineering',
  'Civil Engineering',
  'Business Administration (MBA / BBA)',
  'Biotechnology & Life Sciences',
  'Design & Architecture',
  'Arts & Humanities',
  'Physics & Mathematics',
  'Other Campus Department',
];

const YEARS = ['1st Year (Freshman)', '2nd Year (Sophomore)', '3rd Year (Junior)', '4th Year (Senior)', 'Postgraduate', 'Faculty / Staff'];

const ProfilePage = () => {
  const { user, updateUser, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Edit profile form state
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    department: user?.department || DEPARTMENTS[0],
    year: user?.year || YEARS[0],
  });

  // Change password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [statusMsg, setStatusMsg] = useState({ error: '', success: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setStatusMsg({ error: '', success: '' });
      const res = await authService.updateProfile(profileData);
      if (res.data.success) {
        updateUser({ ...user, ...res.data.user });
        setShowEditModal(false);
        setStatusMsg({ error: '', success: 'Profile successfully updated.' });
      }
    } catch (err) {
      setStatusMsg({
        error: err.response?.data?.message || 'Failed to update profile.',
        success: '',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setStatusMsg({ error: 'New password and confirmation do not match.', success: '' });
      return;
    }
    if (passwordData.newPassword.length < 6) {
      setStatusMsg({ error: 'Password must be at least 6 characters long.', success: '' });
      return;
    }

    try {
      setSubmitting(true);
      setStatusMsg({ error: '', success: '' });
      const res = await authService.changePassword(passwordData);
      if (res.data.success) {
        setShowPasswordModal(false);
        setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
        setStatusMsg({ error: '', success: 'Your password was changed successfully.' });
      }
    } catch (err) {
      setStatusMsg({
        error: err.response?.data?.message || 'Failed to change password.',
        success: '',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Campus Account
            </span>
            <h1 className="section-title">Student Profile</h1>
            <p className="section-subtitle">
              View and manage your registered university identification and contact preferences
            </p>
          </div>
        </div>

        {statusMsg.success && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{statusMsg.success}</span>
          </div>
        )}

        {statusMsg.error && (
          <div className="auth-alert auth-alert-error" style={{ marginBottom: '1.5rem' }}>
            <AlertCircle size={18} />
            <span>{statusMsg.error}</span>
          </div>
        )}

        {/* Profile Card */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '2.5rem', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0f2b48, #2563eb)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 800,
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {user?.name?.charAt(0) || 'U'}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {user?.name}
                </h2>
                <span className={`user-role-tag ${isAdmin ? 'admin' : ''}`}>
                  {user?.role}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                {user?.department} • {user?.year}
              </p>
            </div>
          </div>

          {/* Details Grid (Section 12 requirement) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.75rem', marginBottom: '2rem' }}>
            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Hash size={14} color="var(--primary)" /> Student ID
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: '0.35rem', fontFamily: 'monospace' }}>
                {user?.studentId}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Mail size={14} color="var(--primary)" /> College Email
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.email}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Phone size={14} color="var(--primary)" /> Phone Number
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.phone}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <BookOpen size={14} color="var(--primary)" /> Academic Department
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.department}
              </div>
            </div>

            <div className="meta-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <GraduationCap size={14} color="var(--primary)" /> Academic Year
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '0.35rem' }}>
                {user?.year}
              </div>
            </div>
          </div>

          {/* Action Buttons (Section 12 requirement: Edit Profile, Change Password, Logout) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            <button
              onClick={() => {
                setProfileData({
                  name: user?.name || '',
                  phone: user?.phone || '',
                  department: user?.department || DEPARTMENTS[0],
                  year: user?.year || YEARS[0],
                });
                setShowEditModal(true);
              }}
              className="btn btn-primary btn-sm"
            >
              <Edit size={15} /> Edit Profile
            </button>

            <button
              onClick={() => setShowPasswordModal(true)}
              className="btn btn-secondary btn-sm"
            >
              <Key size={15} /> Change Password
            </button>

            <button
              onClick={handleLogout}
              className="btn btn-danger btn-sm"
              style={{ marginLeft: 'auto' }}
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {showEditModal && (
          <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Edit Campus Profile</h3>
                <button className="modal-close-btn" onClick={() => setShowEditModal(false)}>✕</button>
              </div>

              <form onSubmit={handleProfileSubmit}>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Department</label>
                  <select
                    className="form-select"
                    value={profileData.department}
                    onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Academic Year</label>
                  <select
                    className="form-select"
                    value={profileData.year}
                    onChange={(e) => setProfileData({ ...profileData, year: e.target.value })}
                  >
                    {YEARS.map((yr) => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Saving...' : 'Save Profile'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Change Password Modal */}
        {showPasswordModal && (
          <div className="modal-overlay" onClick={() => setShowPasswordModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
              <div className="modal-header">
                <h3 className="modal-title">Change Password</h3>
                <button className="modal-close-btn" onClick={() => setShowPasswordModal(false)}>✕</button>
              </div>

              <form onSubmit={handlePasswordSubmit}>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter current password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">New Password (Min 6 chars)</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter new password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    required
                    minLength={6}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Confirm new password"
                    value={passwordData.confirmNewPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
                    required
                    minLength={6}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowPasswordModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Updating...' : 'Update Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

```

---

<a id="file-frontend-src-pages-admindashboardpage-jsx"></a>
## FILE: `frontend/src/pages/AdminDashboardPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\AdminDashboardPage.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Search,
  CheckCircle2,
  Clock,
  Award,
  RotateCcw,
  XCircle,
  AlertTriangle,
  Trash2,
  Check,
  Eye,
  BarChart3,
  Bell,
  RefreshCw,
  UserCheck,
  UserX,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { adminService, claimService } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

const AdminDashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Navigation tab state: 'dashboard' | 'users' | 'lost' | 'found' | 'claims' | 'notifications' | 'analytics'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Stats
  const [stats, setStats] = useState(null);
  const [categoryStats, setCategoryStats] = useState([]);
  const [statusStats, setStatusStats] = useState([]);
  const [recentReports, setRecentReports] = useState([]);
  const [recentClaims, setRecentClaims] = useState([]);

  // Data collections for other tabs
  const [usersList, setUsersList] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [reportsList, setReportsList] = useState([]);
  const [reportFilter, setReportFilter] = useState({ search: '', status: 'All', category: 'All' });
  const [claimsList, setClaimsList] = useState([]);

  // Modals & inspect states
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [adminNoteInput, setAdminNoteInput] = useState('');
  const [selectedReportDetails, setSelectedReportDetails] = useState(null);

  const [loading, setLoading] = useState(true);
  const [actionSuccess, setActionSuccess] = useState('');
  const [actionError, setActionError] = useState('');

  // Fetch dashboard summary stats
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await adminService.getDashboardStats();
      if (res.data.success) {
        setStats(res.data.stats);
        setCategoryStats(res.data.categoryStats || []);
        setStatusStats(res.data.statusStats || []);
        setRecentReports(res.data.recentReports || []);
        setRecentClaims(res.data.recentClaims || []);
      }
    } catch (err) {
      setActionError('Failed to load admin statistics.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await adminService.getUsers({ search: userSearch });
      if (res.data.success) {
        setUsersList(res.data.users || []);
      }
    } catch (err) {
      setActionError('Failed to fetch user list.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch reports (for lost / found management tabs)
  const fetchReports = async (type) => {
    try {
      setLoading(true);
      const params = {
        type: type || 'All',
        status: reportFilter.status,
        category: reportFilter.category,
        search: reportFilter.search,
      };
      const res = await adminService.getAllReports(params);
      if (res.data.success) {
        setReportsList(res.data.reports || []);
      }
    } catch (err) {
      setActionError('Failed to fetch reports.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch claims
  const fetchClaims = async () => {
    try {
      setLoading(true);
      const res = await claimService.getAllClaims();
      if (res.data.success) {
        setClaimsList(res.data.claims || []);
      }
    } catch (err) {
      setActionError('Failed to load claims.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'dashboard' || activeTab === 'analytics') {
      fetchDashboardData();
    } else if (activeTab === 'users') {
      fetchUsers();
    } else if (activeTab === 'lost') {
      fetchReports('lost');
    } else if (activeTab === 'found') {
      fetchReports('found');
    } else if (activeTab === 'claims') {
      fetchClaims();
    }
  }, [activeTab]);

  const handleVerifyReport = async (reportId) => {
    try {
      const res = await adminService.verifyReport(reportId, 'Verified by campus admin');
      if (res.data.success) {
        setActionSuccess('Report verified successfully and made public to students.');
        fetchReports('found');
        fetchDashboardData();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Verification failed.');
    }
  };

  const handleUpdateStatus = async (reportId, newStatus) => {
    try {
      const res = await adminService.updateReportStatus(reportId, newStatus);
      if (res.data.success) {
        setActionSuccess(`Status updated to ${newStatus}.`);
        fetchReports(activeTab === 'lost' ? 'lost' : 'found');
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Status update failed.');
    }
  };

  const handleDeleteReport = async (reportId) => {
    if (!window.confirm('Are you sure you want to permanently delete this report? This will also remove any claims on it.')) return;
    try {
      const res = await adminService.deleteReport(reportId);
      if (res.data.success) {
        setActionSuccess('Report removed by administrator.');
        fetchReports(activeTab === 'lost' ? 'lost' : 'found');
        fetchDashboardData();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to delete report.');
    }
  };

  const handleToggleUser = async (userId, currentStatus) => {
    try {
      const res = await adminService.toggleUserStatus(userId, !currentStatus);
      if (res.data.success) {
        setActionSuccess(`User account ${!currentStatus ? 'activated' : 'deactivated'}.`);
        fetchUsers();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to update user status.');
    }
  };

  const handleClaimDecision = async (claimId, status) => {
    try {
      const res = await claimService.updateClaimStatus(claimId, {
        status,
        adminNotes: adminNoteInput.trim(),
      });
      if (res.data.success) {
        setActionSuccess(`Claim marked as ${status}. Notifications dispatched.`);
        setSelectedClaim(null);
        setAdminNoteInput('');
        fetchClaims();
        fetchDashboardData();
      }
    } catch (err) {
      setActionError(err.response?.data?.message || 'Decision processing failed.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Admin Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#dcfce7', color: '#15803d', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Shield size={13} /> Campus Security Administration
            </div>
            <h1 className="section-title" style={{ marginTop: '0.25rem' }}>
              Admin Control Center
            </h1>
            <p className="section-subtitle">
              Verify submitted items, review student claims, manage user accounts, and inspect campus recovery analytics
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => {
                if (activeTab === 'dashboard' || activeTab === 'analytics') fetchDashboardData();
                else if (activeTab === 'users') fetchUsers();
                else if (activeTab === 'lost') fetchReports('lost');
                else if (activeTab === 'found') fetchReports('found');
                else if (activeTab === 'claims') fetchClaims();
              }}
              className="btn btn-secondary btn-sm"
              title="Refresh Current View"
            >
              <RefreshCw size={14} /> Refresh
            </button>
          </div>
        </div>

        {/* Global Notifications */}
        {actionSuccess && (
          <div className="auth-alert auth-alert-success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{actionSuccess}</span>
            <button
              onClick={() => setActionSuccess('')}
              style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '0.9rem' }}
            >
              ✕
            </button>
          </div>
        )}

        {actionError && (
          <div className="auth-alert auth-alert-error" style={{ marginBottom: '1.5rem' }}>
            <AlertTriangle size={18} />
            <span>{actionError}</span>
            <button
              onClick={() => setActionError('')}
              style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '0.9rem' }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Dashboard Navigation Tabs (Section 13 requirement) */}
        <div className="admin-nav-tabs">
          <button
            className={`admin-nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart3 size={16} /> Dashboard
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={16} /> Users
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'lost' ? 'active' : ''}`}
            onClick={() => setActiveTab('lost')}
          >
            <Search size={16} /> Lost Reports
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'found' ? 'active' : ''}`}
            onClick={() => setActiveTab('found')}
          >
            <Sparkles size={16} /> Found Reports
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'claims' ? 'active' : ''}`}
            onClick={() => setActiveTab('claims')}
          >
            <Award size={16} /> Claims
          </button>
          <button
            className={`admin-nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <FileText size={16} /> Reports/Analytics
          </button>
          <button
            className="admin-nav-tab"
            onClick={handleLogout}
            style={{ marginLeft: 'auto', color: 'var(--danger)' }}
          >
            <RotateCcw size={16} /> Logout
          </button>
        </div>

        {/* ================= TAB 1: OVERVIEW DASHBOARD ================= */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Statistics Cards (Section 13) */}
            <div className="admin-stats-grid">
              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#2563eb' }}>
                  <Users size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.totalUsers ?? '...'}</span>
                  <span className="stat-label">Total Users</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#ef4444' }}>
                  <Search size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.totalLostReports ?? '...'}</span>
                  <span className="stat-label">Total Lost Reports</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#10b981' }}>
                  <Sparkles size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.totalFoundReports ?? '...'}</span>
                  <span className="stat-label">Total Found Reports</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#f59e0b' }}>
                  <Clock size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.pendingVerification ?? '...'}</span>
                  <span className="stat-label">Pending Verification</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#8b5cf6' }}>
                  <Award size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.pendingClaims ?? '...'}</span>
                  <span className="stat-label">Pending Claims</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: '#059669' }}>
                  <RotateCcw size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stats?.resolvedCases ?? '...'}</span>
                  <span className="stat-label">Resolved Cases</span>
                </div>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* Recent Reports Widget */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Recent Reports
                  </h3>
                  <button onClick={() => setActiveTab('found')} className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                    View All
                  </button>
                </div>

                {recentReports.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No recent reports filed.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {recentReports.map((item) => (
                      <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.itemName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            #{item.reportId} • By: {item.reportedBy?.name || 'Student'} ({item.location})
                          </div>
                        </div>
                        <StatusBadge status={item.status} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Claims Widget */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Recent Student Claims
                  </h3>
                  <button onClick={() => setActiveTab('claims')} className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                    Manage Claims
                  </button>
                </div>

                {recentClaims.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No pending claims.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {recentClaims.map((cl) => (
                      <div key={cl._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                            {cl.itemId?.itemName || 'Campus Item'}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            Claimant: {cl.claimant?.name || 'Student'}
                          </div>
                        </div>
                        <StatusBadge status={cl.status} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: USER MANAGEMENT ================= */}
        {activeTab === 'users' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Campus Registered Users</h2>
              <div style={{ display: 'flex', gap: '0.5rem', minWidth: '280px' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Search by name, student ID, department..."
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchUsers()}
                />
                <button onClick={fetchUsers} className="btn btn-primary btn-sm">
                  <Search size={15} />
                </button>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Loading user directory..." />
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Student / User</th>
                      <th>Student ID</th>
                      <th>College Email</th>
                      <th>Phone</th>
                      <th>Department & Year</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Account Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList.map((u) => (
                      <tr key={u._id}>
                        <td>
                          <div style={{ fontWeight: 700, color: 'var(--primary)' }}>{u.name}</div>
                        </td>
                        <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{u.studentId}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                        <td>
                          <div style={{ fontSize: '0.85rem' }}>{u.department}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{u.year}</div>
                        </td>
                        <td>
                          <span className={`user-role-tag ${u.role === 'admin' ? 'admin' : ''}`}>
                            {u.role}
                          </span>
                        </td>
                        <td>
                          {u.isActive ? (
                            <span style={{ color: 'var(--success)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <CheckCircle2 size={14} /> Active
                            </span>
                          ) : (
                            <span style={{ color: 'var(--danger)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <XCircle size={14} /> Deactivated
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          {u.role !== 'admin' && (
                            <button
                              onClick={() => handleToggleUser(u._id, u.isActive)}
                              className={`btn btn-sm ${u.isActive ? 'btn-secondary' : 'btn-success'}`}
                              style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                            >
                              {u.isActive ? (
                                <>
                                  <UserX size={13} /> Deactivate
                                </>
                              ) : (
                                <>
                                  <UserCheck size={13} /> Activate
                                </>
                              )}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: LOST REPORTS MANAGEMENT ================= */}
        {activeTab === 'lost' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Lost Reports Moderation</h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Filter by keyword or report ID..."
                  value={reportFilter.search}
                  onChange={(e) => setReportFilter({ ...reportFilter, search: e.target.value })}
                  style={{ width: '220px' }}
                />
                <select
                  className="form-select"
                  value={reportFilter.status}
                  onChange={(e) => {
                    setReportFilter({ ...reportFilter, status: e.target.value });
                    setTimeout(() => fetchReports('lost'), 50);
                  }}
                  style={{ width: '150px' }}
                >
                  <option value="All">All Statuses</option>
                  <option value="Searching">Searching</option>
                  <option value="Found">Found</option>
                  <option value="Claimed">Claimed</option>
                  <option value="Returned">Returned</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button onClick={() => fetchReports('lost')} className="btn btn-primary btn-sm">
                  <Search size={14} /> Filter
                </button>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Fetching lost reports..." />
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report ID</th>
                      <th>Item Name</th>
                      <th>Category</th>
                      <th>Reported By</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Moderation Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsList.map((item) => (
                      <tr key={item._id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                          #{item.reportId}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.itemName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.description?.slice(0, 45)}...
                          </div>
                        </td>
                        <td>{item.category}</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.reportedBy?.name || 'Student'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                            {item.reportedBy?.email}
                          </div>
                        </td>
                        <td>{item.location}</td>
                        <td>{item.date}</td>
                        <td>
                          <StatusBadge status={item.status} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                            <Link to={`/items/${item._id}`} className="btn btn-secondary btn-sm" title="View details" style={{ padding: '0.35rem 0.55rem' }}>
                              <Eye size={14} />
                            </Link>
                            <select
                              value={item.status}
                              onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                              className="form-select"
                              style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', width: '120px' }}
                            >
                              <option value="Searching">Searching</option>
                              <option value="Found">Found</option>
                              <option value="Claimed">Claimed</option>
                              <option value="Returned">Returned</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                            <button
                              onClick={() => handleDeleteReport(item._id)}
                              className="btn btn-danger btn-sm"
                              title="Delete inappropriate report"
                              style={{ padding: '0.35rem 0.55rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: FOUND REPORTS MANAGEMENT & VERIFICATION ================= */}
        {activeTab === 'found' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Found Reports Verification Queue</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Approve and publish items turned in by students to make them visible campus-wide
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select
                  className="form-select"
                  value={reportFilter.status}
                  onChange={(e) => {
                    setReportFilter({ ...reportFilter, status: e.target.value });
                    setTimeout(() => fetchReports('found'), 50);
                  }}
                  style={{ width: '180px' }}
                >
                  <option value="All">All Found Reports</option>
                  <option value="Pending Verification">Pending Verification Only</option>
                  <option value="Found">Verified Found</option>
                  <option value="Claimed">Claimed</option>
                  <option value="Returned">Returned</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Fetching found reports queue..." />
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report ID</th>
                      <th>Found Item</th>
                      <th>Category</th>
                      <th>Turned In By</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsList.map((item) => (
                      <tr key={item._id} style={{ backgroundColor: item.status === 'Pending Verification' ? '#fffbeb' : 'inherit' }}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                          #{item.reportId}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.itemName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.description?.slice(0, 45)}...
                          </div>
                        </td>
                        <td>{item.category}</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{item.reportedBy?.name || 'Student'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                            {item.reportedBy?.email}
                          </div>
                        </td>
                        <td>{item.location}</td>
                        <td>{item.date}</td>
                        <td>
                          <StatusBadge status={item.status} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                            {item.status === 'Pending Verification' && (
                              <button
                                onClick={() => handleVerifyReport(item._id)}
                                className="btn btn-success btn-sm"
                                title="Verify report and publish publicly"
                                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                              >
                                <Check size={14} /> Verify & Publish
                              </button>
                            )}

                            <Link to={`/items/${item._id}`} className="btn btn-secondary btn-sm" title="View details" style={{ padding: '0.35rem 0.55rem' }}>
                              <Eye size={14} />
                            </Link>

                            <select
                              value={item.status}
                              onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                              className="form-select"
                              style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', width: '135px' }}
                            >
                              <option value="Pending Verification">Pending Verification</option>
                              <option value="Found">Found (Verified)</option>
                              <option value="Claimed">Claimed</option>
                              <option value="Returned">Returned</option>
                              <option value="Rejected">Rejected</option>
                            </select>

                            <button
                              onClick={() => handleDeleteReport(item._id)}
                              className="btn btn-danger btn-sm"
                              title="Delete report"
                              style={{ padding: '0.35rem 0.55rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: ADMIN CLAIM MANAGEMENT ================= */}
        {activeTab === 'claims' && (
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Student Ownership Claims (Section 15)</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Inspect identifying details submitted by claimants. Approving a claim notifies the student and marks item as Claimed.
              </p>
            </div>

            {loading ? (
              <LoadingSpinner message="Loading claim requests..." />
            ) : claimsList.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <Award size={36} color="var(--text-light)" style={{ marginBottom: '0.75rem' }} />
                <h3>No Ownership Claims Submitted Yet</h3>
              </div>
            ) : (
              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Claim ID</th>
                      <th>Item</th>
                      <th>Claimant</th>
                      <th>Reason / Ownership Proof</th>
                      <th>Date Submitted</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Review Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimsList.map((claim) => (
                      <tr key={claim._id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 700 }}>
                          #{claim._id.slice(-6).toUpperCase()}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>
                            {claim.itemId?.itemName || 'Campus Item'}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'monospace' }}>
                            Report: #{claim.itemId?.reportId}
                          </div>
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{claim.claimant?.name || 'Student'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {claim.claimant?.studentId} • {claim.claimant?.department}
                          </div>
                        </td>
                        <td style={{ maxWidth: '240px' }}>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {claim.reason}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '2px' }}>
                            {claim.identifyingDetails?.slice(0, 40)}...
                          </div>
                        </td>
                        <td>
                          {new Date(claim.createdAt).toLocaleDateString()}
                        </td>
                        <td>
                          <StatusBadge status={claim.status} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                            <button
                              onClick={() => {
                                setSelectedClaim(claim);
                                setAdminNoteInput(claim.adminNotes || '');
                              }}
                              className="btn btn-secondary btn-sm"
                              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                            >
                              <Eye size={13} /> View Details
                            </button>

                            {claim.status === 'Pending' && (
                              <>
                                <button
                                  onClick={() => handleClaimDecision(claim._id, 'Approved')}
                                  className="btn btn-success btn-sm"
                                  title="Approve Claim"
                                  style={{ padding: '0.35rem 0.6rem' }}
                                >
                                  <Check size={14} />
                                </button>
                                <button
                                  onClick={() => handleClaimDecision(claim._id, 'Rejected')}
                                  className="btn btn-danger btn-sm"
                                  title="Reject Claim"
                                  style={{ padding: '0.35rem 0.6rem' }}
                                >
                                  <XCircle size={14} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 6: ANALYTICS & BREAKDOWN ================= */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Campus Recovery Analytics</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                System overview across categories, resolution rates, and inventory status
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Category distribution */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary)' }}>
                  Breakdown by Category
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {categoryStats.map((cat) => (
                    <div key={cat._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{cat._id}</span>
                      <span style={{ fontWeight: 800, background: '#eff6ff', color: 'var(--primary)', padding: '2px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                        {cat.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status distribution */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary)' }}>
                  Breakdown by Status
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {statusStats.map((st) => (
                    <div key={st._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <StatusBadge status={st._id} />
                      <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{st.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Claim Full Detail & Decision Modal (Section 15) */}
        {selectedClaim && (
          <div className="modal-overlay" onClick={() => setSelectedClaim(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">Inspect Claim #{selectedClaim._id.slice(-6).toUpperCase()}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Item: {selectedClaim.itemId?.itemName} (#{selectedClaim.itemId?.reportId})
                  </div>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedClaim(null)}>✕</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Claimant Profile
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{selectedClaim.claimant?.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Student ID: {selectedClaim.claimant?.studentId} • {selectedClaim.claimant?.department} ({selectedClaim.claimant?.year})
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Email: {selectedClaim.claimant?.email} • Phone: {selectedClaim.claimant?.phone}
                  </div>
                </div>

                <div>
                  <label className="form-label" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                    Ownership Explanation:
                  </label>
                  <p style={{ background: '#ffffff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedClaim.reason}
                  </p>
                </div>

                <div>
                  <label className="form-label" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>
                    Identifying Details (Serial, stickers, private marks):
                  </label>
                  <p style={{ background: '#ffffff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedClaim.identifyingDetails}
                  </p>
                </div>

                {selectedClaim.proof && (
                  <div>
                    <label className="form-label" style={{ marginBottom: '0.25rem' }}>Submitted Proof Photo:</label>
                    <div style={{ width: '100%', maxHeight: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                      <img src={selectedClaim.proof} alt="Proof" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  </div>
                )}

                <div>
                  <label className="form-label">Administrative Notes / Message to Student</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Enter instructions or reason for acceptance/rejection (e.g., 'Please present student ID at desk Room 108')..."
                    value={adminNoteInput}
                    onChange={(e) => setAdminNoteInput(e.target.value)}
                    rows={2}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedClaim(null)}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClaimDecision(selectedClaim._id, 'Rejected')}
                  >
                    <XCircle size={15} /> Reject Claim
                  </button>

                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleClaimDecision(selectedClaim._id, 'Approved')}
                  >
                    <Check size={15} /> Approve Claim
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;

```

---

<a id="file-frontend-src-pages-notfoundpage-jsx"></a>
## FILE: `frontend/src/pages/NotFoundPage.jsx`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\frontend\src\pages\NotFoundPage.jsx`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '520px' }}>
        <div style={{ display: 'inline-flex', padding: '16px', background: '#fee2e2', borderRadius: '50%', color: 'var(--danger)', marginBottom: '1.5rem' }}>
          <Compass size={48} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem' }}>
          404 - Page Not Found
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Looks like this campus trail has gone missing! The page you are attempting to reach does not exist or was moved.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Campus Home
          </Link>
          <Link to="/lost-items" className="btn btn-secondary">
            <Search size={16} /> Search Registry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

```

---

