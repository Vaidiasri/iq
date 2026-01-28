# Talent IQ - Technical Interview Platform

A full-stack web application for conducting live technical interviews with video calling, real-time chat, and session management capabilities.

## 🚀 Project Overview

Talent IQ is a platform designed to facilitate technical interviews by connecting hosts and participants in coding sessions. The platform features real-time video calls, chat messaging, and comprehensive session management.

## 📁 Project Structure

```
workspace/
├── backend/              # Node.js Express Backend
│   └── src/
│       ├── controllers/  # Request handlers
│       ├── lib/         # Utility libraries (DB, Stream, Inngest)
│       ├── Middelware/  # Authentication middleware
│       ├── models/      # MongoDB schemas
│       ├── routes/      # API routes
│       └── server.js    # Entry point
├── frontend/            # React + TypeScript Frontend
│   └── project/
│       ├── public/      # Static assets
│       └── src/
│           ├── assets/  # Images, fonts, etc.
│           ├── data/    # Problem definitions
│           ├── lib/     # Utility functions
│           ├── pages/   # React pages/routes
│           ├── App.tsx  # Main App component
│           ├── main.tsx # Entry point
│           └── index.css # Global styles
└── package.json         # Root package configuration
```

## 🛠️ Tech Stack

### Backend

- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk (@clerk/express)
- **Video Calling**: Stream Video SDK (@stream-io/node-sdk)
- **Real-time Chat**: Stream Chat (stream-chat)
- **Background Jobs**: Inngest
- **Environment Management**: dotenv
- **CORS**: Enabled for cross-origin requests

### Frontend

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Authentication**: Clerk React (@clerk/clerk-react)
- **Styling**:
  - TailwindCSS 4.1.18
  - DaisyUI 5.5.14 (Component Library)
  - Custom CSS
- **Routing**: React Router 7.11.0
- **State Management**: TanStack React Query 5.90.16
- **HTTP Client**: Axios 1.13.2
- **Notifications**: React Hot Toast 2.6.0
- **Linting**: ESLint with TypeScript support

## ✨ Features Implemented

### 1. Authentication & User Management

- **Clerk Integration**: Complete authentication flow with Clerk
- **User Sync**: Automatic user synchronization between Clerk and MongoDB
- **Inngest Functions**:
  - `sync-user`: Syncs user data on creation/update from Clerk
  - `delete-user-from-db`: Removes user from database when deleted in Clerk
- **Stream User Management**: Automatic creation/deletion of Stream users

### 2. Session Management

Complete CRUD operations for coding sessions:

#### Create Session (`POST /api/session`)

- Creates a new coding session with problem and difficulty
- Generates unique Stream video call ID
- Initializes chat channel for the session
- Protected route (requires authentication)

#### Get Active Sessions (`GET /api/session/active`)

- Retrieves all active sessions
- Populates host information (name, profile image)
- Sorted by creation date (newest first)
- Limited to 20 sessions

#### Get My Recent Sessions (`GET /api/session/my-recent`)

- Fetches completed sessions where user was host or participant
- Returns last 20 sessions
- Sorted by creation date

#### Get Session by ID (`GET /api/session/:id`)

- Retrieves specific session details
- Populates both host and participant information

#### Join Session (`POST /api/session/:id/join`)

- Allows users to join an active session
- Validates:
  - Session exists
  - User is not the host
  - Session not already joined
- Adds user to Stream chat channel

#### End Session (`POST /api/session/:id/end`)

- Marks session as completed
- Only host can end the session
- Deletes associated chat channel

### 3. Real-time Communication

- **Video Calls**: Stream Video SDK integration for video/audio calls
- **Chat Messaging**: Stream Chat for real-time text communication
- **Token Generation**: Secure token generation for Stream services

### 4. Database Models

