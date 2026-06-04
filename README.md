# StudyFlow

StudyFlow is a full-stack learning progress dashboard for organizing study resources, tracking completion, and managing courses, articles, and projects through a responsive React interface.

## Live Demo

Frontend: <study-flow-edu-track.vercel.app>
Backend API: <>

## Features

- Public landing page
- User authentication
- Protected dashboard route
- User-scoped resource CRUD
- Search, filter, and sort resources
- Pagination
- Inline editing
- Completion toggles
- Loading and error states
- Responsive UI

## Tech Stack

Frontend:
- React
- TypeScript
- React Router
- Tailwind CSS
- Axios
- Vite

Backend:
- Node.js
- Express
- Prisma
- PostgreSQL
- JWT
- bcrypt

## Screenshots

Add screenshots here.

## Project Structure

client/
server/

## Local Setup

### 1. Clone the repo

### 2. Install frontend dependencies

cd client
npm install

### 3. Install backend dependencies

cd server
npm install

### 4. Configure environment variables

client/.env
VITE_API_URL=http://localhost:5000/api

server/.env
DATABASE_URL=...
JWT_SECRET=...

### 5. Run the backend

cd server
npm run dev

### 6. Run the frontend

cd client
npm run dev

## API Documentation

See docs/API.md.

## Future Improvements

- Add frontend tests
- Add backend tests
- Add CI/CD with GitHub Actions
- Deploy backend API
- Add demo account