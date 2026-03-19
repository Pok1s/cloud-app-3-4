CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  description VARCHAR(500) NOT NULL DEFAULT '',
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO tasks (title, description, completed)
VALUES
  ('Skonfigurowac backend', 'Przygotowac strukture warstwowa API.', true),
  ('Dodac endpointy CRUD', 'Udostepnic GET/POST/PUT/DELETE dla Tasks.', false),
  ('Sprawdzic uruchomienie w Dockerze', 'Backend ma dzialac pod 8081.', false)
ON CONFLICT DO NOTHING;
