import fs from 'fs';

const pages = [
  {
    filename: 'wall-tiles.html',
    title: 'Wall Tiles (Ceramic)',
    desc: 'Premium ceramic wall tiles for modern interiors by Morbi Tiles. Elevate your living spaces with moisture-resistant, easy-to-clean ceramic wall tiles.',
    keywords: 'ceramic wall tiles, morbi wall tiles, bathroom tiles, kitchen backsplash, moisture resistant tiles, decorative wall tiles, digital print tiles',
    bg: '#1e3a8a',
    image: '/assets/wall-tiles.png',
    price: 'Starting from ₹35 / sq.ft',
    content: 'Elevate your living spaces with our stunning collection of Ceramic Wall Tiles. Perfect for bathrooms, kitchens, and feature walls, these tiles offer exceptional moisture resistance and are easy to clean.',
    features: ['High Durability', 'Water Resistant', 'Easy to Clean', 'Variety of Designs'],
    article: `
      <h3>Why Choose Ceramic Wall Tiles?</h3>
      <p>Ceramic wall tiles from Morbi are renowned for their incredible versatility and durability. Whether you are redesigning a cozy kitchen backsplash or creating a spa-like bathroom retreat, ceramic tiles offer a protective, water-resistant barrier that is virtually maintenance-free.</p>
      
      <h3>Endless Design Possibilities</h3>
      <p>Our collection features everything from classic subway tiles to intricate mosaic patterns and large-format digital prints. With advancements in digital printing technology, we can replicate the look of natural stone, wood, and concrete, giving you premium aesthetics without the hefty price tag.</p>
      
      <h3>Installation and Care</h3>
      <p>Ceramic is lightweight and relatively easy to cut, making the installation process faster and more cost-effective. To maintain their luster, simply wipe them down with a damp cloth and mild detergent. The non-porous glazed surface ensures that stains and bacteria do not penetrate the tile.</p>
    `
  },
  {
    filename: 'floor-tiles.html',
    title: 'Floor Tiles (Porcelain)',
    desc: 'Durable and stylish porcelain floor tiles by Morbi Tiles. Discover high load capacity, scratch-resistant porcelain tiles for heavy traffic areas.',
    keywords: 'porcelain floor tiles, morbi floor tiles, durable flooring, heavy traffic tiles, matte floor tiles, glossy floor tiles, scratch resistant tiles',
    bg: '#3b82f6',
    image: '/assets/floor-tiles.png',
    price: 'Starting from ₹45 / sq.ft',
    content: 'Our Porcelain Floor Tiles are designed for heavy traffic areas, combining beauty with unmatched durability. Available in matte, glossy, and textured finishes to suit any architectural style.',
    features: ['Scratch Resistant', 'High Load Capacity', 'Low Maintenance', 'Frost Resistant'],
    article: `
      <h3>The Strength of Porcelain</h3>
      <p>When it comes to flooring, porcelain is the gold standard. Fired at extremely high temperatures, porcelain tiles are incredibly dense and less porous than standard ceramic. This makes them highly resistant to moisture, stains, and severe impacts—perfect for busy households and commercial showrooms alike.</p>
      
      <h3>Versatility for Any Room</h3>
      <p>From the living room to the patio, porcelain floor tiles provide a seamless transition between indoor and outdoor spaces. We offer a variety of finishes, including matte for slip resistance in wet areas and high-gloss for a luxurious, reflective look in living areas.</p>
      
      <h3>A Long-Term Investment</h3>
      <p>While the initial cost may be slightly higher than standard ceramics, porcelain floor tiles are a long-term investment. They do not fade under UV light, are highly resistant to scratching from furniture or pets, and can withstand decades of heavy foot traffic without losing their original charm.</p>
    `
  },
  {
    filename: 'polished-porcelain.html',
    title: 'Polished Porcelain Tiles',
    desc: 'Achieve a luxurious, mirror-like finish with Polished Porcelain Tiles from Morbi. Nano-polished, stain-resistant tiles for elegant spaces.',
    keywords: 'polished porcelain tiles, high gloss tiles, morbi polished tiles, luxury floor tiles, nano polished tiles, stain resistant porcelain, hotel lobby tiles',
    bg: '#2563eb',
    image: '/assets/polished-porcelain.png',
    price: 'Starting from ₹60 / sq.ft',
    content: 'Achieve a seamless, mirror-like finish with our Polished Porcelain Tiles. The nano-polished surface not only enhances the aesthetic appeal but also prevents stain absorption.',
    features: ['Mirror Finish', 'Stain Resistant', 'Large Formats', 'Luxurious Look'],
    article: `
      <h3>Unmatched Elegance</h3>
      <p>Polished porcelain tiles are the epitome of modern luxury. The mechanical polishing process removes microscopic surface imperfections, resulting in a brilliant, mirror-like shine that reflects light and makes any room feel significantly larger and more inviting.</p>
      
      <h3>Nano-Technology Protection</h3>
      <p>One historical drawback of polished porcelain was its susceptibility to staining, as the polishing process opened up microscopic pores. However, our tiles undergo a state-of-the-art nano-coating process. This microscopic sealant fills any pores, rendering the surface completely impervious to spills and stains.</p>
      
      <h3>Ideal Applications</h3>
      <p>These tiles are highly sought after for hotel lobbies, luxury retail spaces, and upscale residential living areas. Because of their smooth surface, they are incredibly easy to sweep and mop, ensuring your space always looks pristine.</p>
    `
  },
  {
    filename: 'slab-tiles.html',
    title: 'Slab Tiles',
    desc: 'Transform your space with Large Format Slab Tiles by Morbi Tiles. Create seamless architectural designs with minimal grout lines for floors and countertops.',
    keywords: 'slab tiles, large format tiles, seamless floor tiles, morbi slab tiles, porcelain slabs, kitchen countertop tiles, large porcelain tiles',
    bg: '#1d4ed8',
    image: '/assets/slab-tiles.png',
    price: 'Starting from ₹85 / sq.ft',
    content: 'Create breathtaking, continuous surfaces with our Large Format Slab Tiles. Ideal for expansive floors, kitchen countertops, and grand commercial spaces, minimizing grout lines for a clean look.',
    features: ['Minimal Grout Lines', 'Versatile Application', 'Grand Aesthetic', 'Easy Installation'],
    article: `
      <h3>The Big Trend in Architecture</h3>
      <p>Large format slab tiles (such as 1200x2400mm and beyond) are revolutionizing interior design. By drastically reducing the number of grout lines, these massive tiles create a continuous, uninterrupted surface that offers a sleek, contemporary, and highly expansive aesthetic.</p>
      
      <h3>Beyond Just Flooring</h3>
      <p>Slab tiles are no longer just for floors. Because of their size and durability, they are increasingly being used as kitchen countertops, bathroom vanities, and dramatic feature walls. They offer the luxurious look of natural marble or granite slabs but with the superior stain and heat resistance of porcelain.</p>
      
      <h3>Installation Precision</h3>
      <p>Installing slab tiles requires specialized equipment and experienced professionals. However, the result is well worth the effort. The minimal grout lines not only look better but also reduce the areas where dirt and grime can accumulate, making maintenance a breeze.</p>
    `
  },
  {
    filename: 'parking-tiles.html',
    title: 'Heavy Duty Parking Tiles',
    desc: 'Tough, anti-skid parking tiles from Morbi Tiles designed for high-stress areas. Perfect for driveways, garages, and commercial outdoor spaces.',
    keywords: 'parking tiles, heavy duty tiles, outdoor tiles, anti-skid tiles, driveway tiles, morbi parking tiles, frost proof outdoor tiles, weather resistant flooring',
    bg: '#4338ca',
    image: '/assets/parking-tiles.png',
    price: 'Starting from ₹40 / sq.ft',
    content: 'Built to withstand extreme weights and harsh outdoor conditions, our Heavy Duty Parking Tiles are the perfect solution for driveways, garages, and commercial parking lots.',
    features: ['High Breaking Strength', 'Anti-Skid Surface', 'Weather Proof', 'Heavy Load Bearing'],
    article: `
      <h3>Engineered for Extremes</h3>
      <p>Parking areas demand flooring that can take a beating. Our heavy-duty parking tiles are engineered with a significantly higher thickness (typically 12mm to 15mm) and a specialized body composition that provides immense breaking strength, easily supporting the weight of cars and commercial vehicles.</p>
      
      <h3>Safety First with Anti-Skid Surfaces</h3>
      <p>Safety is paramount in driveways and garages. These tiles feature deeply textured, anti-skid surfaces that provide excellent grip for both vehicle tires and pedestrians, even during heavy rain or oil spills.</p>
      
      <h3>Weather and Chemical Resistance</h3>
      <p>Designed for the outdoors, these tiles are completely frost-proof and UV resistant. Furthermore, they are highly resistant to automotive fluids like motor oil, brake fluid, and antifreeze, ensuring that accidental spills can be hosed off without leaving permanent stains.</p>
    `
  },
  {
    filename: 'sanitary-wares.html',
    title: 'Sanitary Wares & Wash Basins',
    desc: 'Elegant and hygienic sanitary wares and wash basins by Morbi Tiles. Featuring anti-bacterial glaze and modern ergonomic designs.',
    keywords: 'sanitary wares, wash basins, morbi sanitary ware, water closets, bathroom fixtures, anti-bacterial glaze, modern toilets, ceramic wash basin',
    bg: '#312e81',
    image: '/assets/sanitary-wares.png',
    price: 'Starting from ₹1500 / unit',
    content: 'Complete your bathroom design with our exquisite range of Sanitary Wares and Wash Basins. Combining ergonomic design with superior hygiene features like anti-bacterial glazing.',
    features: ['Anti-Bacterial Glaze', 'Ergonomic Design', 'Water Saving', 'Easy to Clean'],
    article: `
      <h3>Combining Form and Function</h3>
      <p>A bathroom should be a sanctuary of cleanliness and comfort. Our range of sanitary wares, including water closets and wash basins, are designed with modern ergonomics in mind. They feature sleek, rimless designs that not only look contemporary but also eliminate hidden crevices where bacteria can hide.</p>
      
      <h3>Advanced Hygiene Technology</h3>
      <p>Hygiene is our top priority. Our ceramics are treated with an advanced anti-bacterial glaze fired at high temperatures. This ultra-smooth finish prevents the buildup of limescale and waste, making cleaning incredibly easy and reducing the need for harsh chemical cleaners.</p>
      
      <h3>Eco-Friendly Water Solutions</h3>
      <p>We are committed to sustainability. Our modern water closets feature dual-flush technology and optimized bowl designs that provide a powerful, efficient flush while significantly reducing water consumption compared to traditional models.</p>
    `
  },
  {
    filename: 'wood-strip.html',
    title: 'Wood Strip (Porcelain)',
    desc: 'The warmth of natural wood with the durability of porcelain. Morbi Wood Strip Tiles offer a waterproof, termite-proof hardwood alternative.',
    keywords: 'wood strip tiles, wooden floor tiles, porcelain wood look, waterproof wood flooring, morbi wooden tiles, timber look tiles, hardwood alternative',
    bg: '#8b5cf6',
    image: '/assets/wood-strip.png',
    price: 'Starting from ₹55 / sq.ft',
    content: 'Enjoy the natural, rustic charm of hardwood without the maintenance. Our Wood Strip Porcelain Tiles replicate the texture and grain of real wood while offering total water resistance.',
    features: ['Natural Wood Look', 'Zero Maintenance', 'Waterproof', 'Termite Proof'],
    article: `
      <h3>The Beauty of Nature, Perfected</h3>
      <p>Wood strip porcelain tiles are the perfect compromise for those who love the warm, inviting aesthetic of natural hardwood but require a more durable, practical flooring solution. Using high-definition digital printing and textured molds, we meticulously recreate the knots, grain, and subtle color variations of real timber.</p>
      
      <h3>Why Choose Porcelain Wood over Hardwood?</h3>
      <p>Unlike natural wood, porcelain wood strips are completely impervious to water, making them suitable for bathrooms, kitchens, and basements where real wood would warp or rot. They are also 100% termite-proof and highly resistant to scratches from pets and heavy furniture.</p>
      
      <h3>Versatile Design Options</h3>
      <p>Available in various lengths and widths, these tiles can be laid out in traditional straight patterns, elegant herringbones, or intricate chevrons. They offer the timeless appeal of wood flooring with the zero-stress maintenance of ceramic tile.</p>
    `
  },
  {
    filename: 'step-riser.html',
    title: 'Step & Riser Tiles',
    desc: 'Safe and stylish staircase step and riser tiles by Morbi Tiles. High-strength tiles with anti-slip grooves for indoor and outdoor stairs.',
    keywords: 'step and riser tiles, staircase tiles, anti-slip stair tiles, morbi step tiles, bullnose step tiles, stair risers, indoor stairs, outdoor stair tiles',
    bg: '#6d28d9',
    image: '/assets/step-riser.png',
    price: 'Starting from ₹65 / pair',
    content: 'Design safe and visually appealing staircases with our Step & Riser Tiles. Engineered with anti-slip grooves and perfectly matched risers for a cohesive interior or exterior look.',
    features: ['Anti-Slip Grooves', 'High Strength', 'Matching Sets', 'Indoor & Outdoor Use'],
    article: `
      <h3>Designing the Perfect Staircase</h3>
      <p>Staircases are often the focal point of a home or commercial building. Our Step and Riser tile sets provide a cohesive, tailored look that elevates the entire space. We offer perfectly matched treads (the horizontal step) and risers (the vertical back) to ensure a seamless design flow.</p>
      
      <h3>Engineered for Safety</h3>
      <p>Safety on stairs is non-negotiable. Our step tiles are manufactured with integrated anti-slip grooves (bullnose or grooved edges) that provide crucial traction, significantly reducing the risk of slips and falls, especially in wet conditions or high-traffic public areas.</p>
      
      <h3>Durability You Can Trust</h3>
      <p>Stairs experience concentrated impact and foot traffic. These tiles are made from high-density porcelain, ensuring maximum breaking strength and resistance to edge chipping. Whether for an elegant indoor spiral staircase or a robust outdoor entryway, they are built to last a lifetime.</p>
    `
  }
];

