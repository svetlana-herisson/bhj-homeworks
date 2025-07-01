const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if (xhr.DONE === xhr.readyState) {

        loader.classList.remove("loader_active");
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            const itemContainer = document.getElementById('items');
            
            Object.keys(data.response.Valute).forEach(function(key) {
                const currency = data.response.Valute[key];
                    itemContainer.innerHTML += 
                        `<div class="item">
                            <div class="item__code">${currency.CharCode}</div>
                            <div class="item__value">${currency.Value.toFixed(2)}</div>
                            <div class="item__currency">руб.</div>
                        </div>`;
            });
        } else {
            console.error('Ошибка при загрузке данных:', request.statusText);
        }

    }
})

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")
xhr.send();