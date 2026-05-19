# Rubik Duo

Rubik Duo is a mobile-first personal language-retention web app for saving Italian texts, extracting phrases, and practicing them with short interactive lessons.

## Local Run

```bash
python3 -m http.server 5173
```

Open:

```text
http://localhost:5173/index.html
```

## GitHub Pages Notes

This app is a static frontend: `index.html`, `styles.css`, `app.js`, `sw.js`, `manifest.json`, and `icon.svg`.

Do not publish local Google Cloud credential JSON files. Google Drive sync uses the public OAuth client ID in the browser, but the live GitHub Pages origin must be added to the OAuth client's authorized JavaScript origins before `Sync with Google` works on the published URL.

