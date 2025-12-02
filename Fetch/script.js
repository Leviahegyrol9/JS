const info = document.querySelector("div");

fetch('https://surveys-5jvt.onrender.com/api/users/')
 
.then(response => {

if (!response.ok) throw new Error('Network response was not ok');
else return response.json();

})
.then(users => {
 
console.log(users);

users.forEach(element => {
    let js = JSON.stringify(element);
    info.textContent += js;
});

 
}
)
 
.catch(error => {
 
console.error('There was a problem with the fetch operation:', error);
 
}
);