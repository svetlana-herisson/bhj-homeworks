const fontSizeLinks = document.querySelectorAll(".font-size");
const bookElement = document.getElementById("book");
const colorElements = document.querySelectorAll(".color");

let activeTextColor = document.querySelector(".color[data-text-color].color_active");
let activeBackgroundColor = document.querySelector(".color[data-background-color].color_active");

function changeFontSize(event) {
    event.preventDefault();

    fontSizeLinks.forEach(link => {
        link.classList.remove("font-size_active");
    });

    const currentLink = event.currentTarget;
    currentLink.classList.add("font-size_active")

    bookElement.classList.remove("book_fs-small", "book_fs-big")

    const size = currentLink.getAttribute("data-size");
    if (size === "small") {
        bookElement.classList.add("book_fs-small");
    }  else if (size === "big") {
        bookElement.classList.add("book_fs-big");
    }
}

function changeTextColor(event) {
    event.preventDefault();

    const newActiveTextColor = event.currentTarget;

    if(activeTextColor){
        activeTextColor.classList.remove("color_active");
    }

    newActiveTextColor.classList.add("color_active");
    activeTextColor = newActiveTextColor;

    const textColor = newActiveTextColor.getAttribute("data-text-color");
    bookElement.style.color = textColor;
}

function changeBackgroundColor(event) {
    event.preventDefault();
    const newActiveBackgroundColor = event.currentTarget;

    if (activeBackgroundColor) {
        activeBackgroundColor.classList.remove("color_active");
    }

    newActiveBackgroundColor.classList.add("color_active");
    activeBackgroundColor = newActiveBackgroundColor;
    
    const bgColor = newActiveBackgroundColor.getAttribute("data-bg-color");
    bookElement.style.backgroundColor = bgColor;
}


colorElements.forEach(clickItem => {
    if (clickItem.hasAttribute("data-text-color")) {
        clickItem.addEventListener("click", changeTextColor);
    };
    if (clickItem.hasAttribute("data-bg-color")) {
        clickItem.addEventListener("click", changeBackgroundColor);
    }
});

fontSizeLinks.forEach( link => {
    link.addEventListener("click", changeFontSize)
}); 
