````markdown
# Backend API for EduCourse App

This is the official RESTful API for the EduCourse application. This server handles all core functionalities, including user management, authentication, product (course) handling, email verification, and file uploads.

---
## Features ✨

* **User Management**: Full CRUD (Create, Read, Update, Delete) operations for users.
* **Secure Authentication**:
    * User Registration with email verification.
    * Secure Login using JSON Web Tokens (JWT).
    * Password hashing using `bcrypt`.
    * Feature to resend verification email.
* **Protected Routes**: Middleware to protect specific endpoints, ensuring only authenticated users can access them.
* **Dynamic Course Lists**: Advanced querying for the product/course list endpoint:
    * **Filtering** by category (`?kategori=...`).
    * **Searching** by course title and description (`?search=...`).
    * **Sorting** by various fields like price and title, in ascending or descending order (`?sort=price:desc`).
* **File Uploads**: A dedicated endpoint for uploading images using `multer`.

---
## Tech Stack 🛠️

* **Backend**: Node.js, Express.js
* **Database**: MySQL (using `mysql2` driver)
* **Authentication**: `jsonwebtoken` (JWT), `bcrypt`
* **Emailing**: `nodemailer`, `uuid`
* **File Uploads**: `multer`
* **Environment Variables**: `dotenv`

---
## Getting Started 🚀

Follow these steps to get the project running on your local machine.

### Prerequisites

* Node.js (v16 or higher)
* NPM
* A running MySQL server
* A Mailtrap.io account for testing emails

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create and configure the environment file:**
    * Copy the `.env.example` file to a new file named `.env`.
    * Open the `.env` file and fill in your specific credentials for the database and Mailtrap.

4.  **Set up the database:**
    * Create a new database in MySQL with the name you specified in `DB_NAME`.
    * Import the necessary SQL tables into your database.

5.  **Run the server:**
    * To run in development mode with automatic restarts (if `nodemon` is installed):
        ```bash
        npm run dev
        ```
    The server will be running on `http://localhost:3000` (or the port you specified).

---
## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=educourse
DB_PORT=3306
DB_CONNECTION_LIMIT=10

# Application Port
PORT=3000

# JSON Web Token
JWT_SECRET=your_super_secret_jwt_key_here

# Mailtrap SMTP Configuration (for development)
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=your_mailtrap_username_here
MAIL_PASS=your_mailtrap_password_here
````