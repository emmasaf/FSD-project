# Vite React TypeScript Project

## Project Overview

This is a Vite React TypeScript project set up with essential libraries and tools for efficient development. The project utilizes Material-UI for UI components, Redux Toolkit for state management, and React Router for navigation, following the Feature-Sliced Design (FSD) architecture.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    yarn
    ```

### Running the Project

To start the development server, run the following command:

```sh
yarn run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:3000` in your web browser.

## Technologies and Libraries Used

- [React](https://reactjs.org/) (v18.3.1): A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): A fast build tool and development server.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript.
- [Material-UI](https://mui.com/):
    - `@mui/material` (v5.16.0): Material Design components for React.
    - `@mui/icons-material` (v5.16.0): Material Design icons for React.
    - `@emotion/react` (v11.11.4) and `@emotion/styled` (v11.11.5): CSS-in-JS library used by Material-UI.
- [Redux Toolkit](https://redux-toolkit.js.org/) (v2.2.6): The official, recommended way to write Redux logic.
- [React Redux](https://react-redux.js.org/) (v9.1.2): Official React bindings for Redux.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) (v3.1.0): Middleware that allows you to write action creators that return a function instead of an action.
- [React Router DOM](https://reactrouter.com/) (v6.24.1): Declarative routing for React applications.
- Type Definitions:
    - `@types/react-redux` (v7.1.33)
    - `@types/react-router-dom` (v5.3.3)
    - `@mui/types` (v7.2.14)

## Project Structure

The project structure follows the Feature-Sliced Design (FSD) architecture, organizing code by feature rather than by type:

```
.
├── public
│   └── index.html
├── src
│   ├── widgets
│   ├── pages
│   ├── shared
│   ├── index.css
│   ├── main.tsx
│   └── types
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

## Contributing

If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive guide to setting up and running the project. For any additional questions or issues, please refer to the documentation of the respective libraries or open an issue on the project's GitHub repository.