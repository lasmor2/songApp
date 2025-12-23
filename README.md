# Spotify Clone API

A RESTful API built with NestJS and MongoDB for managing songs and albums, inspired by Spotify's core functionality.

## 🚀 Features

- **Songs Management**: Create, read, update, and delete songs
- **Albums Management**: Organize songs into albums
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **Docker Support**: Containerized MongoDB setup
- **Validation**: Input validation with class-validator
- **TypeScript**: Full TypeScript support for type safety

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Validation**: class-validator, class-transformer
- **Containerization**: Docker & Docker Compose
- **Testing**: Jest

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker Desktop (for MongoDB)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd project-mongodb
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

4. **Configure your `.env` file**
```env
# MongoDB Configuration
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=your_password_here
MONGO_DATABASE=spotify-clone
MONGO_PORT=27017

# Application Configuration
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://admin:your_password_here@localhost:27017/spotify-clone?authSource=admin
```

## 🐳 Database Setup

### Using Docker (Recommended)

1. **Start MongoDB container**
```bash
docker-compose up -d
```

2. **Stop MongoDB container**
```bash
docker-compose down
```

### Manual MongoDB Installation

If you prefer to install MongoDB manually, ensure it's running on `localhost:27017`.

## 🚀 Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

The API will be available at `http://localhost:3000`

## 📚 API Endpoints

### Songs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/songs` | Get all songs |
| GET | `/songs/:id` | Get song by ID |
| POST | `/songs` | Create new song |
| PUT | `/songs/:id` | Update song |
| DELETE | `/songs/:id` | Delete song |

### Albums

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/albums` | Get all albums |
| GET | `/albums/:id` | Get album by ID |
| POST | `/albums` | Create new album |
| PUT | `/albums/:id` | Update album |
| DELETE | `/albums/:id` | Delete album |

## 📝 Data Models

### Song Schema
```typescript
{
  title: string;           // Required
  releasedDate: Date;      // Required
  duration: string;        // Required (e.g., "3:45")
  lyrics: string;          // Required
  album: ObjectId;         // Required (reference to Album)
}
```

### Album Schema
```typescript
{
  title: string;           // Required
  songs: ObjectId[];       // Array of Song references
}
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Watch mode
npm run test:watch
```

## 🔍 Code Quality

```bash
# Linting
npm run lint

# Formatting
npm run format
```

## 📁 Project Structure

```
src/
├── albums/
│   ├── dto/
│   │   └── create-album-dto.ts
│   ├── schemas/
│   │   └── albums.ts
│   ├── albums.controller.ts
│   ├── albums.service.ts
│   └── albums.module.ts
├── songs/
│   ├── dto/
│   │   ├── create-song-dto.ts
│   │   └── update-song-dto.ts
│   ├── schemas/
│   │   └── songs.ts
│   ├── songs.controller.ts
│   ├── songs.service.ts
│   └── songs.module.ts
├── common/
│   └── pipes/
│       └── parse-object-id.pipe.ts
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts
```

## 🔧 Configuration

The application uses NestJS ConfigModule for environment configuration. Key configurations:

- **MongoDB URI**: Configured via `MONGODB_URI` environment variable
- **Port**: Application runs on port specified in `PORT` env variable (default: 3000)
- **Database**: Uses `spotify-clone` database by default

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure Docker container is running: `docker ps`
   - Check environment variables in `.env` file
   - Verify MongoDB URI format

2. **Port Already in Use**
   - Change the `PORT` in `.env` file
   - Kill process using the port: `npx kill-port 3000`

3. **Docker Issues**
   - Restart Docker Desktop
   - Remove containers: `docker-compose down -v`
   - Rebuild: `docker-compose up -d --build`

## 📄 License

This project is [MIT licensed](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.