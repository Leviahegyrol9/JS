const div = document.querySelector("div");
const title = document.querySelector("title");
const h1 = document.querySelector("h1");
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
    }
    catch(error){
        alert(error.message);
    }
}

function back(){
    window.open("index.html", "_self");
}

function modifyFood(){
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const weight = document.querySelector("#weight").value;

    if (name && price && weight){
        fetch(`http://localhost:3000/foods/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: price,
            weight: weight
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