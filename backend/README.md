# Table of Contents

1. [Introduction](#1-introduction)
2. [Prerequisites](#2-prerequisites)
3. [Getting Started](#3-getting-started)
   - [Installation](#31-installation)
   - [Development](#32-development)
4. [Project Structure](#4-project-structure)
5. [API Endpoints](#5-api-endpoints)
6. [Database](#6-database)
   - [Models](#61-models)

# 1. Introduction

It is a simple full-stack web application for managing tasks. The application allows users to create, read, update, and delete tasks. 

# 2. Prerequisites

You should have the following installed on your laptop for this project to work.

- [Node Version 16+](https://nodejs.org/en/download)
- [Postman (optional)](https://www.postman.com/downloads/) - To load the project's API documentation in Postman
- [VS Code](https://code.visualstudio.com/) - IDE to run and debug code. 

# 3. Getting Started

I am assuming you have already navigated to the `backend` directory of the main repository.

## 3.1 Installation

Install the project dependencies using the following command in the terminal.

```
npm i
```

Check if the `.env` file exists in the folder. If it doesn't exist, please contact the author to share it with you.

## 3.2 Development

Start the project locally.

```
npm run dev 
```

# 4. Project Structure

Here's the directory structure of the project.
- Controllers - Contains controllers for each Entity of the project, taking care of the business logic in its functions.
- Models - Contains database models confining to application functional constraints.
- Routes - Contains files for each routing API path.
- Utils - Contains utility functions and constants used through out the app.
- Middlewares - These are not being used but can be added to verify JWT or performing any preprocessing on the routes.

# 5. API Endpoints

Please use postman to check the application endpoints by importing the `thm-tasks-postman.json` in the Postman application.

# 6. Database

MongoDB is used as database. We are using Mongo Atlas link in the `.env` file to build connection with the database.

## 6.1 Models

We have two models.
- User - Contains the user details with email, password and name being mandatory. 
- Task - Contains the task details with task ID, description and its completion status.

Feel free to reach out to the author for more details.
