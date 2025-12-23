# Docker Setup

## MongoDB with Docker Compose

This project uses Docker Compose to run MongoDB locally.

### Prerequisites
- Docker Desktop installed
- Docker Compose available

### Setup

1. Copy environment variables:
```bash
cp .env.example .env
```

2. Update `.env` with your preferred values

3. Start MongoDB:
```bash
docker-compose up -d
```

4. Stop MongoDB:
```bash
docker-compose down
```

### MongoDB Connection
- **Host**: localhost
- **Port**: 27017
- **Username**: admin (or your MONGO_ROOT_USERNAME)
- **Password**: password123 (or your MONGO_ROOT_PASSWORD)
- **Database**: spotify-clone

### Connection String
```
mongodb://admin:password123@localhost:27017/spotify-clone?authSource=admin
```