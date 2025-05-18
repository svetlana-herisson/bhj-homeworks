const reveal = document.querySelector(".reveal");

window.addEventListener("scroll", () => {
    const { top, bottom } = reveal.getBoundingClientRect();

    if (bottom > 0 && top < window.innerHeight) {
        reveal.classList.add("reveal_active")
    } else {
        reveal.classList.remove("reveal_active")
    };
});