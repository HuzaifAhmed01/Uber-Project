# Backend API Documentation

## User Registration

### Endpoint

`POST /users/register`

### Description

This endpoint allows users to register a new account. It validates the user's input, hashes the password, and saves the user to the database. It also generates a JWT token for the user upon successful registration.

### Request

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

