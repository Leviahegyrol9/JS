const div = document.querySelector(".row");
let foodList = [];

getMenu();

function getMenu(){
    fetch("http://localhost:3000/foods")
    .then(response => response.json())
    .then(foods => {
        foodList = foods;
        let html = "";

        foods.forEach(element => {
            html += `
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card" onclick="cardClick(${element.id})">
                    <img src="bin/food.png"/>
                    <div class="card-body">
                        <h5><b>${element.name}</b> ${element.price} Ft</h5>
                    </div>
                </div>
            </div>`;
        });

        div.innerHTML = html;
})
.catch(error => alert(error.error));
}

function cardClick(id){
    if (foodList.find(e => e.id == id)) window.open(`food.html?id=${id}`, "_self");
    else alert("Nincs ilyen étel!");

}

function addFood(){
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const weight = document.querySelector("#weight").value;

    if (name && price && weight){

        fetch("http://localhost:3000/foods", {
            method: "POST",
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
            getMenu();
        })
        .catch(error => alert(error.error));

    }
    else alert("Minden mező kitöltése kötelező!");
}

function search(){
    const input = document.querySelector("#search-container input").value;

    if (input) cardClick(input);
}