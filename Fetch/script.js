const table = document.querySelector("table");

fetch('https://surveys-5jvt.onrender.com/api/users/')
 
.then(response => {

if (!response.ok) throw new Error('Network response was not ok');
else return response.json();

})
.then(users => {
 
console.log(users);

users.forEach(element => {    
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = element.id;
    cell2.innerHTML = element.firstName;
    cell3.innerHTML = element.lastName;
    cell4.innerHTML = element.email;
    cell5.innerHTML = element.password;
    
});

 
}
)
 
.catch(error => {
 
console.error('There was a problem with the fetch operation:', error);
 
}
);