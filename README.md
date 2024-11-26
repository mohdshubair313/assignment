# 📝 Assignment - User Authentication and Task Management API

Welcome to the **User Authentication and Task Management API**! This project provides a robust backend for user registration, login, and task management, complete with JWT-based authentication and secure password storage.

---

## 🚀 Features

- **User Registration**: Create new users with secure password hashing using `bcrypt`.
- **User Login**: Authenticate users and issue JWT tokens for secure API access.
- **Task Management**:
  - Create tasks linked to users.
  - Fetch tasks for a specific user.
- **Secure Authentication**: Protect routes with JWT middleware for authorized access.
- **Built with Prisma ORM** for efficient and scalable database interactions.

---

## 🛠️ Tech Stack

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [JWT](https://jwt.io/) and [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- **Database**: SQLite (default) or any Prisma-supported database
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)

---

## 📂 Project Structure
. ├── routes/ │ ├── users.js # User registration and login routes │ ├── tasks.js # Task management routes ├── index.js # Main server entry point ├── prisma/ │ ├── schema.prisma # Prisma schema ├── package.json # Project dependencies └── README.md # Project documentation


---

## 🖥️ Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mohdshubair313/assignment.git
   cd assignment
2. Install Dependencies:

bash
Copy code
npm install

3. Setup Environment Variables: Create a .env file in the project root and add the following variables:

env
Copy code
PORT=8080
JWT_SECRET=your_secret_key

4. Migrate the Database: Use Prisma to set up your database:


Copy code
npx prisma migrate dev --name init
5.  🏃‍♂️ Running the Server
Start the development server:



6. node index.js
The server will run at http://localhost:8080.

📖 API Documentation
1. User Registration
Endpoint: POST /api/users/register
Payload:
json
Copy code
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
Response:
json
Copy code
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
2. User Login
Endpoint: POST /api/users/login
Payload:
json
Copy code
{
    "email": "john@example.com",
    "password": "password123"
}
Response:
json
Copy code
{
    "token": "your_jwt_token"
}
3. Create a Task
Endpoint: POST /api/tasks
Headers:
json
Copy code
{
    "Authorization": "Bearer your_jwt_token"
}
Payload:
json
Copy code
{
    "title": "Complete Assignment",
    "description": "Finish the Node.js project",
    "status": "pending",
    "userId": 1
}
Response:
json
Copy code
{
    "id": 1,
    "title": "Complete Assignment",
    "description": "Finish the Node.js project",
    "status": "pending",
    "userId": 1
}
4. Fetch User Tasks
Endpoint: GET /api/tasks/:userId
Headers:
json
Copy code
{
    "Authorization": "Bearer your_jwt_token"
}
Response:
json
Copy code
[
    {
        "id": 1,
        "title": "Complete Assignment",
        "description": "Finish the Node.js project",
        "status": "pending",
        "userId": 1
    }
]

🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch for your feature or bugfix.
Submit a pull request.

📬 Contact
If you have any questions or suggestions, feel free to reach out!

Author: Shubair
GitHub: mohdshubair313
