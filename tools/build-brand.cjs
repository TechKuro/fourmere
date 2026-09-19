const fs = require('node:fs/promises');
const path = require('node:path');
// Development only: install sharp in your tooling environment, then run with Node.
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const mark = '<path d="M25 20h31v13h-4l-2-8H35v18h12l2-5h3v16h-3l-2-6H35v17h7v4H25v-4h4V24h-4z" fill="currentColor"/>';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 88"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1h78v86H1z"/><path d="M7 7h66v74H7z" opacity=".35"/></g>${mark}</svg>`;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="18" fill="#182b22"/><g transform="translate(8 4)" color="#f4f2ec">${mark}</g></svg>`;
async function run() {
 await fs.writeFile(path.join(root,'assets/fourmere-mark.svg'),svg);
 await fs.writeFile(path.join(root,'favicon.svg'),icon);
 for (const [size,name] of [[32,'favicon-32.png'],[180,'apple-touch-icon.png'],[192,'icon-192.png'],[512,'icon-512.png']]) await sharp(Buffer.from(icon)).resize(size,size).png().toFile(path.join(root,name));
 const pngs = await Promise.all([16,32,48].map(size=>sharp(Buffer.from(icon)).resize(size,size).png().toBuffer()));
 const header=Buffer.alloc(6+16*pngs.length);header.writeUInt16LE(1,2);header.writeUInt16LE(pngs.length,4);let offset=header.length;
 pngs.forEach((png,i)=>{let p=6+i*16;header[p]=[16,32,48][i];header[p+1]=header[p];header.writeUInt16LE(1,p+4);header.writeUInt16LE(32,p+6);header.writeUInt32LE(png.length,p+8);header.writeUInt32LE(offset,p+12);offset+=png.length;});
 await fs.writeFile(path.join(root,'favicon.ico'),Buffer.concat([header,...pngs]));
 const social=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f4f2ec"/><rect x="840" width="360" height="630" fill="#182b22"/><path d="M64 530h712" stroke="#cfcec5"/><g transform="translate(902 170) scale(3)" color="#b4c6b6">${svg.replace(/<svg[^>]*>|<\/svg>/g,'')}</g><text x="64" y="118" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="7" fill="#182b22">FOURMERE</text><text x="60" y="265" font-family="Georgia, serif" font-size="66" fill="#171a18">Focused retail.</text><text x="60" y="343" font-family="Georgia, serif" font-size="66" font-style="italic" fill="#506859">Considered selection.</text><text x="64" y="420" font-family="Arial, sans-serif" font-size="23" fill="#303633">UK specialist retailer</text><text x="64" y="574" font-family="Arial, sans-serif" font-size="21" fill="#506859">fourmere.co.uk</text></svg>`;
 await fs.writeFile(path.join(root,'assets/fourmere-share.svg'),social);
 await sharp(Buffer.from(social)).png().toFile(path.join(root,'assets/fourmere-share.png'));
}
run();
