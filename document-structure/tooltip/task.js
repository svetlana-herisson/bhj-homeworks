document.addEventListener('DOMContentLoaded', function () {
    const tooltipElements = document.querySelector('.has-tooltip');
    const tooltip = document.querySelector('.tooltip');

    tooltipElements.addEventListener('click', function (event) {
        event.preventDefault(); 

        const tooltipText = tooltipElements.getAttribute('title');
        tooltip.textContent = tooltipText; 

    
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active'); 
        } else {
            tooltip.classList.add('tooltip_active'); 
        }
    });

   
    document.addEventListener('click', function (event) {
        if (!tooltipElements.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.classList.remove('tooltip_active'); 
        }
    });
});