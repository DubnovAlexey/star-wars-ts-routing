# Star Wars

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

A fan site about Star Wars heroes in React and TypeScript: a home page with the opening crawl and the "dream team", a page about each hero with data from a Star Wars API, a page about the saga and a contact form with the list of planets.

**Live demo:** https://dubnovalexey.github.io/star-wars-ts-routing/

## Features

- Pages with React Router: Home, About me (`/about me/:heroId`, ten heroes), Star Wars, Contact, and a 404 page.
- Hero and planet data are loaded from the course API (`sw-info-api.herokuapp.com`) and cached in `localStorage` for 30 days.
- The chosen hero is shared between components with React Context.
- If the data server does not answer, the page shows a message instead of waiting forever.
- Styling with Tailwind CSS 4.

## Tech stack

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

## What I practised

- Routing with URL parameters and a fallback route.
- Typed components and API data in TypeScript.
- Caching API answers with an expiry time.
- Settings for static hosting: `HashRouter`, a relative `base`, and a prefix for `localStorage` keys, because all my projects share one domain.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`). One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**.

## Roadmap

- Spare JSON data inside the project, in case the course API goes offline.
- Clickable friends in the gallery that open their pages.
- Loading skeletons and a mobile menu.
