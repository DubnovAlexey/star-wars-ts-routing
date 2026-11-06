# Star Wars

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

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
