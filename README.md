# Students Management Dashboard

A Students Management Dashboard built primarily to **learn and practice backend CRUD operations**, with a simple React-based UI used to interact with the API.

The main focus of this project is **backend development, API design, and async data handling**, not UI-heavy experimentation.

---

## Project Focus

This project was created with a **backend-first approach**, focusing on:

- CRUD operations using MongoDB
- RESTful API structure with Express
- Proper async/await handling
- Reliable update and delete flows
- Preventing stale UI state caused by async race conditions

The frontend exists mainly to **test and visualize backend behavior**.

---

## Features

- Create student records
- Read all students from the database
- Update student data (inline editing)
- Delete student records
- Immediate UI sync after backend updates

---

## UI Notes

- Dark, minimal dashboard UI
- Bento-style card layout
- Inline editing instead of modal dialogs

> UI is intentionally kept simple.  
> The primary learning goal of this project is **backend CRUD and API integration**.

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

---

## Architecture Overview

- Frontend components manage user interactions
- Axios handles communication with the backend API
- Express manages routing and request handling
- MongoDB stores and updates student records

---

## Data Flow


User Action
 → React Component
 → Axios API Request
 → Express Route
 → MongoDB
 → Updated Response
 → UI Sync
