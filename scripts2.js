// Configuración inicial de particles.js y Three.js (como antes)
// ...

// ===== INTERACTIVIDAD CON EL MOUSE =====

// 1. Partículas (particles.js) que huyen del mouse
document.addEventListener('mousemove', (e) => {
    // Coordenadas del mouse normalizadas (-1 a 1)
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = - (e.clientY / window.innerHeight) * 2 + 1;

    // Actualizar el efecto de repelencia en particles.js
    if (window.pJSDom && window.pJSDom.length > 0) {
        const interactivity = window.pJSDom[0].pJS.interactivity;
        interactivity.mouse.pos_x = e.clientX;
        interactivity.mouse.pos_y = e.clientY;
        
        // Aumentar la fuerza de repelencia
        interactivity.modes.repulse.distance = 300; // Radio de acción
        interactivity.modes.repulse.strength = 0.5; // Intensidad
    }

    // 2. Nebulosa 3D (Three.js) que sigue el mouse suavemente
    if (particlesMesh) {
        particlesMesh.rotation.x = mouseY * 0.2; // Inclinación vertical
        particlesMesh.rotation.y = mouseX * 0.2; // Rotación horizontal
    }
});

// Configuración adicional para particles.js (en la inicialización)
particlesJS("particles-js", {
    // ... (configuración previa)
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Cambiado de 'grab' a 'repulse'
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "repulse": {
                "distance": 150,   // Radio de repelencia
                "duration": 0.4,  // Tiempo de reacción
                "speed": 1        // Velocidad de escape
            }
        }
    }
});

// Resto del código (animación, resize, etc.) se mantiene igual
