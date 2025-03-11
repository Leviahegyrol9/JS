const inputUn = document.getElementById("username");
const inputPw = document.getElementById("password");
const p = document.getElementById("success");
const info = document.getElementById("info");

const username = "admin";
const password = "12345";

if (sessionStorage.getItem("login") == 1){
    inputUn.value = "admin";
    inputPw.value = "12345";
    ShowDiv();
}

function Login(){
    if (inputUn.value === username && inputPw.value === password){
        info.style.color = "green";
        info.innerHTML = "Sikeres bejelntkezés!"
        sessionStorage.setItem("login", 1);
        ShowDiv();
    }
    else{
        info.style.color = "red";
        info.innerHTML = "Nem sikerült bejelentkezni!"
        sessionStorage.setItem("login", 0);
    }
}

function ShowDiv(){
    p.innerHTML = `Üdvözlöm ${username}`
}