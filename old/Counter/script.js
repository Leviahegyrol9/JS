const span = document.getElementById("counter");

function Minus(num){
    span.textContent = parseInt(span.textContent) - parseInt(num)
}
function Plus(num){
    span.textContent = parseInt(span.textContent) + parseInt(num)
}