# SMART CAMPUS LOST & FOUND - COMPLETE SOURCE CODE REPOSITORY

Generated on: 2026-09-29T16:23:01.350Z
Project: Smart Campus Lost & Found Web Application
Stack: React, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
Total Files Extracted: 54

---

## TABLE OF CONTENTS

1. [README.md](#readme-md)
2. [.env.example](#-env-example)
3. [backend/package.json](#backend-package-json)
4. [backend/.env.example](#backend--env-example)
5. [backend/server.js](#backend-server-js)
6. [backend/config/db.js](#backend-config-db-js)
7. [backend/models/User.js](#backend-models-user-js)
8. [backend/models/Item.js](#backend-models-item-js)
9. [backend/models/Claim.js](#backend-models-claim-js)
10. [backend/models/Notification.js](#backend-models-notification-js)
11. [backend/middleware/auth.js](#backend-middleware-auth-js)
12. [backend/controllers/authController.js](#backend-controllers-authcontroller-js)
13. [backend/controllers/itemController.js](#backend-controllers-itemcontroller-js)
14. [backend/controllers/claimController.js](#backend-controllers-claimcontroller-js)
15. [backend/controllers/adminController.js](#backend-controllers-admincontroller-js)
16. [backend/controllers/notificationController.js](#backend-controllers-notificationcontroller-js)
17. [backend/routes/authRoutes.js](#backend-routes-authroutes-js)
18. [backend/routes/itemRoutes.js](#backend-routes-itemroutes-js)
19. [backend/routes/claimRoutes.js](#backend-routes-claimroutes-js)
20. [backend/routes/adminRoutes.js](#backend-routes-adminroutes-js)
21. [backend/routes/notificationRoutes.js](#backend-routes-notificationroutes-js)
22. [backend/utils/seed.js](#backend-utils-seed-js)
23. [frontend/package.json](#frontend-package-json)
24. [frontend/vite.config.js](#frontend-vite-config-js)
25. [frontend/index.html](#frontend-index-html)
26. [frontend/src/main.jsx](#frontend-src-main-jsx)
27. [frontend/src/App.jsx](#frontend-src-app-jsx)
28. [frontend/src/index.css](#frontend-src-index-css)
29. [frontend/src/services/api.js](#frontend-src-services-api-js)
30. [frontend/src/context/AuthContext.jsx](#frontend-src-context-authcontext-jsx)
31. [frontend/src/context/NotificationContext.jsx](#frontend-src-context-notificationcontext-jsx)
32. [frontend/src/components/StatusBadge.jsx](#frontend-src-components-statusbadge-jsx)
33. [frontend/src/components/LoadingSpinner.jsx](#frontend-src-components-loadingspinner-jsx)
34. [frontend/src/components/ItemCard.jsx](#frontend-src-components-itemcard-jsx)
35. [frontend/src/components/Navbar.jsx](#frontend-src-components-navbar-jsx)
36. [frontend/src/components/Footer.jsx](#frontend-src-components-footer-jsx)
37. [frontend/src/components/ProtectedRoute.jsx](#frontend-src-components-protectedroute-jsx)
38. [frontend/src/components/AdminRoute.jsx](#frontend-src-components-adminroute-jsx)
39. [frontend/src/components/ClaimModal.jsx](#frontend-src-components-claimmodal-jsx)
40. [frontend/src/components/ContactModal.jsx](#frontend-src-components-contactmodal-jsx)
41. [frontend/src/components/ReportIssueModal.jsx](#frontend-src-components-reportissuemodal-jsx)
42. [frontend/src/pages/LoginPage.jsx](#frontend-src-pages-loginpage-jsx)
43. [frontend/src/pages/RegisterPage.jsx](#frontend-src-pages-registerpage-jsx)
44. [frontend/src/pages/HomePage.jsx](#frontend-src-pages-homepage-jsx)
45. [frontend/src/pages/LostItemsPage.jsx](#frontend-src-pages-lostitemspage-jsx)
46. [frontend/src/pages/FoundItemsPage.jsx](#frontend-src-pages-founditemspage-jsx)
47. [frontend/src/pages/ReportLostPage.jsx](#frontend-src-pages-reportlostpage-jsx)
48. [frontend/src/pages/ReportFoundPage.jsx](#frontend-src-pages-reportfoundpage-jsx)
49. [frontend/src/pages/ItemDetailsPage.jsx](#frontend-src-pages-itemdetailspage-jsx)
50. [frontend/src/pages/MyReportsPage.jsx](#frontend-src-pages-myreportspage-jsx)
51. [frontend/src/pages/NotificationsPage.jsx](#frontend-src-pages-notificationspage-jsx)
52. [frontend/src/pages/ProfilePage.jsx](#frontend-src-pages-profilepage-jsx)
53. [frontend/src/pages/AdminDashboardPage.jsx](#frontend-src-pages-admindashboardpage-jsx)
54. [frontend/src/pages/NotFoundPage.jsx](#frontend-src-pages-notfoundpage-jsx)

---

## FILE: `.env.example`

**Path**: `C:\Users\DELL\.gemini\antigravity\scratch\smart-campus-lost-found\backend\.env.example`

```markdown
MONGO_URI=mongodb://127.0.0.1:27017/smart_campus_lost_found
JWT_SECRET=your_jwt_secret_key_here
PORT=5000

```

---

