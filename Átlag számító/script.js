const addBTN = document.querySelector("#addBtn");
const subject = document.querySelector("#subject");
const mark = document.querySelector("#marks")
const table = document.querySelector("table");
const averageTd = document.querySelector("#average");
var averages = [];

addBTN.addEventListener("click", () =>{
    if (subject.value == "" || mark.value == "") alert("A mezők üresek!");

    else if (!IsString(subject.value) || !IsNumber(mark.value)) alert("Tantárgyat és jegyet adj meg!");

    else{
        AddItems();

        var allAverage = parseFloat(GetAverage(averages));

        averageTd.innerHTML = allAverage;
    }        
})

function AddItems() {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell1.innerHTML = subject.value;
    var marks = mark.value.trim().split(' ');
    cell2.innerHTML = mark.value;

    var average = parseFloat(GetAverage(marks));

    cell3.innerHTML = average;

    averages.push(average)
}

function GetAverage(array) {
    let sum = 0;

    array.forEach(num => {
        sum += parseFloat(num);
    });

    return `${(sum / array.length).toFixed(2)}`
}

function IsNumber(text) {
    let regex = /^[12345 ]+$/;

    return regex.test(text);
}

function IsString(text) {
    let regex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;

    return regex.test(text);
}