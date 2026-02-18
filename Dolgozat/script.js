function deleteCar(id) {
    fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Response was not ok!");
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function getBooks() {
    fetch(`https://surveys-5jvt.onrender.com/api/books`)
    .then(response => {
        if(!response.ok){
            throw new Error("Response was not ok!");
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

async function getPhoneById(id) {
    try{
    const response = await fetch(`https://surveys-5jvt.onrender.com/api/phones/${id}`);

    if(!response.ok){
            throw new Error("Response was not ok!");
        }

    return response.json();
    }
    catch (error){
        console.log(error);
    }  
}

function saveUser(firstName, lastName, email, password) {
   fetch(`https://surveys-5jvt.onrender.com/api/users/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })
   })
    .then(response => {
        if(!response.ok){
            throw new Error("Response was not ok!");
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}