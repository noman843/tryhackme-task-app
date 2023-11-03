# TryHackMe - Tasks

# Table of Contents

1. [Introduction](#1-introduction)
2. [Prerequisites](#2-prerequisites)
3. [Getting Started](#3-getting-started)
   - [Installation](#31-installation)
   - [Development](#32-development)
4. [Vite Settings](#4-vite-settings)

# 1. Introduction

It is a simple full-stack web application for managing tasks. The application allows users to create, read, update, and delete tasks. 

# 2. Prerequisites

You should have the following installed on your laptop for this project to work.

- [Node Version 16+](https://nodejs.org/en/download)
- [VS Code (or any other IDE)](https://code.visualstudio.com/) - IDE to run and debug code. 

# 3. Getting Started

I am assuming you have already navigated to the `frontend` directory of the main repository.

## 3.1 Installation

Install the project dependencies using the following command in the terminal.

```
npm i
```

## 3.2 Development

Start the project locally.

```
npm run dev 
```

App should be running on [http://localhost:3000/](http://localhost:3000/)

# 4. Vite Settings

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
