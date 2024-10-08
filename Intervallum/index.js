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