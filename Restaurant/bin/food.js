const div = document.querySelector("div");
const title = document.querySelector("title");
const h1 = document.querySelector("h1");

const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const weightInput = document.querySelector("#weight");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

loadFood();

async function loadFood() {
    try{
        const response = await fetch(`http://localhost:3000/foods/${id}`);
        const food = await response.json();

        title.textContent = food.name;
        h1.textContent = food.name;

        div.innerHTML = `
        Id: ${food.id}<br>
        Ár: ${food.price} Ft<br>
        Tömeg: ${food.weight} gramm
        `;

        nameInput.value = food.name;
        priceInput.value = food.price;
        weightInput.value = food.weight;
    }
    catch(error){
        alert(error.message);
    }
}

function back(){
    window.open("index.html", "_self");
}

function modifyFood(){
    if (nameInput.value && priceInput.value && weightInput.value){
        fetch(`http://localhost:3000/foods/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameInput.value,
            price: priceInput.value,
            weight: weightInput.value
        })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            back();
        })
        .catch(error => alert(error.error));        
    }
    else alert("Minden mező kitöltése kötelező!");
}

function deleteFood(){
    if (confirm("Biztosan szeretnéd törölni ezt az ételt?")){
        fetch(`http://localhost:3000/foods/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            back();
        })
        .catch(error => alert(error.error));
        }  
}