const div = document.querySelector("div");

fetch("https://surveys-5jvt.onrender.com/api/cars/")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    else return response.json();
  })
  .then((cars) => {
    console.log(cars);

    cars.forEach((element) => {
      div.innerHTML += `<div class="card">
            <img src="bin/car.png" />
            <div class="container">
                <h4>${element.brand} ${element.model}</h4>
                <p>${element.year}</p>
            </div>
            </div>`;
    });
  })

  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
