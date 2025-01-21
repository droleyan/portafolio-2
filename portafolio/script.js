// Lazy Loading para videos
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("iframe");
    videos.forEach((video) => {
        video.setAttribute("data-src", video.src);
        video.removeAttribute("src");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.getAttribute("data-src");
                observer.unobserve(video);
            }
        });
    });

    videos.forEach((video) => observer.observe(video));
});

// Animaciones al hacer scroll
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});