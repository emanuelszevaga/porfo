function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// THEME TOGGLE
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcons(next);
}

function updateThemeIcons(theme) {
    document.querySelectorAll(".theme-icon").forEach(el => {
        el.textContent = theme === "dark" ? "🌙" : "☀️";
    });
}

// Load saved theme
(function() {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcons(saved);
})();

// TYPEWRITER EFFECT
(function() {
    const texts = ["Full Stack Developer", "Estudiante de Ing. en Sistemas de Información"];
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const el = document.getElementById("typewriter");
    const delay = { type: 80, delete: 45, pause: 2000, pauseShort: 500 };

    function type() {
        const current = texts[textIndex];
        if (!deleting) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(type, delay.pause);
                return;
            }
        } else {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, delay.pauseShort);
                return;
            }
        }
        setTimeout(type, deleting ? delay.delete : delay.type);
    }

    type();
})();
