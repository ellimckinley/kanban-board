# Kanban Board

## Description

This project enhances an existing Kanban board application by integrating authentication using JSON Web Tokens (JWT). The updates include completing the UI for the login page, implementing JWT-based authentication in the server API, and deploying the fully functional application to Render.

Deployed Application: [https://kanban-board-n0eb.onrender.com](https://kanban-board-n0eb.onrender.com)

[Kanban Board Screenshot]()
[]()

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [License](#license)
- [Technologies Used](#technologies-used)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Instructions](#testing-instructions)
- [API Reference](#api-reference)
- [Contact](#contact)
- [Resources](#resources)

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ellimckinley/kanban-board
   ```
2. Navigate to the project directory:

   ```bash
   cd candidate-search

   ```

3. In the terminal, run the following command to start the development server:
   ```bash
   npm run dev
   ```

## Usage Information

To use the Kanban Board application:

1. Open the deployed application in your browser: [Kanban Board](https://kanban-board-n0eb.onrender.com).
2. Log in with your existing credentials.
3. Once logged in, you can:
   - Create new boards to organize your tasks.
   - Add tasks to specific boards.
   - View and manage tasks within each board.
   - Edit task to move tasks between columns (e.g., To Do, In Progress, Done).
4. Log out when you are finished to ensure your account remains secure.

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Technologies Used

- React
- JavaScript
- TypeScript
- PostgreSQL
- Sequelize ORM
- Render

## API Reference

- **Authentication Endpoints**

  - `POST /api/auth/login`: Authenticate a user and return a JWT token.
  - `POST /api/auth/register`: Register a new user.

- **Board Endpoints**

  - `GET /api/boards`: Retrieve all boards for the authenticated user.
  - `POST /api/boards`: Create a new board.

- **Task Endpoints**
  - `GET /api/boards/:boardId/tasks`: Retrieve all tasks for a specific board.
  - `POST /api/boards/:boardId/tasks`: Add a new task to a board.

For more details, visit the deployed application: [Kanban Board](https://kanban-board-n0eb.onrender.com).

## Contribution Guidelines

Not accepting contributions at this time.

## Contact

For additional questions and instructions, please contact me at [elli.mckinley@gmail.com](mailto:elli.mckinley@gmail.com).

Checkout my other GitHub projects: @ellimckinley.

## Resources

- Bootcamp course for providing the starter code for the Kanban application.
