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
