# Sports Events API

## 📌 Project Overview

This project is a simple full-stack application for managing and displaying sports events.  
It allows users to create new events and view existing ones through a clean and structured interface.

The backend is built with Node.js and Express, and the frontend is implemented using plain HTML, CSS, and JavaScript.

---

## 🚀 Features

- Create a new event
- View all events
- View a single event by ID
- Frontend form to submit new events
- Client-side filtering by sport
- Clean UI with event cards
- Relational database design using SQLite

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** SQLite
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Version Control:** Git & GitHub

---

## 📡 API Endpoints

### Get all events

GET /api/events

### Get single event

GET /api/events/:id

### Create event

POST /api/events

---

## 🗄️ Database Design

The database is designed using normalization principles.

### Tables:

- **sports**
  - id (primary key)
  - name (unique)

- **events**
  - id (primary key)
  - date
  - time
  - \_sportId (foreign key)
  - home
  - away
  - venue
  - description

A relationship is established between events and sports using a foreign key.  
This avoids duplication of sport names and ensures consistent data.

---

## ⚙️ Setup & Run

1. Clone the repository: git clone https://github.com/EFEOZTRK/sports-events-api.git
2. Install dependencies: npm i
3. Run the server: npm run dev (dev is the script name that runs "nodemon server.js")
4. Open in browser: http://localhost:3000

---
🧪 Testing

Basic API tests are implemented using Jest and Supertest.

The tests cover core endpoints such as:

- GET /api/events
- POST /api/events

Tests are written to be deterministic by creating data within the test itself instead of relying on existing database state.

⚙️ Running Tests

npm install
npm test

Notes:
- Since the project uses ES Modules, tests are executed using Node’s experimental VM modules support.
- NODE_ENV variable is set so server won't run while tests are running.
- Since the database may be empty on initial runs, tests are designed to create the required data before making assertions.
- For simplicity, tests use the same SQLite database as the application. In a production environment, a separate test database or mocking strategy would be used to avoid modifying real data.

## 🧠 Design Decisions & Assumptions

### 1. Normalization of Sports

Instead of storing sport names directly in the events table, a separate `sports` table was created.

This ensures:

- no duplication
- consistent naming
- easier data management

---

### 2. Automatic Sport Creation

When creating an event, if the sport does not already exist, it is automatically added to the `sports` table.

Assumption:

- Event creation is considered an administrative action
- Therefore, it is safe to trust the input and allow new sports to be created dynamically

In a real-world application, this would likely be restricted to admin users.

---

### 3. Separation of Concerns

The backend is structured into:

- routes
- controllers
- services

This improves readability, maintainability, and scalability.

---

### 4. Frontend Simplicity

The frontend was intentionally kept simple using vanilla JavaScript instead of React.
Since also the assignment requires a single html file.

Focus was placed on:

- clarity
- functionality
- ease of understanding

---

### 5. Filtering Implementation

Filtering is implemented on the client side for simplicity and responsiveness.

In a production system, filtering would mostly be handled on the backend.

---

### 6. Implementing Tests

Since the database may be empty on initial runs, tests are designed to create the required data before making assertions.

For simplicity, tests use the same SQLite database as the application. In a production environment, a separate test database or mocking strategy would be used to avoid modifying real data.

## 📈 Possible Improvements

- Add authentication and role-based access (admin/user)
- Move filtering to backend queries and add more filter options
- Add more advanced input validation
- Add pagination for large datasets
- Improve UI/UX with React or a similar framework
- Add updating event and deleting event functionality. 
- Expand automated test covarage

---

## ✅ Summary

This project demonstrates:

- REST API design
- relational database modeling
- clean backend architecture
- frontend integration with API
- practical engineering decision-making
