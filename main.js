document.addEventListener('DOMContentLoaded', () => {
    // Shared functionality: Inject WhatsApp button and Popup
    injectSharedElements();

    const header = document.querySelector('header');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Exit Intent Logic
    let popupShown = false;
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !popupShown) {
            const popup = document.getElementById('exit-popup');
            if (popup) {
                popup.style.display = 'flex';
                popupShown = true;
            }
        }
    });

    // Close Popup Logic
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-popup') || e.target.classList.contains('exit-popup')) {
            document.getElementById('exit-popup').style.display = 'none';
        }
    });
});

function injectSharedElements() {
    // 1. WhatsApp Floating Button
    const waFloat = document.createElement('a');
    waFloat.href = 'https://wa.me/918238044415';
    waFloat.className = 'whatsapp-float';
    waFloat.target = '_blank';
    waFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(waFloat);

    // 2. Exit Intent Popup
    const popupHtml = `
        <div id="exit-popup" class="exit-popup">
            <div class="exit-popup-content">
                <span class="close-popup">&times;</span>
                <h2>Wait! Don't Leave Yet!</h2>
                <p>Get the latest wholesale price list and exclusive designs directly on your WhatsApp.</p>
                <a href="https://wa.me/918238044415" class="popup-wa-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHtml);
}
