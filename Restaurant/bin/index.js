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
.catch(error => console.error(error.message));
}

function cardClick(id){
    if (foodList.find(e => e.id == id)) window.open(`food.html?id=${id}`, "_self");
    else alert("Nincs ilyen étel!");

}

function search(){
    const input = document.querySelector("#search-container input").value;

    if (input) cardClick(input);
}