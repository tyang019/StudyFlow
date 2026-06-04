# StudyFlow API Documentation

Base URL:

Local:
http://localhost:5000/api

Production:
<my backend URL>/api

## Authentication

Protected routes require:

Authorization: Bearer <token>

## Auth Endpoints

### POST /auth/register

Creates a new user account.

Request:

{
  "email": "user@example.com",
  "password": "password123"
}

Response:

{
  "user": {
    "id": 1,
    "email": "user@example.com"
  },
  "token": "jwt-token"
}

### POST /auth/login

Logs in an existing user.

Request:

{
  "email": "user@example.com",
  "password": "password123"
}

Response:

{
  "user": {
    "id": 1,
    "email": "user@example.com"
  },
  "token": "jwt-token"
}

## Resource Endpoints

All resource endpoints require Authorization header.

### GET /resources

Returns resources for the authenticated user.

Optional query params:

- completed=true
- completed=false
- type=course
- type=article
- type=project
- q=searchText
- sort=title_asc
- sort=title_desc

Example:

GET /resources?completed=false&type=course&sort=title_asc

### POST /resources

Creates a resource.

Request:

{
  "title": "React Router Notes",
  "type": "course",
  "completed": false
}

### PUT /resources/:id

Updates a resource owned by the authenticated user.

Request:

{
  "title": "Updated title",
  "type": "course",
  "completed": true
}

### DELETE /resources/:id

Deletes a resource owned by the authenticated user.