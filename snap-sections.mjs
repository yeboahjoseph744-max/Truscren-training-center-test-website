import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.join(__dirname, 'temporary screenshots') + '/';

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/user/.cache/puppeteer/chrome/win64-149.0.7827.22/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });

await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('shown'));
  document.documentElement.style.scrollBehavior = 'auto';
});
await new Promise(r => setTimeout(r, 600));

async function snapSection(sectionId, filename) {
  // Get absolute top of element
  const offsetTop = await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    let top = 0;
    let node = el;
    while (node) { top += node.offsetTop || 0; node = node.offsetParent; }
    return Math.max(0, top - 72);
  }, sectionId);

  // Scroll via CDP for reliable positioning
  await page.evaluate((y) => { window.scrollTo(0, y); }, offsetTop);
  await new Promise(r => setTimeout(r, 700));

  const actualY = await page.evaluate(() => window.scrollY);
  console.log(`  scrollY=${actualY} (target=${offsetTop})`);

  // Screenshot without clip — captures current viewport
  await page.screenshot({ path: base + filename });
  console.log('✓', filename);
}

await snapSection('about',        'sec-about.png');
await snapSection('courses',      'sec-courses.png');
await snapSection('why',          'sec-why.png');
await snapSection('testimonials', 'sec-testi.png');
await snapSection('locations',    'sec-locations.png');
await snapSection('enroll',       'sec-cta.png');

await browser.close();
console.log('All done.');