const template = (page) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title} - Morbi Tiles</title>
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="${page.desc}">
  <meta name="keywords" content="${page.keywords}">
  <meta name="author" content="Morbi Tiles">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Social Meta Tags -->
  <meta property="og:title" content="${page.title} - Morbi Tiles">
  <meta property="og:description" content="${page.desc}">
  <meta property="og:image" content="https://www.morbitiles.store${page.image}">
  <meta property="og:type" content="product">
  <meta property="og:url" content="https://www.morbitiles.store/${page.filename}">
  <meta property="og:site_name" content="Morbi Tiles">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
  
  <link rel="preload" href="/src/style.css" as="style">
  <link rel="stylesheet" href="/src/style.css">
  <style>
    .product-detail-hero {
      background: linear-gradient(135deg, ${page.bg} 0%, #111827 100%);
      color: white;
      padding: 80px 20px;
      text-align: center;
    }
    .product-detail-hero h1 { font-size: 3.5rem; margin-bottom: 15px; }
    .product-detail-hero p { font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }
    
    .product-info { padding: 60px 20px; }
    
    .price-tag {
      display: inline-block;
      background-color: #fef3c7;
      color: #92400e;
      font-weight: 700;
      font-size: 1.5rem;
      padding: 10px 25px;
      border-radius: 50px;
      margin-bottom: 30px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: 2px solid #fde68a;
    }
    
    .features-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 40px; margin-bottom: 50px; }
    .feature-item { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; text-align: center; font-weight: 600; color: #334155; }
    
    .article-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      align-items: start;
    }
    
    @media (min-width: 900px) {
      .article-container {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .product-image-container {
      position: sticky;
      top: 100px;
    }
    
    .product-image {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      object-fit: cover;
      aspect-ratio: 4/3;
    }
    
    .product-article {
      text-align: left;
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .product-article h3 {
      font-size: 1.5rem;
      color: #1e293b;
      margin-top: 30px;
      margin-bottom: 15px;
    }
    .product-article h3:first-child {
      margin-top: 0;
    }
    .product-article p {
      font-size: 1.1rem;
      color: #475569;
      line-height: 1.8;
      margin-bottom: 20px;
    }
    
    .action-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 60px;
    }
    
    .btn-large {
      padding: 15px 40px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1.2rem;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    
    .btn-whatsapp {
      background: #25d366;
      color: white;
      box-shadow: 0 4px 6px rgba(37, 211, 102, 0.3);
    }
    
    .btn-whatsapp:hover {
      background: #1ebc59;
    }
    
    .btn-catalog {
      background: var(--primary);
      color: white;
      box-shadow: 0 4px 6px rgba(26, 45, 78, 0.3);
    }
    
    .btn-catalog:hover {
      background: var(--primary-dark);
    }
  </style>
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <span>📞 +91 8238044415</span>
        <span>✉️ sales@morbitiles.store</span>
      </div>
    </div>
  </div>

  <!-- Navbar -->
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="/index.html" class="logo">Morbi<span>Tiles</span></a>
      <div class="hamburger" id="hamburger" role="button" tabindex="0">
        <span></span><span></span><span></span>
      </div>
      <ul class="nav-links" id="nav-links">
        <li><a href="/index.html#home">Home</a></li>
        <li><a href="/index.html#about">About Us</a></li>
        <li class="dropdown" id="products-dropdown">
          <a href="/products.html" class="active">Products ▼</a>
          <ul class="dropdown-menu">
            <li><a href="/wall-tiles.html">Wall Tiles</a></li>
            <li><a href="/floor-tiles.html">Floor Tiles</a></li>
            <li><a href="/polished-porcelain.html">Porcelain Tiles</a></li>
            <li><a href="/slab-tiles.html">Slab Tiles</a></li>
            <li><a href="/parking-tiles.html">Parking Tiles</a></li>
            <li><a href="/sanitary-wares.html">Sanitary Wares</a></li>
            <li><a href="/wood-strip.html">Wood Strip Tiles</a></li>
            <li><a href="/step-riser.html">Step & Riser</a></li>
          </ul>
        </li>
        <li><a href="/index.html#knowledge">Knowledge Base</a></li>
        <li><a href="/index.html#articles">Blog</a></li>
        <li><a href="/index.html#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="product-detail-hero">
    <div class="container">
      <h1>${page.title}</h1>
      <p>${page.desc}</p>
    </div>
  </section>

  <!-- Detail Section -->
  <section class="product-info container">
    <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
      <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Exceptional Quality</h2>
      
      <div class="price-tag">${page.price}</div>
      
      <p style="font-size: 1.2rem; color: #4b5563; line-height: 1.8; margin-bottom: 20px; max-width: 900px; margin-left: auto; margin-right: auto;">${page.content}</p>
      
      <div class="features-list">
        ${page.features.map(f => `<div class="feature-item">${f}</div>`).join('')}
      </div>
      
      <div class="article-container">
        <div class="product-image-container">
          <img src="${page.image}" alt="${page.title} Demo" class="product-image" loading="lazy">
        </div>
        <div class="product-article">
          ${page.article}
        </div>
      </div>
      
      <div class="action-buttons">
        <a href="/assets/morbi-tiles-catalog.pdf" download class="btn-large btn-catalog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download Catalog
        </a>
        <a href="https://wa.me/918238044415" class="btn-large btn-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Get a Quote via WhatsApp
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer style="margin-top: 60px;">
    <div class="container">
      <p>&copy; 2024 Morbi Tiles. All Rights Reserved.</p>
    </div>
  </footer>

  <script type="module" src="/src/main.js"></script>
</body>
</html>`;

pages.forEach(p => {
  fs.writeFileSync('./' + p.filename, template(p));
  console.log('Created: ' + p.filename);
});
