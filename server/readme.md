# UberClone API Documentation

## User Registration

### Endpoint

`POST /users/register`

### Description

This endpoint allows users to register a new account. It validates the user's input, hashes the password, and saves the user to the database. It also generates a JWT token for the user upon successful registration.



#### Headers:
```plaintext
Content-Type: application/json
```

#### Body:
```json
{
  "fullname": {
    "firstname": "Huzaif",
    "lastname": "Ahmed"
  },
  "email": "huzaif@gmail.com",
  "password": "123456789"
}
```

### Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "JWT_TOKEN",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "Huzaif",
      "lastname": "Ahmed"
    },
    "email": "huzaif@gmail.com",
    "socketId": null
  }
}
```

## User Login

### Endpoint

`POST /users/login`

### Description

This endpoint allows users to log in to their existing account. It validates the user's credentials (email and password) and returns a JWT token upon successful authentication.



#### Headers:
```plaintext
Content-Type: application/json
```

#### Body:
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Response

```json
{
  "message": "User logged in successfully",
  "token": "JWT_TOKEN",
  "user": {
    "_id": "65dd2f46459c59c4a0546e6b",
    "fullname": {
      "firstname": "John", 
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## User Profile

### Endpoint

`GET /users/profile`

### Description

This endpoint retrieves the authenticated user's profile information. It requires a valid JWT token for authorization.



#### Headers:
```plaintext
Content-Type: application/json


Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Response

```json
{
  "message": "Unauthorized - Invalid or missing token"
}
```

## User Logout

### Endpoint

`GET /users/logout`

### Description

This endpoint logs out the authenticated user by invalidating their JWT token. The token is added to a blacklist with a 24-hour TTL (Time To Live) and the authentication cookie is cleared.


#### Headers:
```plaintext
Content-Type: application/json
Authorization: Bearer JWT_TOKEN
```

#### Example Headers:
```plaintext
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGQyZjQ2NDU5YzU5YzRhMDU0NmU2YiIsImlhdCI6MTYyMjUwNjQ2MH0.5nwjW9-mtkRNozZo1FQwoW3FKZKtBWiE9gcFSnwW-rs
```

### Response

#### Success (200 OK):
```json
{
  "message": "User logged out successfully"
}
```

#### Error (401 Unauthorized):
```json
{
  "message": "Unauthorized - Invalid or missing token"
}
```

#### Error (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

### Notes

- Authentication token must be provided in either:
  - The `Authorization` header with "Bearer " prefix
  - The `token` cookie
- Upon successful logout:
  - The token is added to a blacklist (expires after 24 hours)
  - The authentication cookie is cleared
  - The token becomes invalid for future requests
- Attempting to use a blacklisted token will result in a 401 Unauthorized response






