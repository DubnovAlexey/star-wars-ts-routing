<!--suppress MarkdownUnresolvedFileReference -->

# Star Wars

[English](#english) · [Русский](#russian) · [עברית](#hebrew) · [Español](#spanish) · [Français](#french)

<a name="english"></a>

## English

A fan site about Star Wars heroes in React and TypeScript: a home page with the opening crawl and the "dream team", a page about each hero with data from a Star Wars API, a page about the saga and a contact form with the list of planets.

**Live demo:** https://dubnovalexey.github.io/star-wars-ts-routing/

### Try it

Choose a hero in the dream team and compare the title and profile data. Open Contact to inspect the planet list; Submit shows a local demo response without sending a message.

### Features

- Pages with React Router: Home, About me (`/about me/:heroId`, ten heroes), Star Wars, Contact, and a 404 page.
- Hero and planet data are loaded from the course API (`sw-info-api.herokuapp.com`) and cached in `localStorage` for 30 days.
- The chosen hero is shared between components with React Context: the title, the photo and the "dream team" follow it.
- Every photo in the "dream team" opens that hero's page; the Millennium Falcon page shows ship data (model, crew, speed) instead of a person's.
- If the data server does not answer, the page shows a message instead of waiting forever.
- Styling with Tailwind CSS 4.

### Tech stack

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

### Implementation notes

- Routing with URL parameters and a fallback route.
- Typed components and API data in TypeScript.
- Caching API answers with an expiry time.
- Settings for static hosting: `HashRouter`, a relative `base`, and a prefix for `localStorage` keys, because multiple projects can share one domain.

### Run locally

```bash
npm install
npm run dev
```

### Checks

Use Node.js 22.12+ or 24+.

```bash
npm test
npm run lint
npm run build
```

Tests cover cache validation, unavailable storage, cancellation and the 12-second request timeout. The contact form is a local demonstration and does not send messages.

### Deploy

Every push to `main` or `master` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`). One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**.

### Further development

Proposals below are planned work, not existing features.

- Visual: add loading skeletons and compact mobile navigation; use one readable favicon for both Star Wars projects.
- Engineering: provide validated local fallback JSON with a visible source label, and test route changes while requests are pending.
- Features: add hero search and filters; connect a real contact destination only when its recipient is configured.

---

<a name="russian"></a>

## Русский

Фан-сайт о героях «Звёздных войн» на React и TypeScript. На главной — вступительные титры и «команда мечты». Есть страница о каждом герое с данными из API «Звёздных войн», страница о саге и форма связи со списком планет.

**Демо:** https://dubnovalexey.github.io/star-wars-ts-routing/

### Попробовать

Выберите героя в «команде мечты» и сравните заголовок и данные профиля. Откройте Contact со списком планет: Submit показывает локальный демо-ответ без отправки сообщения.

### Возможности

- Страницы на React Router: Home, About me (`/about me/:heroId`, десять героев), Star Wars, Contact и страница 404.
- Данные о героях и планетах загружаются из API курса (`sw-info-api.herokuapp.com`) и кешируются в `localStorage` на 30 дней.
- Выбранный герой передаётся между компонентами через React Context: за ним следуют заголовок, фото и «команда мечты».
- Каждое фото в «команде мечты» открывает страницу героя; у «Тысячелетнего сокола» показываются данные корабля (модель, экипаж, скорость), а не человека.
- Если сервер данных не отвечает, страница показывает сообщение, а не ждёт бесконечно.
- Оформление на Tailwind CSS 4.

### Стек

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

### Реализация

- Маршрутизация с параметрами в адресе и запасной маршрут.
- Типизированные компоненты и данные API на TypeScript.
- Кеширование ответов API со сроком годности.
- Настройки для статического хостинга: `HashRouter`, относительный `base` и префикс ключей `localStorage`, для изоляции данных проектов на общем домене.

### Как запустить

```bash
npm install
npm run dev
```

### Проверки

Node.js 22.12+ или 24+.

```bash
npm test
npm run lint
npm run build
```

Тесты проверяют кеш, недоступное хранилище, отмену и ограничение ожидания в 12 секунд. Форма связи демонстрационная и не отправляет сообщения.

### Публикация

Каждый пуш в `main` или `master` собирает сайт и публикует его на GitHub Pages (`.github/workflows/deploy.yml`). Один раз на GitHub: **Settings → Pages → Source: GitHub Actions**.

### Дальнейшее развитие

Ниже перечислены предложения, а не уже реализованные функции.

- Визуал: заглушки загрузки и компактная мобильная навигация; единый читаемый favicon для обеих версий Star Wars.
- Инженерия: проверенные локальные JSON-данные с указанием источника и тесты смены маршрута во время запроса.
- Функции: поиск и фильтры героев; реальную связь подключать только после настройки получателя.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

אתר מעריצים על גיבורי מלחמת הכוכבים ב-React וב-TypeScript: דף בית עם כתוביות הפתיחה ו"נבחרת החלומות", דף על כל גיבור עם נתונים מ-API של מלחמת הכוכבים, דף על הסאגה וטופס יצירת קשר עם רשימת כוכבי הלכת.

**הדגמה:** https://dubnovalexey.github.io/star-wars-ts-routing/

### מה כדאי לנסות

בחרו גיבור בצוות החלומות ובדקו את הכותרת ונתוני הפרופיל. פתחו Contact עם רשימת כוכבי הלכת; Submit מציג תגובת הדגמה מקומית ללא שליחת הודעה.

### יכולות

- דפים עם React Router: Home, About me (עשרה גיבורים), Star Wars, Contact ודף 404.
- נתוני הגיבורים וכוכבי הלכת נטענים מה-API של הקורס ונשמרים ב-`localStorage` ל-30 יום.
- הגיבור הנבחר משותף בין הרכיבים בעזרת React Context: הכותרת, התמונה ו"צוות החלומות" עוקבים אחריו.
- כל תמונה ב"צוות החלומות" פותחת את דף הגיבור; בדף של המילניום פלקון מוצגים נתוני החללית (דגם, צוות, מהירות) ולא של אדם.
- אם שרת הנתונים לא עונה, הדף מציג הודעה במקום להמתין בלי סוף.

### טכנולוגיות

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

### הרצה מקומית

```bash
npm install
npm run dev
```

### בדיקות

Node.js 22.12+ או 24+.

```bash
npm test
npm run lint
npm run build
```

הבדיקות מכסות אימות מטמון, אחסון שאינו זמין, ביטול והגבלת המתנה של 12 שניות. טופס יצירת הקשר הוא הדגמה מקומית ואינו שולח הודעות.

### המשך פיתוח

הסעיפים הבאים הם הצעות להמשך, לא יכולות שכבר יושמו.

- עיצוב: שלדי טעינה וניווט קומפקטי בטלפון; סמל לשונית קריא ומשותף לשתי גרסאות Star Wars.
- הנדסה: נתוני JSON מקומיים מאומתים עם ציון המקור ובדיקות מעבר מסלול בזמן בקשה פעילה.
- יכולות: חיפוש וסינון גיבורים; חיבור יעד אמיתי ליצירת קשר רק לאחר הגדרת הנמען.

</div>

---

<a name="spanish"></a>

## Español

Un sitio de fans sobre los héroes de «La guerra de las galaxias» en React y TypeScript. En la portada, los títulos de apertura y el «equipo soñado». Hay una página de cada héroe con datos de la API de Star Wars, una página sobre la saga y un formulario de contacto con la lista de planetas.

**Demo:** https://dubnovalexey.github.io/star-wars-ts-routing/

### Pruébelo

Elija un héroe del «equipo soñado» y compare el título y los datos del perfil. Abra Contact con la lista de planetas: Submit muestra una respuesta de demostración local sin enviar ningún mensaje.

### Funciones

- Páginas con React Router: Home, About me (`/about me/:heroId`, diez héroes), Star Wars, Contact y una página 404.
- Los datos de héroes y planetas se cargan de la API del curso (`sw-info-api.herokuapp.com`) y se guardan en caché en `localStorage` durante 30 días.
- El héroe elegido se comparte entre componentes mediante React Context: lo siguen el título, la foto y el «equipo soñado».
- Cada foto del «equipo soñado» abre la página del héroe; para el «Halcón Milenario» se muestran datos de nave (modelo, tripulación, velocidad), no de persona.
- Si el servidor de datos no responde, la página muestra un mensaje en lugar de esperar sin fin.
- Estilos con Tailwind CSS 4.

### Tecnologías

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

### Implementación

- Enrutado con parámetros en la dirección y una ruta de reserva.
- Componentes y datos de la API tipados en TypeScript.
- Caché de las respuestas de la API con fecha de caducidad.
- Ajustes para alojamiento estático: `HashRouter`, `base` relativo y un prefijo en las claves de `localStorage` para aislar los datos de los proyectos en un dominio compartido.

### Cómo ejecutarlo

```bash
npm install
npm run dev
```

### Comprobaciones

Node.js 22.12+ o 24+.

```bash
npm test
npm run lint
npm run build
```

Las pruebas comprueban la caché, el almacenamiento no disponible, la cancelación y el límite de espera de 12 segundos. El formulario de contacto es de demostración y no envía mensajes.

### Publicación

Cada push a `main` o `master` compila el sitio y lo publica en GitHub Pages (`.github/workflows/deploy.yml`). Una sola vez en GitHub: **Settings → Pages → Source: GitHub Actions**.

### Desarrollo futuro

Lo que sigue son propuestas, no funciones ya implementadas.

- Visual: marcadores de carga y una navegación móvil compacta; un mismo favicon legible para ambas versiones de Star Wars.
- Ingeniería: datos JSON locales verificados con indicación de la fuente y pruebas de cambio de ruta durante una petición.
- Funciones: búsqueda y filtros de héroes; un contacto real solo después de configurar el destinatario.

---

<a name="french"></a>

## Français

Un site de fans sur les héros de « La Guerre des étoiles » en React et TypeScript. Sur l'accueil, le générique d'ouverture et la « dream team ». Il y a une page pour chaque héros avec des données de l'API Star Wars, une page sur la saga et un formulaire de contact avec la liste des planètes.

**Démo :** https://dubnovalexey.github.io/star-wars-ts-routing/

### À essayer

Choisissez un héros dans la « dream team » et comparez le titre et les données du profil. Ouvrez Contact avec la liste des planètes : Submit affiche une réponse de démonstration locale sans envoyer de message.

### Fonctions

- Pages avec React Router : Home, About me (`/about me/:heroId`, dix héros), Star Wars, Contact et une page 404.
- Les données des héros et des planètes viennent de l'API du cours (`sw-info-api.herokuapp.com`) et sont mises en cache dans `localStorage` pendant 30 jours.
- Le héros choisi est partagé entre composants via React Context : le titre, la photo et la « dream team » le suivent.
- Chaque photo de la « dream team » ouvre la page du héros ; pour le « Faucon Millenium », ce sont les données d'un vaisseau (modèle, équipage, vitesse) qui s'affichent, pas celles d'une personne.
- Si le serveur de données ne répond pas, la page affiche un message au lieu d'attendre sans fin.
- Mise en forme avec Tailwind CSS 4.

### Technologies

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

### Réalisation

- Routage avec paramètres dans l'adresse et route de repli.
- Composants et données de l'API typés en TypeScript.
- Mise en cache des réponses de l'API avec date d'expiration.
- Réglages pour l'hébergement statique : `HashRouter`, `base` relatif et préfixe des clés `localStorage` pour isoler les données des projets sur un domaine commun.

### Lancer le projet

```bash
npm install
npm run dev
```

### Vérifications

Node.js 22.12+ ou 24+.

```bash
npm test
npm run lint
npm run build
```

Les tests vérifient le cache, le stockage indisponible, l'annulation et la limite d'attente de 12 secondes. Le formulaire de contact est une démonstration et n'envoie pas de messages.

### Publication

Chaque push sur `main` ou `master` compile le site et le publie sur GitHub Pages (`.github/workflows/deploy.yml`). Une seule fois sur GitHub : **Settings → Pages → Source: GitHub Actions**.

### Évolutions possibles

Ce qui suit sont des propositions, pas des fonctions déjà réalisées.

- Visuel : des espaces réservés pendant le chargement et une navigation mobile compacte ; un même favicon lisible pour les deux versions de Star Wars.
- Ingénierie : des données JSON locales vérifiées avec mention de la source et des tests de changement de route pendant une requête.
- Fonctions : recherche et filtres des héros ; un vrai contact seulement après avoir configuré le destinataire.
