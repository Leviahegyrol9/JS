const number = 47;

var oszthato = false;

for (i = 2; i < number; i++)
{
    if(number % i === 0)
    {
        oszthato = true;
        break;
    }
}

if (oszthato)
{
    console.log("Sajnos nem nyertél!")
}
else{
    console.log("Nyertél!")
}

const percentage = 75;

if (percentage < 0)
{
    console.log("Nem lehet az érték 0-nál kisebb!")
}
else if (percentage > 100)
{
    console.log("Nem lehet az érték 100-nál nagyobb!")
}
else if (percentage >= 89 && percentage <= 100)
{
    console.log("Jeles")
}
else if (percentage >= 76 && percentage <= 88)
{
    console.log("Jó")
}
else if (percentage >= 63 && percentage <= 75)
{
    console.log("Közepes")
}
else if (percentage >= 50 && percentage <= 62)
{
    console.log("Elegséges")
}
else
{
    console.log("Elégtelen")
}

const also = 42;
const felso = 100;

var osszeg = 0;

for (i = also; i <= felso; i++)
{
    if (i % 2 === 0)
    {
        osszeg += i;
    }
}

console.log(`A(z) [${also}; ${felso}] intervallumba eso paros szamok osszege: ${osszeg}`)

// szamologép hazi