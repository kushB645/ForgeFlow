# 🚀 ForgeFlow

> AI-powered LinkedIn content creation, scheduling, and publishing platform.

ForgeFlow is a full-stack web application that helps creators and developers create, manage, schedule, and publish LinkedIn content from a single workspace.

It combines AI-powered content generation, manual editing, LinkedIn OAuth 2.0, media management, scheduled publishing, and background job processing using BullMQ and Redis.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Authentication](#-authentication)
- [LinkedIn Integration](#-linkedin-integration)
- [AI Content Generation](#-ai-content-generation)
- [Post Publishing Flow](#-post-publishing-flow)
- [Post Scheduling Flow](#-post-scheduling-flow)
- [Media Upload Flow](#-media-upload-flow)
- [Post Lifecycle](#-post-lifecycle)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Installation](#-installation)
- [Deployment](#-deployment)
- [Key Engineering Concepts](#-key-engineering-concepts)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## ✨ Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Access and refresh token handling
- HTTP-only cookies
- Protected routes
- Persistent authentication state
- Logout functionality

> ForgeFlow currently uses JWT-based authentication. OTP authentication is not implemented.

### 🤖 AI Content Generation

- Generate LinkedIn posts using AI
- Topic-based content generation
- Audience selection
- Tone preferences
- Content length control
- Creativity control
- Custom instructions
- AI-generated hashtags

### ✍️ Content Creation

- Create posts manually
- Generate posts using AI
- Edit existing drafts
- Add hashtags
- Upload images
- LinkedIn post preview
- Persistent editor state
- Duplicate posts

### 📚 Content Library

- View all posts
- Search posts
- Filter posts by status
- Pagination
- Edit posts
- Duplicate posts
- Delete posts
- Delete all drafts

### 📅 Scheduling

- Schedule posts for future dates
- Cancel scheduled posts
- Reschedule posts
- Automatically publish scheduled posts
- Background processing using BullMQ and Redis

### 🔗 LinkedIn Integration

- LinkedIn OAuth 2.0
- Connect LinkedIn account
- Store LinkedIn account information
- Access token management
- Token expiry validation
- Publish text posts
- Publish image posts

### 🖼️ Media Management

- Image uploads using Multer
- Temporary local file handling
- Cloudinary media storage
- Store Cloudinary URLs in MongoDB
- Upload images to LinkedIn during publishing

---

# 🧰 Tech Stack

## Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Axios
- React Hot Toast
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer

## AI

- Google Gemini / Google GenAI

## Background Processing

- BullMQ
- Redis

## External Services

- LinkedIn API
- Cloudinary

## Deployment

- Vercel
- Render

---

# 📁 Project Structure

ForgeFlow is divided into a frontend React application and a backend Node.js/Express API.

```text
ForgeFlow/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Sidebar/
│   │   │   ├── Navbar/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Loader/
│   │   │   ├── LinkedInPreview/
│   │   │   └── ScheduleModal/
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── usePersistentState.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   │
│   │   │   ├── Workspace/
│   │   │   ├── NewPost/
│   │   │   ├── ContentLibrary/
│   │   │   ├── Schedule/
│   │   │   └── Settings/
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.service.js
│   │   │   ├── post.service.js
│   │   │   ├── ai.service.js
│   │   │   └── settings.service.js
│   │   │
│   │   ├── layouts/
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── ...
│
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── post.controller.js
│   │   ├── linkedin.controller.js
│   │   └── ...
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── post.model.js
│   │   └── linkedinAccount.model.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── post.routes.js
│   │   ├── linkedin.routes.js
│   │   ├── dashboard.routes.js
│   │   └── ai.routes.js
│   │
│   ├── middleware/
│   │
│   ├── services/
│   │   └── linkedin.service.js
│   │
│   ├── queue/
│   │   ├── connection.js
│   │   ├── post.queue.js
│   │   └── post.worker.js
│   │
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── asyncHandler.js
│   │   ├── apiError.js
│   │   └── apiResponse.js
│   │
│   ├── db/
│   │   └── index.js
│   │
│   ├── public/
│   │   └── .gitkeep
│   │
│   ├── app.js
│   ├── index.js
│   ├── package.json
│   └── ...
│
│
└── README.md