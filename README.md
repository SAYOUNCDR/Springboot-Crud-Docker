# CRUD App (Dockerized)

This repository contains a Spring Boot backend and a React frontend. Docker and Docker Compose are used to build and run both services together with a PostgreSQL database.

Ports

- Backend: `http://localhost:8080`
- Frontend: `http://localhost:3000` (served by `nginx` in the container)

Quick start (Windows `cmd.exe`)

1. Ensure Docker Desktop is installed and running.
2. From the repo root (where `docker-compose.yml` is located), run:

```cmd
docker compose build
docker compose up
```

Or, if using the legacy CLI:

```cmd
docker-compose build
docker-compose up
```

Notes

- Environment variables are stored in `.env` at the repo root. Change them there if you need different credentials.
- The Postgres data is persisted in the Docker volume `postgres_data`.
- The backend `application.properties` reads Spring datasource values from environment variables, so the container will use the values from `.env`.

Troubleshooting

- If the backend fails to connect to Postgres, check logs:

```cmd
docker compose logs backend
```

- To drop and recreate the DB volume (destructive):

```cmd
docker compose down -v
docker compose up --build
```

Want changes?

- I can add a Kubernetes manifest, switch the frontend to use the React dev server for hot reload, or add automatic DB migrations. Tell me which you'd like next.
