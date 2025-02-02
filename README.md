# Users API

A RESTful API for managing users with CRUD operations and advanced filtering, built using **Node.js**, **Express**, and **MongoDB**. The API supports adding users to groups and advanced querying capabilities for retrieving users based on specific attributes.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete users.
- **Advanced Filtering**: Filter users by:
  - Name (partial match, case-insensitive).
  - Email (partial match, case-insensitive).
  - Group membership.
- **Group Management**: Add users to groups and retrieve them based on group membership.
- **Swagger UI**: View and interact with the API endpoints using Swagger.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/users-api.git
cd users-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGO_URI=mongodb://localhost:27017/usersapi
PORT=5000
```

### 4. Run the Server

To start the server:

```bash
npm start
```

For development, you can use nodemon for auto-restarts:

```bash
npx nodemon server.js
```

### 5. View Swagger Documentation

Visit [http://localhost:5000/api-docs](http://localhost:5000/api-docs) to view the interactive API documentation.

---

## API Documentation

### Base URL

```
http://localhost:5000/api
```

### Endpoints

#### 1. Create a New User

- **URL**: `/users`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "groups": ["admin", "editor"]
  }
  ```
- **Response**:
  ```json
  {
    "_id": "607d1b2f9f1b2c0015b3e4d8",
    "name": "John Doe",
    "email": "john@example.com",
    "groups": ["admin", "editor"],
    "createdAt": "2023-02-01T12:00:00Z",
    "updatedAt": "2023-02-01T12:00:00Z"
  }
  ```

#### 2. Retrieve All Users

- **URL**: `/users`
- **Method**: `GET`
- **Query Parameters**:
  - `name`: Filter users by name (e.g., `?name=john`).
  - `email`: Filter users by email (e.g., `?email=john@example.com`).
  - `group`: Filter users by group (e.g., `?group=admin`).
- **Response**:
  ```json
  [
    {
      "_id": "607d1b2f9f1b2c0015b3e4d8",
      "name": "John Doe",
      "email": "john@example.com",
      "groups": ["admin", "editor"],
      "createdAt": "2023-02-01T12:00:00Z",
      "updatedAt": "2023-02-01T12:00:00Z"
    }
  ]
  ```

#### 3. Retrieve a User by ID

- **URL**: `/users/{id}`
- **Method**: `GET`
- **Path Parameters**:
  - `id` (string, required): The ID of the user.
- **Response**:
  ```json
  {
    "_id": "607d1b2f9f1b2c0015b3e4d8",
    "name": "John Doe",
    "email": "john@example.com",
    "groups": ["admin", "editor"],
    "createdAt": "2023-02-01T12:00:00Z",
    "updatedAt": "2023-02-01T12:00:00Z"
  }
  ```

#### 4. Update a User

- **URL**: `/users/{id}`
- **Method**: `PUT`
- **Path Parameters**:
  - `id` (string, required): The ID of the user.
- **Request Body**:
  ```json
  {
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "groups": ["user"]
  }
  ```
- **Response**:
  ```json
  {
    "_id": "607d1b2f9f1b2c0015b3e4d8",
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "groups": ["user"],
    "createdAt": "2023-02-01T12:00:00Z",
    "updatedAt": "2023-02-01T13:00:00Z"
  }
  ```

#### 5. Delete a User

- **URL**: `/users/{id}`
- **Method**: `DELETE`
- **Path Parameters**:
  - `id` (string, required): The ID of the user.
- **Response**:
  ```json
  {
    "message": "User deleted successfully."
  }
  ```

---

## Swagger Integration

The API is fully documented using Swagger UI. Follow these steps to explore the documentation:

1. **Navigate to Swagger Documentation**:
   Open your browser and go to [http://localhost:5000/api-docs](http://localhost:5000/api-docs).

2. **Interactive Interface**:
   Use Swagger UI to test the endpoints directly by providing inputs and viewing responses.

### Swagger Example Configuration

The Swagger configuration is located in `swaggerDef.js` and `components.yml`.

- **`swaggerDef.js`**:
  This file initializes Swagger with basic information and points to the YAML file for detailed API definitions.

  ```js
  const swaggerJsdoc = require("swagger-jsdoc");
  const path = require("path");

  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Users API",
        version: "1.0.0",
        description:
          "A RESTful API for managing users with CRUD and advanced filtering capabilities.",
      },
      servers: [
        {
          url: "http://localhost:5000",
          description: "Local server",
        },
      ],
    },
    apis: [path.join(__dirname, "components.yml")],
  };

  const swaggerSpec = swaggerJsdoc(options);
  module.exports = swaggerSpec;
  ```

- **`components.yml`**:
  This YAML file defines the API endpoints, parameters, and schemas. See the code in the previous steps for a full example.

---

## Testing

### Postman

Use [Postman](https://www.postman.com/) to test the API:

1. Import the Swagger JSON (available at `/api-docs`).
2. Test endpoints with different request payloads.

### Swagger UI

Use the built-in Swagger UI at [http://localhost:5000/api-docs](http://localhost:5000/api-docs).

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License.
