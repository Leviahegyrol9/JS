const inputUn = document.getElementById("username");
const inputPw = document.getElementById("password");
const p = document.getElementById("success");
const info = document.getElementById("info");

const username = "admin";
const password = "12345";

if (sessionStorage.getItem("login") == 1){
    inputUn.value = username;
    inputPw.value = password;
    ShowDiv();
}

function Login(){
    if (inputUn.value === username && inputPw.value === password){
        info.style.color = "green";
        info.innerHTML = "Sikeres bejelntkezés!"
        sessionStorage.setItem("login", 1);
        document.getElementById("login").style.visibility = "hidden";
        p.innerHTML = `Üdvözlöm ${username}!`
    }
    else{
        info.style.color = "red";
        info.innerHTML = "Nem sikerült bejelentkezni!"
        sessionStorage.setItem("login", 0);
    }
}

function ShowPw(){
    if (inputPw.type == "password"){
        inputPw.type = "text";
    }
    else{
        inputPw.type = "password";
    }    
}