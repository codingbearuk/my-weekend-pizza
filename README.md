# Run the project

- [x] create .env file from template,
- [x] run command npm install,
- [x] npm run dev,

# API Routes

## POST

### Test

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

pizzaphoto: file
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

## GET

### Test

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
