const inputUn = document.getElementById("username");
const inputPw = document.getElementById("password");
const p = document.getElementById("success");
const info = document.getElementById("info");

const username = "admin";
const password = "12345";

if (document.cookie == "1"){
    inputUn.value = username;
    inputPw.value = password;
    ShowDiv();
}

function Login(){
    if (inputUn.value === username && inputPw.value === password){
        info.style.color = "green";
        info.innerHTML = "Sikeres bejelentkezés!"
        const time = new Date()
        const timeE = new Date(time);
        console.log(timeE.getMinutes())
        timeE.setDate(time.getMinutes() + 5);
        console.log(timeE.getMinutes());
        document.getElementById("login").style.visibility = "hidden";
        p.innerHTML = `Üdvözlöm ${username}!`
    }
    else{
        info.style.color = "red";
        info.innerHTML = "Nem sikerült bejelentkezni!"
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