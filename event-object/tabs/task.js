const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

tabs.forEach((element, index) => {
    element.addEventListener('click', event => {
        event.preventDefault();

        tabs.forEach(tab => tab.classList.remove("tab_active"));
        tabContent.forEach(content => content.classList.remove("tab__content_active"));
        
        element.classList.add("tab_active")
        tabContent[index].classList.add("tab__content_active")
    });
});

