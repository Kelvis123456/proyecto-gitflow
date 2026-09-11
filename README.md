# Proyecto Git Flow

Coursework project practicing the Git Flow branching model — `main`/`develop`/`feature/*`/`hotfix/*`/`qa` — on a small Express CRUD API. The branching workflow was the actual assignment; the app itself is intentionally simple.

## What's here

An in-memory (no database) REST API for a `users` resource:

- `POST /users` — add a user
- `GET /users` — list users
- `PUT /users/:index` — update a user by array index
- `DELETE /users/:index` — remove a user by array index

Data resets on every restart since it's just an array in memory — that's fine for what this was practicing.

## Running it

```bash
npm install
node index.js
```

Server listens on port 3000.

## Branches

This repo keeps its Git Flow history intact on purpose (`develop`, several `feature/*` branches, a `hotfix/*`, `qa`) rather than squashing it away, since the branching itself is the point of the exercise.
