import fs from 'fs';

let indexHtml = fs.readFileSync('index.html', 'utf-8');
let productsHtml = fs.readFileSync('products.html', 'utf-8');

const navReplacement = `<ul class="dropdown-menu">
            <li><a href="wall-tiles.html">Wall Tiles</a></li>
            <li><a href="floor-tiles.html">Floor Tiles</a></li>
            <li><a href="polished-porcelain.html">Porcelain Tiles</a></li>
            <li><a href="slab-tiles.html">Slab Tiles</a></li>
            <li><a href="parking-tiles.html">Parking Tiles</a></li>
            <li><a href="sanitary-wares.html">Sanitary Wares</a></li>
            <li><a href="wood-strip.html">Wood Strip Tiles</a></li>
            <li><a href="step-riser.html">Step & Riser</a></li>
          </ul>`;

// Replace dropdowns
indexHtml = indexHtml.replace(/<ul class="dropdown-menu">[\s\S]*?<\/ul>/, navReplacement);
productsHtml = productsHtml.replace(/<ul class="dropdown-menu">[\s\S]*?<\/ul>/, navReplacement);

// Replace product card clicks
const cardMap = [
  { title: 'Wall Tiles (Ceramic)', link: 'wall-tiles.html' },
  { title: 'Floor Tiles (Porcelain)', link: 'floor-tiles.html' },
  { title: 'Polished Porcelain Tiles', link: 'polished-porcelain.html' },
  { title: 'Slab Tiles', link: 'slab-tiles.html' },
  { title: 'Heavy Duty Parking Tiles', link: 'parking-tiles.html' },
  { title: 'Sanitary Wares & Wash Basins', link: 'sanitary-wares.html' },
  { title: 'Wood Strip (Porcelain)', link: 'wood-strip.html' },
  { title: 'Step & Riser Tiles', link: 'step-riser.html' }
];

cardMap.forEach(card => {
  const regex = new RegExp(`<div class="product-card" title="${card.title.replace(/([()&])/g, '\\$1')}">`, 'g');
  indexHtml = indexHtml.replace(regex, `<div class="product-card" title="${card.title}" onclick="location.href='${card.link}'" style="cursor: pointer;">`);
  productsHtml = productsHtml.replace(regex, `<div class="product-card" title="${card.title}" onclick="location.href='${card.link}'" style="cursor: pointer;">`);
});

fs.writeFileSync('index.html', indexHtml);
fs.writeFileSync('products.html', productsHtml);
console.log('Updated index.html and products.html');
