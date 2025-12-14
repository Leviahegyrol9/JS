const list = document.getElementById("carList");
const date = new Date();
let cars;

if (JSON.parse(localStorage.getItem("cars")) != null){
    cars = JSON.parse(localStorage.getItem("cars"));
    AppendList();
}
else{
    cars = [];
}

function SaveCars() {
    localStorage.setItem("cars", JSON.stringify(cars));
    AppendList();
}


function AppendList() { 
    list.innerHTML = "";
    cars.forEach((car, index) => {
        const li = document.createElement("li");
        if (car.available){
            li.innerHTML = `
                ${car.brand} ${car.model} (${car.year})

                <div class="actions">
                    <input type="checkbox" class="cB" onclick="ChangeAvailability(${index})" checked>
                    <button class="delete" onclick="DeleteBtn(${index})">Törlés</button>
                </div>
            `;
            li.style.backgroundColor = "#8AFF8A";
        }
        else {
            li.innerHTML = `
                ${car.brand} ${car.model} (${car.year})

                <div class="actions">
                    <input type="checkbox" class="cB" onclick="ChangeAvailability(${index})">
                    <button class="delete" onclick="DeleteBtn(${index})">Törlés</button>
                </div>
            `;
            li.style.backgroundColor = "#FF8A8A";
        }        

        list.appendChild(li);
    });
}

function AddCar() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;


    if (brand === "" || model === "" || year === "") {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }
    else if (!IsString(brand) || year < 1850 || year > date.getFullYear()){
        alert("Rosszul adta meg az adatokat!");
        return;
    }

    const car = {
        brand: brand,
        model: model,
        year: year,
        available: true
    };

    cars.push(car);
    SaveCars();

    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
}

function DeleteBtn(index){
    cars.splice(index, 1);
    SaveCars();
}

function ChangeAvailability(index){
    cars[index].available == false ? cars[index].available = true : cars[index].available = false;

    SaveCars();
}

function IsString(text) {
    let regex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;

    return regex.test(text);
}