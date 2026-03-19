# Artefakt 03 - Cloud App Development

To repozytorium zawiera implementacje zadania 03:
- aplikacja React + Vite w `frontend/`
- co najmniej jeden widok (Page) wyswietlajacy liste danych
- komunikacja z API przez Axios i metode GET
- `VITE_API_URL` pobierany ze zmiennych srodowiskowych (bez hardcoded URL)
- frontend uruchamiany w Dockerze pod adresem `http://localhost:8080`

## Szybki start

```bash
cd frontend
npm install
npm run dev
```

## Docker

```bash
cd frontend
docker build -t artefakt03-frontend .
docker run --name artefakt03-frontend-container -p 8080:80 -d artefakt03-frontend
```

Po weryfikacji:

```bash
docker stop artefakt03-frontend-container
docker rm artefakt03-frontend-container
```

## Mapowanie na checkliste

- **3.1** React + Vite zainicjalizowany w `frontend/`
- **3.2** Widok z lista danych: `src/pages/TasksPage.tsx`
- **3.3** Axios GET i URL ze zmiennych: `src/services/api.ts`, `src/services/tasksService.ts`, `.env`
- **3.5** Dockerfile i uruchomienie aplikacji na `localhost:8080`: `frontend/Dockerfile`
- **Aktualizacja GitHub** dodaj i wypchnij projekt, a nastepnie dolacz screen komendy `git push` oraz README z URL GitHub
