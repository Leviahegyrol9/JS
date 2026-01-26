function GET(){
fetch("https://surveys-5jvt.onrender.com/api/books/", {
method: "GET"
})
.then(response => response.json())
.then(json => {
    console.log(json);
});
}

function POST(){
fetch("https://surveys-5jvt.onrender.com/api/books/", {

// Metódus hozzáadása
method: "POST",

// Küldendő test vagy tartalom hozzáadása
body: JSON.stringify({
title: "foo",
body: "bar",
userId: 1
}),

// Fejlécek hozzáadása a kéréshez
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})

// Konvertálás JSON-ba
.then(response => response.json())

// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));
}

POST();