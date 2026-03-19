# Backend (Artefakt 04)

Backend API zostal przygotowany w architekturze warstwowej:
- `Controllers/` - obsluga endpointow
- `Services/` - logika biznesowa
- `Repositories/` - operacje na bazie danych
- `Models/` - mapowanie encji
- `DTOs/` - walidacja danych wejsciowych

## Endpointy CRUD (encja Task)

- `GET /tasks` - lista zadan
- `GET /tasks/:id` - szczegoly zadania
- `POST /tasks` - dodanie zadania
- `PUT /tasks/:id` - edycja zadania
- `DELETE /tasks/:id` - usuniecie zadania

## Uruchomienie przez Docker

Z poziomu katalogu glownego projektu:

```bash
docker compose up -d --build
```

Backend bedzie dostepny pod adresem:

`http://localhost:8081`

Szybki test:

```bash
curl http://localhost:8081/tasks
```