#### User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  profileImage: String (default: ""),
  clerkId: String (required, unique),
  timestamps: true
}
```

#### Session Model

```javascript
{
  problem: String (required),
  difficulty: Enum ["easy", "medium", "hard"] (required),
  host: ObjectId (ref: User, required),
  participant: ObjectId (ref: User, default: null),
  status: Enum ["active", "completed", "cancelled"] (default: "active"),
  callId: String (default: "")
}
```

### 5. Middleware & Security

- **Protected Routes**: Custom middleware combining Clerk auth and database user lookup
- **CORS Configuration**: Configured for client URL with credentials
- **Request Validation**: Input validation for session creation

### 6. API Routes

#### Chat Routes (`/api/chat`)

- `GET /token` - Get Stream chat token (protected)

#### Session Routes (`/api/session`)

- `POST /` - Create new session (protected)
- `GET /active` - Get active sessions (protected)
- `GET /my-recent` - Get user's recent sessions (protected)
- `GET /:id` - Get session by ID (protected)
- `POST /:id/join` - Join a session (protected)
- `POST /:id/end` - End a session (protected)

### 7. Rich Problem Database

- **120+ LeetCode Problems**: Comprehensive collection of Easy, Medium, and Hard problems.
- **Multi-language Support**: Starter code available for JavaScript, Python, and Java.
- **Detailed Metadata**: Each problem includes descriptions, constraints, examples, and tags.

### 8. Code Execution Engine

- **Piston API Integration**: Secure, sandboxed code execution for multiple languages.
- **Real-time Feedback**: Instant output and error reporting for code submissions.
- **Multi-language Support**: Run code in JavaScript, Python, and Java.

## 🔧 Configuration

### Environment Variables (Backend)

```env
PORT=<server_port>
DATABASE_URL=<mongodb_connection_string>
NODE_ENV=<development|production>
CLIENT_URL=<frontend_url>
INNGEST_EVENT_KEY=<inngest_event_key>
INNGEST_SIGNING_KEY=<inngest_signing_key>
STREAM_API_KEY=<stream_api_key>
STREAM_API_SECRET=<stream_api_secret>
CLERK_SECRET_KEY=<clerk_secret_key>
CLERK_PUBLISHABLE_KEY=<clerk_publishable_key>
```

### Environment Variables (Frontend)

```env
VITE_CLERK_PUBLISHABLE_KEY=<clerk_publishable_key>
```

## 🚀 Getting Started

### Installation

1. **Install all dependencies**:

```bash
npm run build
```

This will install dependencies for both backend and frontend.

### Development

1. **Run Backend**:

```bash
cd backend
npm run dev
```

2. **Run Frontend**:

```bash
cd frontend/project
npm run dev
```

### Production

1. **Build Frontend**:

```bash
npm run build
```

2. **Start Backend**:

```bash
npm start
```

The backend will serve the built frontend in production mode.

## 📦 NPM Scripts

### Root Level

- `npm run build` - Install dependencies for backend and frontend, build frontend
- `npm start` - Start backend server

### Backend

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔗 Integration Points

### Clerk Webhooks

The application listens for Clerk webhook events:

- `clerk/user.created` - Syncs new user to database
- `clerk/user.updated` - Updates user in database
- `clerk/user.deleted` - Removes user from database

### Inngest Endpoint

- `/api/inngest` - Inngest event handler endpoint

### Stream Integration

- Video calls initialized with unique call IDs
- Chat channels created per session
- User tokens generated for secure access

## 🎯 Key Features

✅ User authentication with Clerk  
✅ Automatic user synchronization  
✅ Session creation and management  
✅ Real-time video calling  
✅ Real-time chat messaging  
✅ Protected API routes  
✅ MongoDB database integration  
✅ Background job processing with Inngest  
✅ Production-ready deployment setup

## 📝 Notes

- The application uses ES Modules (`"type": "module"`)
- All routes are protected and require authentication
- Stream services are initialized for both chat and video
- Database connection is established before server starts
- Frontend is served from backend in production mode

## 🔐 Security Features

- Clerk authentication middleware
- Protected routes with user validation
- Secure token generation for Stream services
- CORS configuration with credentials
- Environment variable management

## 📊 Database Connection

The application uses a custom connection protocol that:

1. Connects to MongoDB using Mongoose
2. Starts the Express server only after successful DB connection
3. Exits gracefully on connection failure

## 🎨 Frontend Architecture

### Core Technologies

- **React 19** with TypeScript for type safety
- **Vite** for lightning-fast development and optimized production builds
- **TailwindCSS 4** with **DaisyUI 5** for modern, responsive UI components
- **React Router 7** for client-side routing
- **TanStack React Query** for server state management and caching
- **Axios** for HTTP requests with interceptors
- **React Hot Toast** for elegant notifications

### Project Structure

- **`pages/`**: Route components (HomePage, AboutPage, etc.)
- **`lib/`**: Utility functions and configurations
- **`assets/`**: Static resources (images, fonts)
- **`App.tsx`**: Main application component with routing
- **`main.tsx`**: Application entry point with Clerk provider

### Styling Approach

- **TailwindCSS** for utility-first styling
- **DaisyUI** for pre-built, customizable components
- **Custom CSS** for specific design requirements
- Responsive design with mobile-first approach

### State Management

- **TanStack React Query** for:
  - Server state caching
  - Automatic background refetching
  - Optimistic updates
  - Request deduplication

---

**Repository**: [https://github.com/Vaidiasri/iq](https://github.com/Vaidiasri/iq)

**License**: ISC
