document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNavLink() {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);
    window.addEventListener("resize", highlightNavLink);
});
