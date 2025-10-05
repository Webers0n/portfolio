particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 700 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 3, "direction": "none", "random": true, "straight": false }
    },
    "interactivity": {
        "detect_on": "window",   // <<< aqui
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});
