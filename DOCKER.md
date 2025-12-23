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
- **Username**: Set via `MONGO_ROOT_USERNAME` env variable
- **Password**: Set via `MONGO_ROOT_PASSWORD` env variable
- **Database**: spotify-clone

### Connection String

```

```
