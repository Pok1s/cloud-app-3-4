# Cloud App - Artefakt 03 i 04

Repozytorium zawiera dwa elementy projektu:
- `frontend/` - React + Vite (Artefakt 03)
- `backend/` - REST API CRUD + baza danych Postgres (Artefakt 04)

## Artefakt 03 (frontend)

- React + Vite uruchomiony w `frontend/`
- widok listy danych (`src/pages/TasksPage.tsx`)
- komunikacja Axios GET przez `VITE_API_URL`
- Dockerfile i uruchomienie frontu pod `http://localhost:8080`

## Artefakt 04 (backend)

- REST API z 5 endpointami CRUD dla encji `Task`
- walidacja danych i obsluga bledow HTTP
- polaczenie z baza Postgres w osobnym kontenerze
- backend dostepny pod `http://localhost:8081`
- architektura warstwowa:
  - `Controllers/`
  - `Services/`
  - `Repositories/`
  - `Models/`
  - `DTOs/`

## Uruchomienie backendu i bazy (Docker)

```bash
docker compose up -d --build
```

Test API:

```bash
curl http://localhost:8081/tasks
```

Zatrzymanie:

```bash
docker compose down
```
