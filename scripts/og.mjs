// Regenerate public/og.png (1200x630): `npm run og`. Edit NAME / STATEMENT below first.
// renders with a system sans; fonts are not embedded, swap in an HTML-to-image tool if you want Newsreader exactly
import sharp from 'sharp';

const NAME = 'Ioana Frîncu';
const STATEMENT =
  'I run coding agents on real hardware at imec and study whether what we measure about them holds up: eval awareness, benchmark contamination, and what a score really tells you.';

const wrap = (s, n) => s.split(' ').reduce((l, w) => {
  const last = l[l.length - 1];
  last !== undefined && (last + ' ' + w).length <= n ? (l[l.length - 1] = last + ' ' + w) : l.push(w);
  return l;
}, []);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const lines = wrap(STATEMENT, 52)
  .map((t, i) => `<text x="80" y="${290 + i * 52}" font-size="38" fill="#2E2A33">${esc(t)}</text>`)
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#FFF4EF"/>
  <rect x="80" y="82" width="64" height="4" fill="#E8743B"/>
  <text x="80" y="190" font-size="84" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" fill="#2E2A33">${esc(NAME)}</text>
  <g font-family="DejaVu Sans, Helvetica, Arial, sans-serif">${lines}</g>
  <text x="80" y="570" font-size="24" font-family="DejaVu Sans Mono, Menlo, monospace" fill="#665A62">flifenstein.github.io</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('wrote public/og.png');
