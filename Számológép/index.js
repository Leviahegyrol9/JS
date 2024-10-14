const num1 = 10;
const num2 = 2;
var operation = "+";
var result = null;

console.log(`Első szám: ${num1}\nMásodik szám: ${num2}\nMűvelet: ${operation}\n`)

if (operation != "+" && operation != "-" && operation != "*" && operation != "/")
{
    console.log("Hibas muveleti jel!")
}
else if (operation == "/" && num2 === 0)
{
    console.log("Ejnye, nullaval nem osztunk!");
}
else
{
    switch (operation)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    console.log(`Az eredmény: ${result}`);
}