    // 1. Hero Image Auto-Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      if (index >= slides.length) currentSlide = 0;
      if (index < 0) currentSlide = slides.length - 1;

      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      currentSlide++;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide--;
      showSlide(currentSlide);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function resetSlider() {
      clearInterval(slideInterval);
      startSlider();
    }

    document.getElementById('nextSlide').addEventListener('click', () => {
      nextSlide();
      resetSlider();
    });

    document.getElementById('prevSlide').addEventListener('click', () => {
      prevSlide();
      resetSlider();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetSlider();
      });
    });

    startSlider();

    // 2 & 3. Navbar Hamburger Toggle & Mobile Dropdown
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const productsDropdown = document.getElementById('products-dropdown');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    if (window.innerWidth <= 768) {
      productsDropdown.addEventListener('click', (e) => {
        // If they click on the direct link or icon
        if (e.target.tagName !== 'UL' && e.target.tagName !== 'LI') {
          e.preventDefault();
          productsDropdown.classList.toggle('active');
        }
      });
    }

    // 4. Sticky Navbar Shrink on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    });

    // 5. Counter Animation on Stats Section (IntersectionObserver)
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower = slower

    if (window.IntersectionObserver) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const inc = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
            observer.unobserve(counter); // Animate only once
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(counter => {
        counterObserver.observe(counter);
      });
    }

    // 6. Scroll-to-Top Button Show/Hide
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    // Smooth scroll to top
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // 7. Smooth Scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;

        // On mobile, if clicking products link, prevent scrolling
        if (window.innerWidth <= 768 && this.parentElement.id === 'products-dropdown') {
          return;
        }

        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Close mobile menu if open
          navLinks.classList.remove('active');

          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Knowledge Base Content Modules
    const kbModules = {
      calculator: `
            <div class="kb-module">
                <h3>Tiles Calculator</h3>
                <div class="calc-grid">
                    <div class="form-group">
                        <label>Room Length (ft)</label>
                        <input type="number" id="calc-length" class="form-control" value="10">
                    </div>
                    <div class="form-group">
                        <label>Room Width (ft)</label>
                        <input type="number" id="calc-width" class="form-control" value="10">
                    </div>
                    <div class="form-group">
                        <label>Tile Size</label>
                        <select id="tile-size" class="form-control">
                            <option value="600x600">600x600 mm (2x2 ft)</option>
                            <option value="600x1200">600x1200 mm (2x4 ft)</option>
                            <option value="800x1600">800x1600 mm (2.6x5.2 ft)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Wastage (%)</label>
                        <input type="number" id="calc-wastage" class="form-control" value="10">
                    </div>
                </div>
                <button class="btn btn-solid" style="width:100%" onclick="calculateTiles()">Calculate Now</button>
                <div id="calc-result" class="calc-result" style="margin-top:20px; display:none;">
                    <h4>Result:</h4>
                    <p>Total Area: <span id="res-area">0</span> sq.ft</p>
                    <p>Tiles Needed: <span id="res-tiles">0</span> pieces</p>
                    <p>Total Boxes: <span id="res-boxes">0</span> boxes (approx)</p>
                </div>
            </div>
        `,
      specs: `
            <div class="kb-module">
                <h3>Technical Specs</h3>
                <p>Standard specifications for our Premium Morbi Ceramic & Porcelain Tiles:</p>
                <div class="specs-table-container">
                    <table class="specs-table">
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Cermic Tiles</th>
                                <th>Porcelain Tiles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Water Absorption</td>
                                <td>> 10%</td>
                                <td>< 0.5%</td>
                            </tr>
                            <tr>
                                <td>Breaking Strength</td>
                                <td>600 N</td>
                                <td>1300 N</td>
                            </tr>
                            <tr>
                                <td>Modulus of Rupture</td>
                                <td>22 N/mm²</td>
                                <td>35 N/mm²</td>
                            </tr>
                            <tr>
                                <td>Abrasion Resistance</td>
                                <td>PEI II / III</td>
                                <td>PEI IV / V</td>
                            </tr>
                            <tr>
                                <td>Surface Quality</td>
                                <td>Min. 95% free from visible defects</td>
                                <td>Min. 95% free from visible defects</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
      guide: `
            <div class="kb-module">
                <h3>Tiles Laying Guide</h3>
                <p>Follow these steps for a perfect tile installation:</p>
                <ol style="margin-top: 20px; padding-left: 20px;">
                    <li style="margin-bottom:15px"><strong>Surface Preparation:</strong> Ensure the floor or wall is level, clean, and dry.</li>
                    <li style="margin-bottom:15px"><strong>Planning:</strong> Lay out tiles without adhesive to check the pattern and minimize cuts.</li>
                    <li style="margin-bottom:15px"><strong>Adhesive Application:</strong> Use a high-quality tile adhesive and apply with a notched trowel.</li>
                    <li style="margin-bottom:15px"><strong>Laying:</strong> Press tiles firmly into the adhesive. Use tile spacers for uniform gaps.</li>
                    <li style="margin-bottom:15px"><strong>Cutting:</strong> Use a professional tile cutter for corner or edge pieces.</li>
                    <li style="margin-bottom:15px"><strong>Grouting:</strong> After 24 hours, fill the joints with grout of a matching color.</li>
                    <li style="margin-bottom:15px"><strong>Cleaning:</strong> Wipe off excess grout with a damp sponge before it dries.</li>
                </ol>
            </div>
        `,
      faq: `
            <div class="kb-module">
                <h3>Industry FAQs</h3>
                <div class="accordion">
                    <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">Why is Morbi the tile hub of India?</div>
                        <div class="accordion-body">Morbi produces over 90% of India's ceramic tiles due to its strategic location, availability of raw materials, and massive infrastructure of over 800 factories.</div>
                    </div>
                    <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">What is the MOQ for exporting tiles?</div>
                        <div class="accordion-body">The Minimum Order Quantity for export is typically 1 full container load (FCL), but we can mix different designs within the same container.</div>
                    </div>
                    <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">How do I choose between Ceramic and Porcelain?</div>
                        <div class="accordion-body">Ceramic is great for walls and medium-traffic floors. Porcelain is denser, more durable, and water-resistant, making it ideal for high-traffic areas and outdoors.</div>
                    </div>
                     <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">What sizes are most popular in Morbi?</div>
                        <div class="accordion-body">The most popular sizes are 600x600mm, 600x1200mm for flooring, and 300x450mm or 300x600mm for wall tiles.</div>
                    </div>
                </div>
            </div>
        `
    };

    // Modal Management
    function openKBModal(type) {
      const modal = document.getElementById('kb-modal');
      const content = document.getElementById('kb-content');
      content.innerHTML = kbModules[type];
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    function closeKBModal() {
      const modal = document.getElementById('kb-modal');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scroll
    }

    // Close modal on click outside
    window.onclick = function (event) {
      const modal = document.getElementById('kb-modal');
      if (event.target == modal) {
        closeKBModal();
      }
    }

    // Calculator Logic
    function calculateTiles() {
      const length = parseFloat(document.getElementById('calc-length').value);
      const width = parseFloat(document.getElementById('calc-width').value);
      const size = document.getElementById('tile-size').value;
      const wastage = parseFloat(document.getElementById('calc-wastage').value);

      const area = length * width;
      const totalAreaWithWastage = area * (1 + wastage / 100);

      let tileSizeSqFt = 4; // default for 600x600
      let piecesPerBox = 4;

      if (size === '600x1200') {
        tileSizeSqFt = 7.75;
        piecesPerBox = 2;
      } else if (size === '800x1600') {
        tileSizeSqFt = 13.77;
        piecesPerBox = 2;
      } else {
        tileSizeSqFt = 3.87; // exact 600x600 in sqft
        piecesPerBox = 4;
      }

      const tilesNeeded = Math.ceil(totalAreaWithWastage / tileSizeSqFt);
      const boxesNeeded = Math.ceil(tilesNeeded / piecesPerBox);

      document.getElementById('res-area').innerText = area.toFixed(2);
      document.getElementById('res-tiles').innerText = tilesNeeded;
      document.getElementById('res-boxes').innerText = boxesNeeded;
      document.getElementById('calc-result').style.display = 'block';
    }

    // Accordion Toggle
    function toggleAccordion(element) {
      element.classList.toggle('active');
    }
