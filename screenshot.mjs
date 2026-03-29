/**
 * Usage: node screenshot.mjs <url> [label]
 * Saves to ./temporary screenshots/screenshot-N[-label].png
 */
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load puppeteer from its install location
const require = createRequire('file:///C:/Users/morri/AppData/Local/Temp/puppeteer-test/');
const puppeteer = require('puppeteer');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Resolve output dir
const outDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Auto-increment N
const existing = fs.readdirSync(outDir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] ?? 0)).filter(n => !isNaN(n));
const next = (nums.length ? Math.max(...nums) : 0) + 1;
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = path.join(outDir, filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:/Users/morri/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();

  console.log(`Saved: ${outPath}`);
})().catch(err => { console.error(err); process.exit(1); });
