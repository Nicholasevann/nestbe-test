# 🏠 NestJS Real Estate API Tutorial

A comprehensive NestJS backend tutorial project for a real estate platform, featuring authentication, user roles, property management, and robust best practices with TypeORM and PostgreSQL.

---

## Features

- **User Authentication** (JWT, refresh tokens)
- **Role-based Authorization** (Admin, User)
- **User Management** (CRUD)
- **Property Management** (CRUD, property types, features)
- **Seeding & Factories** for test data
- **Validation** with class-validator
- **Guards & Decorators** for secure endpoints
- **Environment Configuration** with `.env` and `@nestjs/config`
- **PostgreSQL** with TypeORM

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nestjs-real-estate-tutorial.git
cd nestjs-real-estate-tutorial
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL=postgres://username:password@localhost:5432/yourdb
JWT_SECRET=your_jwt_secret
REFRESH_JWT_SECRET=your_refresh_jwt_secret
NODE_ENV=development
```

### 4. Run Database Migrations & Seeders

```bash
npm run migration:run
npm run seed
```

### 5. Start the Application

```bash
npm run start:dev
```

---

## API Endpoints

### Auth

- `POST /auth/login` — Login and receive JWT tokens
- `POST /auth/refresh` — Refresh JWT tokens

### Users

- `POST /user` — Register a new user
- `GET /user/profile` — Get current user profile (JWT required)
- `PATCH /user/:id` — Update user (JWT required)
- `DELETE /user/:id` — Delete user (Admin only)

### Properties

- `GET /property` — List properties
- `GET /property/:id` — Get property details
- `POST /property` — Create property (JWT required)
- `PATCH /property/:id` — Update property (JWT required)
- `DELETE /property/:id` — Delete property (JWT required)

---

## Project Structure

```
src/
  ├── auth/
  ├── user/
  ├── property/
  ├── seeding/
  ├── entities/
  ├── config/
  └── main.ts
```

---

## Useful Commands

- `npm run start:dev` — Start in development mode
- `npm run migration:run` — Run database migrations
- `npm run seed` — Seed the database with test data
- `npm run test` — Run tests

---

## License

MIT

---

## Credits

Built with [NestJS](https://nestjs.com/), [TypeORM](https://typeorm.io/), and [PostgreSQL](https://www.postgresql.org/).
