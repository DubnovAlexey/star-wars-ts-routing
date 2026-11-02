<div dir="rtl">

# Star Wars

[English](README.md) · **עברית** · [Русский](README.ru.md)

אתר מעריצים על גיבורי מלחמת הכוכבים ב-React וב-TypeScript: דף בית עם כתוביות הפתיחה ו"נבחרת החלומות", דף על כל גיבור עם נתונים מ-API של מלחמת הכוכבים, דף על הסאגה וטופס יצירת קשר עם רשימת כוכבי הלכת.

**הדגמה:** https://dubnovalexey.github.io/star-wars-ts-routing/

## יכולות

- דפים עם React Router: Home, About me (עשרה גיבורים), Star Wars, Contact ודף 404.
- נתוני הגיבורים וכוכבי הלכת נטענים מה-API של הקורס ונשמרים ב-`localStorage` ל-30 יום.
- הגיבור הנבחר משותף בין הרכיבים בעזרת React Context: הכותרת, התמונה ו"צוות החלומות" עוקבים אחריו.
- כל תמונה ב"צוות החלומות" פותחת את דף הגיבור; בדף של המילניום פלקון מוצגים נתוני החללית (דגם, צוות, מהירות) ולא של אדם.
- אם שרת הנתונים לא עונה, הדף מציג הודעה במקום להמתין בלי סוף.

## טכנולוגיות

React 19 · TypeScript · React Router · Context API · Tailwind CSS · Vite · GitHub Actions · GitHub Pages

## הרצה מקומית

```bash
npm install
npm run dev
```

</div>
