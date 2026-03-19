# Frontend (Artefakt 03)

Aplikacja React + Vite z jednym widokiem, ktory pobiera i wyswietla liste zadan z API przy uzyciu Axios GET.

## Srodowisko

Utworz plik `.env` w `frontend/`:

```bash
VITE_API_URL=http://localhost:8081
```

W kodzie zrodlowym nie ma hardcoded URL do backendu.

## Uruchomienie lokalne

```bash
npm install
npm run mock-api
npm run dev
```

## Build produkcyjny

```bash
npm run build
```

## Uruchomienie Docker (wymagane w zadaniu)

```bash
docker build -t artefakt03-frontend .
docker run --name artefakt03-frontend-container -p 8080:80 -d artefakt03-frontend
```

Adres aplikacji: `http://localhost:8080`
