const div = document.querySelector(".row");
const container = document.querySelector(".container");
const properties = document.querySelector("#carProperties");
const checkCar = document.getElementById("checkCar");
const modifyForm = document.getElementById("modifyForm");
const searchBar = document.querySelector("#search-container input");
let carlist = [];

getCars();

function getCars(){
    fetch("https://surveys-5jvt.onrender.com/api/cars/")
    .then(response => response.json())
    .then(cars => {
        carlist = cars;
        let html = "";

        cars.forEach(element => {
            html += `
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card" onclick="cardClick(${element.id})">
                    <img src="car.png"/>
                    <div class="card-body">
                        <h5>${element.brand} ${element.model}</h5>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = html;
})
.catch(error => console.error(error.message))
}

function cardClick(id){
    container.style.display = "none";
    checkCar.style.display = "block";

    car = carlist.find(car => car.id == id);

    if (car.id >= 1 && car.id <= 4){
        properties.innerHTML = `
            <div id="cardInfo")">
                <img src="car.png"/>
                <div class="card-body">
                    <h3>ID: ${car.id}</h3>
                    <h5>${car.brand} ${car.model} (${car.year})</h5>
                </div>
            </div>`;

        modifyForm.style.display = "none";
    }
    else{
        properties.innerHTML = `
            <div id="cardInfo")">
                <img src="car.png"/>
                <div class="card-body">
                    <h3>ID: ${car.id}</h3>
                    <h5>${car.brand} ${car.model} (${car.year})</h5>
                    <button id="infoBtn" class="btn btn-danger" onclick="deleteCar(${car.id})">Törlés</button>
                    <button id="infoBtn" class="btn btn-secondary" onclick="modifyCar(${car.id})">Módosítás</button>
                </div>
            </div>`;

        modifyForm.style.display = "block";

        document.getElementById("newBrand").value = car.brand;
        document.getElementById("newModel").value = car.model;
        document.getElementById("newYear").value = car.year;
    } 
}

function back(){
    container.style.display = "block";
    checkCar.style.display = "none";
}

function createCar(){
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const inputs = document.querySelectorAll("#carForm input");

    if (Array.from(inputs).find(v => v.value == "")){
        alert("Töltsd ki a mezőket!");
    }
    else{
        fetch("https://surveys-5jvt.onrender.com/api/cars/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                brand: brand,
                model: model,
                year: year
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Hiba a létrehozásnál!");
            }
            else{
                document.querySelector("form").reset();      
                getCars();
            }               
        })
        .catch(error => console.error(error.message))
        }
}

function modifyCar(id){
    const newBrand = document.getElementById("newBrand").value;
    const newModel = document.getElementById("newModel").value;
    const newYear = document.getElementById("newYear").value;
    const inputs = document.querySelectorAll("#modifyForm input");

    if (Array.from(inputs).find(v => v.value == "")){
        alert("Töltsd ki a mezőket!");
    }
    else{
        fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                brand: newBrand,
                model: newModel,
                year: newYear
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Hiba a módosításnál!");
            }
            else{
                alert("✅ Sikeres módosítás!");
                back();
                getCars();
            }
        })
        .catch(error => console.error(error.message));
    }
}

function deleteCar(id){
    if (confirm("Biztosan törölni szeretnéd ezt az autót?")){
        fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Hiba a törlésnél!");
        }
        else{
            back();
            getCars();
        }
    })
    .catch(error => console.error(error.message));
    }
}

function search(){
    getCars();
    
    if (carlist.find(c => c.id == searchBar.value)){
        cardClick(searchBar.value);
    }
    else{
        alert("Nincs ilyen autó a listában!");
    }

    searchBar.value = "";
    
}