const inputEmail = document.getElementById("email");
const inputPw = document.getElementById("password");
const inputPwAgain = document.getElementById("passwordAgain");
const passwordInputs = Array.from(document.querySelectorAll("input")).filter(input => input.type == "password");
const info = document.querySelector("h4");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Registration(){
    const isValidEmail = emailRegex.test(inputEmail.value);
    if(inputEmail.value == "" || inputPw.value == "" || inputPwAgain.value == ""){
        info.style.color = "red";
        info.innerHTML = "Töltse ki a mezőket!"
    }
    else if(!isValidEmail){
        info.style.color = "red";
        info.innerHTML = "Hibás email cím!"
    }  
    else if (inputPw.value !== inputPwAgain.value){
        info.style.color = "red";
        info.textContent = "A két jelszó nem egyezik!"
    }
    else{
        info.style.color = "green";
        info.innerHTML = "Sikeres regisztráció!"
    }
}

function ShowPw(){
    passwordInputs.forEach((element) => {
        if (element.type == "password"){
        element.type = "text";
    }
    else{
        element.type = "password";
    }    
    });    
}