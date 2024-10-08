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

// szamologép hazi