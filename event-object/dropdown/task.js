const dropdownValue = document.querySelector (".dropdown__value");
const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdownList = document.querySelector (".dropdown__list");

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle("dropdown__list_active")
})

dropdownItem.forEach(item => {
    item.addEventListener('click',(event) => {
        event.preventDefault();
        dropdownList.classList.remove('dropdown__list_active');
		dropdownValue.textContent = event.currentTarget.textContent;
    } )
});

