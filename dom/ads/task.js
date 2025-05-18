const rotators = document.querySelectorAll(".rotator");

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll(".rotator__case");
    let currentIndex = 0;

    const updateActiveCase = () => {
        cases.forEach((caseEl) => {
            caseEl.classList.remove("rotator__case_active");
        });
    
        cases[currentIndex].classList.add("rotator__case_active");
        cases[currentIndex].style.color = cases[currentIndex].dataset.color;
    }

    updateActiveCase();

    const switchCase = () => {
        currentIndex = ( currentIndex + 1) % cases.length;
        updateActiveCase();
        const speed = parseInt(cases[currentIndex].dataset.speed);
        setTimeout(switchCase, speed);
    }
    
    const initialSpeed = parseInt(cases[currentIndex].dataset.speed);
    setTimeout(switchCase, initialSpeed);
})
