document.querySelectorAll('nav.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Evita el comportamiento predeterminado

        // Definir las rutas según el valor del 'href' de cada enlace
        const target = this.getAttribute('href');
        
        switch (target) {
            case '#home':
                window.location.href = 'home.html';  // Redirigir a la página home.html
                break;
            case '#services':
                window.location.href = 'contacto.html';  // Redirigir a la página contacto.html
                break;
            case '#about':
                window.location.href = 'proyectos.html';  // Redirigir a la página proyectos.html
                break;
            case '#contact':
                window.location.href = 'acerca.html';  // Redirigir a la página acerca.html
                break;
        }
    });
});
