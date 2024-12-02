
const cabezera = document.querySelector('.cabezera');
const maxAltura = 200; // Altura máxima inicial
const minAltura = 100; // Altura mínima al hacer scroll
const maxPadding = 20; // Padding máximo inicial
const minPadding = 5;  // Padding mínimo al hacer scroll

window.addEventListener('scroll', () => {
    // Rango de scroll para aplicar el efecto
    const maxScroll = 200; // Puedes ajustar este valor
    const scrollTop = Math.min(window.scrollY, maxScroll); // No exceder el rango

    // Calcula proporciones
    const altura = maxAltura - (scrollTop / maxScroll) * (maxAltura - minAltura);
    const padding = maxPadding - (scrollTop / maxScroll) * (maxPadding - minPadding);

    // Aplica los valores dinámicos
    cabezera.style.height = `${altura}px`;
    cabezera.style.padding = `${padding}px`;
});

 
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    let errors = []; // Array para acumular los mensajes de error

    // Validació del nom
    const name = document.getElementById('name').value.trim();
    const namePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/;
    if (name === '') {
        errors.push('El nom és obligatori.');
    } else if (!namePattern.test(name)) {
        errors.push('El nom només pot contenir lletres, espais i accents (oberts i tancats).');
    }

    // Validació del correu electrònic
    const mail = document.getElementById('mail').value.trim();
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (mail === '') {
        errors.push('El correu electrònic és obligatori.');
    } else if (!emailPattern.test(mail)) {
        errors.push('El correu electrònic no és vàlid.');
    }

    // Validació del títol
    const title = document.getElementById('title').value.trim();
    if (title === '') {
        errors.push('El títol és obligatori.');
    }

    // Validació del missatge
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        errors.push('El missatge és obligatori.');
    }

    // Gestionar errors
    const errorContainerId = 'errorContainer';
    let errorContainer = document.getElementById(errorContainerId);

    if (errors.length > 0) {
        // Si no existeix el contenidor d'errors, crea'l
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = errorContainerId;
            errorContainer.style.color = 'red';
            errorContainer.style.margin = '10px 0';
            document.getElementById('formulario').insertBefore(errorContainer, document.getElementById('contactForm'));
        }
        errorContainer.textContent = errors.join(' '); // Unir errors en un sol string
    } else {
        // Si no hi ha errors, eliminar el contenidor d'errors i redirigir
        if (errorContainer) {
            errorContainer.remove();
        }
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Redirigir a l'URL
    }
});


const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseover', () => link.style.color = '#808080');
    link.addEventListener('mouseout', () => link.style.color = '#ffffff');
});

// Efecte visual: canvi de mida del títol a l'entrar amb el cursor
const headerTitle = document.querySelector('.cabezera h1');
headerTitle.addEventListener('mouseenter', () => headerTitle.style.transform = 'scale(1.1)');
headerTitle.addEventListener('mouseleave', () => headerTitle.style.transform = 'scale(1)');