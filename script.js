// Archivo de comportamiento interactivo para Fuego Lento - Chorizo & Barril

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sitio web de Fuego Lento cargado correctamente.");

    // Efecto de desplazamiento suave para los enlaces del menú
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if(targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Cerrar el menú desplegable en dispositivos móviles al hacer clic
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if(navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
});