const rows = 8;
var count = 1;
for (i = 1; i <= rows; i++)
{
    let space = " ".repeat(rows - i);
    let stars = "*".repeat(count);
    console.log(`${space}${stars}`)

    count += 2;
}