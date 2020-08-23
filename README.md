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

#### POST body structure

```typescript
type body = {
  test: any;
};
```

### Login

```
/login
```

#### POST body structure

```typescript
type body = {
  email: string;
  password: string;
};
```

### Register

```
/register
```

#### POST body structure

```typescript
type body = {
  email: string;
  password: string;
  adress: string;
  city: string;
  postcode: string;
  phone: number;
};
```

### Authorisation

```
/authorisation
```

#### POST body structure

```typescript
type body = {
  sessionID: string;
};
```

## GET

### Test

```
/test
```

## DELETE

### Test

```
/test
```

#### DELETE body structure

```typescript
type body = {
  test: any;
};
```
