# ShopEase API Endpoints

Base URL: `http://localhost:8080`

---

## Authentication

### Register User
```bash
curl --location --request POST 'http://localhost:8080/api/auth/register' \
--header 'Content-Type: application/json' \
--data '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
}'
```

### Login User
```bash
curl --location --request POST 'http://localhost:8080/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "johndoe",
    "password": "password123"
}'
```

---

## Users

### Add User
```bash
curl --location --request POST 'http://localhost:8080/users/add' \
--header 'Content-Type: application/json' \
--data '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
}'
```

### Login User (Alternative)
```bash
curl --location --request POST 'http://localhost:8080/users/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "johndoe",
    "password": "password123"
}'
```

---

## Products

### Get All Products
```bash
curl --location --request GET 'http://localhost:8080/api/products' \
--header 'Content-Type: application/json'
```

### Bulk Add Products
```bash
curl --location --request POST 'http://localhost:8080/api/products/bulk' \
--header 'Content-Type: application/json' \
--data '[
    {
        "name": "Laptop",
        "description": "High-performance laptop",
        "price": 999.99,
        "category": "Electronics",
        "stock": 10
    },
    {
        "name": "Smartphone",
        "description": "Latest model smartphone",
        "price": 699.99,
        "category": "Electronics",
        "stock": 25
    }
]'
```

---

## Orders

### Get All Orders
```bash
curl --location --request GET 'http://localhost:8080/api/orders' \
--header 'Content-Type: application/json'
```

### Place Order
```bash
curl --location --request POST 'http://localhost:8080/api/orders' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 1,
    "total": 500,
    "items": [
        {
            "productId": 1,
            "quantity": 1,
            "price": 150
        }
    ]
}'
```

---

## Summary Table

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/users/add` | Add a user |
| POST | `/users/login` | Login user (alt) |
| GET | `/api/products` | Get all products |
| POST | `/api/products/bulk` | Bulk add products |
| GET | `/api/orders` | Get all orders |
| POST | `/api/orders` | Place an order |