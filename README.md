# Run the project

- [x] create .env file from template,
- [x] run command npm install,
- [x] npm run dev,

# Table of contents

## API ROUTES

### POST

- [Test post route](#Test-POST)
- [Login route](#Login)
- [Register route](#Register)
- [Authorisation route](#Authorisation)
- [pizza photo upload route](#Pizza-photo-uploads)
- [sauce photo upload route](#Sauce-photo-uploads)
- [add new pizza route](#Add-new-pizza)

### GET

- [Test get route](#Test-GET)
- [get single pizza route](#GET-single-pizza)
- [get all pizzas route](#GET-all-pizzas)
- [get one sauce route](#GET-one-sauce)
- [get all sauces route](#GET-all-sauces)

# API Routes

## POST

### Test POST

```
/test
```

```typescript
interface Body {
  test: any;
}
```

### Login

```
/login
```

```typescript
interface Body {
  email: string;
  password: string;
}
```

### Register

```
/register
```

```typescript
interface Body {
  email: string;
  password: string;
  adress: string;
  city: string;
  postcode: string;
  phone: number;
}
```

### Authorisation

```
/authorisation
```

```typescript
interface Body {
  sessionID: string;
}
```

### Pizza photo uploads

```
/upload/pizza
```

```
"Content-Type": "multipart/form-data"

pizzaphoto1: file
pizzaphoto2: file
```

### Sauce photo uploads

```
/upload/sauce
```

```
"Content-Type": "multipart/form-data"

saucephoto1: file
saucephoto2: file
```

### Add new pizza

```
/panel/add-pizza
```

```typescript
interface Body {
  name: string;
  ingredients: Array<string>;
  price: number;
  image: string;
}
```

### Add new sauce

```
/panel/add-sauce
```

```typescript
interface Body {
  name: string;
  description: string;
  price: number;
  image: string;
}
```

## GET

### Test GET

```
/test
```

### GET single pizza

```
/pizza/pizzaID
```

example:

```
/pizza/5f43a63dc9b80c60232471dc
```

### GET all pizzas

```
/pizzas
```

### GET single sauce

```
/sauce/sauceID
```

example:

```
/sauce/5f43a63dc9b80c60232471dc
```

### GET all sauces

```
/sauces
```

## DELETE

### Test

```
/test
```

```typescript
type body = {
  test: any;
};
```
