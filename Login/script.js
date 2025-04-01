const inputUn = document.getElementById("username");
const inputPw = document.getElementById("password");
const p = document.getElementById("success");
const info = document.getElementById("info");
const ul = document.querySelector("ul");
const textArea = document.querySelector("textarea");
const notes = [];

const username = "admin";
const password = "12345";

if (sessionStorage.getItem("login") == 1){
    AfterLogin();
}
else{
    p.style.display = "none";
}

function Login(){
    if (inputUn.value === username && inputPw.value === password){
        AfterLogin();
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

function AfterLogin(){
    p.style.display = "block";
    info.style.color = "green";
    info.innerHTML = "Sikeres bejelentkezés!";
    sessionStorage.setItem("login", 1)
    document.getElementById("login").style.display = "none";

    AddNote();
}

function AddNote(){
    if (localStorage.getItem("notes") !== null) {
      JSON.parse(localStorage.getItem("notes")).forEach((element) => {
        notes.push(element);
      });
    }
    notes.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = element;
      ul.appendChild(li);
    })
};


function SaveBtn(){
    if(textArea.value != ""){
        if (textArea.value.split("\n").length > 1){
            textArea.value.split("\n").forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = item;
            ul.appendChild(li)
    
            notes.push(item);
        })
        }
        else{
            const li = document.createElement("li");
            li.innerHTML = textArea.value;
            ul.appendChild(li);
    
            notes.push(textArea.value);
        }
    }
    
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes);
    console.log(localStorage.getItem("notes"));
};

function LogOut(){
    sessionStorage.removeItem("login");
    location.reload();
}

function ClearList(){
    localStorage.removeItem("notes");
    location.reload();
}

function DeleteLast(){
    const lastLi = ul.lastElementChild;

    if (lastLi) {
        ul.removeChild(lastLi);
        notes.pop();
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}