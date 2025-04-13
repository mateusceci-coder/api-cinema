# API Cinema

A RESTful API for managing cinema operations built with Node.js, Express, TypeScript, and PostgreSQL.

## 🚀 Technologies

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/) for testing

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/api-cinema.git
cd api-cinema
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgres://postgres:password@localhost:5432/cinema"
```

## 🚀 Running the Application

### Using Docker (Recommended)

1. Build and start the containers:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`

### Running Locally

1. Start the PostgreSQL database:

```bash
docker-compose up db
```

2. Run database migrations:

```bash
npx prisma migrate dev
```

3. Start the development server:

```bash
npm start
```

## 🧪 Running Tests

```bash
npm test
```

## 📦 Project Structure

```
api-cinema/
├── src/              # Source code
├── prisma/           # Database schema and migrations
├── dist/             # Compiled JavaScript files
├── docker-compose.yml # Docker configuration
├── Dockerfile        # Docker build instructions
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## 🔄 API Endpoints

[Add your API endpoints documentation here]

## 📝 License

This project is licensed under the ISC License.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
