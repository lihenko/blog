// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

// Продакшн режим
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

// Використовуємо порт, який надає хостинг
const PORT = process.env.PORT || 3000;

// Перевіряємо наявність build
const NEXT_DIR = path.join(__dirname, ".next");
if (!fs.existsSync(NEXT_DIR)) {
  console.error(
    "⚠ Could not find .next folder. Спочатку зробіть 'npm run build'."
  );
  process.exit(1);
}

// Підготовка Next.js
app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(PORT, () => {
    console.log(`✅ Next.js app listening on port ${PORT}`);
  });

  server.on("error", (err) => {
    console.error("❌ Server error:", err);
  });
});