# 🚀 ForgeFlow

> AI-powered LinkedIn content creation, scheduling, and publishing platform.

ForgeFlow is a full-stack web application that helps creators and developers create, manage, schedule, and publish LinkedIn content from one workspace.

It combines AI-powered content generation, manual editing, LinkedIn OAuth 2.0, media management, scheduled publishing, and background job processing using BullMQ and Redis.

---

## ✨ Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Access and refresh tokens
- HTTP-only cookies
- Protected routes
- Logout functionality

### 🤖 AI Content Generation

- Generate LinkedIn posts using AI
- Topic-based generation
- Audience selection
- Tone preferences
- Content length control
- Creativity control
- Custom instructions
- AI-generated hashtags

### ✍️ Content Creation

- Create posts manually
- Generate posts using AI
- Edit drafts
- Add hashtags
- Upload images
- LinkedIn post preview
- Persistent draft state
- Duplicate posts

### 📚 Content Library

- View all posts
- Search and filter posts
- Pagination
- Edit posts
- Duplicate posts
- Delete posts
- Delete all drafts

### 📅 Scheduling

- Schedule posts for future dates
- Cancel scheduled posts
- Reschedule posts
- Automatic publishing using BullMQ and Redis

### 🔗 LinkedIn Integration

- LinkedIn OAuth 2.0
- Connect LinkedIn account
- Access token management
- Token expiry validation
- Publish text posts
- Publish image posts

### 🖼️ Media Management

- Image uploads using Multer
- Cloudinary media storage
- Store media URLs in MongoDB
- Upload images to LinkedIn during publishing

frontend/
└── src/
    ├── assets/
    ├── components/
    │   ├── Sidebar/
    │   ├── Navbar/
    │   ├── Button/
    │   ├── Card/
    │   ├── Loader/
    │   ├── LinkedInPreview/
    │   └── ScheduleModal/
    │
    ├── hooks/
    ├── pages/
    │   ├── Workspace/
    │   ├── NewPost/
    │   ├── ContentLibrary/
    │   ├── Schedule/
    │   └── Settings/
    │
    ├── services/
    │   ├── api.js
    │   ├── auth.service.js
    │   ├── post.service.js
    │   ├── ai.service.js
    │   └── settings.service.js
    │
    ├── layouts/
    ├── App.jsx
    ├── main.jsx
    └── index.css
    
backend/
├── controllers/
├── models/
│   ├── user.model.js
│   ├── post.model.js
│   └── linkedinAccount.model.js
│
├── routes/
│   ├── user.routes.js
│   ├── post.routes.js
│   ├── linkedin.routes.js
│   └── ...
│
├── middleware/
├── services/
│   └── linkedin.service.js
│
├── queue/
│   ├── connection.js
│   ├── post.queue.js
│   └── post.worker.js
│
├── utils/
│   ├── cloudinary.js
│   ├── asyncHandler.js
│   ├── apiError.js
│   └── apiResponse.js
│
├── db/
│   └── index.js
│
├── app.js
├── index.js
└── package.json
