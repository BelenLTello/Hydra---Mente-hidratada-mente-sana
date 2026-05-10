const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

if (navToggle && navbar) {
    navToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });

    navbar.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("open");
        });
    });
}

// --- 2. ANIMACIONES DE REVELACIÓN (REVEAL) ---
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, { threshold: 0.15 });

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// --- 3. LÓGICA DE VIDEOS (SOLUCIÓN AL ERROR DE CLIC) ---
document.addEventListener("DOMContentLoaded", function() {
    // Buscamos todos los contenedores de video con la clase 'youtube-lazy'
    const lazyVideos = document.querySelectorAll('.youtube-lazy');
    
    lazyVideos.forEach(video => {
        const videoId = video.getAttribute('data-id');
        
        // Creamos la miniatura de YouTube de alta calidad
        const img = document.createElement('img');
        img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        img.alt = "Miniatura del video informativo";
        img.classList.add('video-thumb'); // Usaremos esta clase en el CSS

        // Creamos el botón de Play visual
        const playBtn = document.createElement('div');
        playBtn.innerHTML = '▶';
        playBtn.classList.add('play-button-overlay');

        // Insertamos los elementos en el contenedor
        video.appendChild(img);
        video.appendChild(playBtn);

        // Evento de clic: Reemplaza la imagen por el video real
        video.addEventListener('click', function() {
            const iframe = document.createElement('iframe');
            // Usamos youtube-nocookie para evitar bloqueos y autoplay=1 para que inicie al primer clic
            iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '1');
            
            // Limpiamos la miniatura e insertamos el iframe
            this.innerHTML = ''; 
            this.appendChild(iframe);
        });
    });
});