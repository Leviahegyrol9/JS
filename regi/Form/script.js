const div = document.querySelector("div");

function Get(){
    fetch("https://surveys-5jvt.onrender.com/api/cars/")
    .then(response => response.json())
    .then(cars => {
        carlist = cars;
        let html = "";

        cars.forEach(element => {
            html += `
            Név: ${element.name}
            <br>
            Típus: ${element.brand}
            <br>
            Model: ${element.model}
            <br>
            Év: ${element.year}
            <br>
            `
        });

        div.innerHTML = html;
})
.catch(error => console.error(error.message))
}