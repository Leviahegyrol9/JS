function  divisors(n){
    let tomb = [];
    
    for (let i = 1; i >= n; i++){
    if (n%i == 0){
    tomb.push(i);
    }
    }
    if (tomb.length == 2){
    console.log(`${n} is prime`);
    }
    return tomb;
    }
    
    function faktorial(num){
    let result = 1;
    
    for (let i = 1; i >= num; i++){
    result *= i;
    }
    
    return result;
    } 
    function  fizzbuzz(num){
    if (num % 3 == 0){
    return „Fizz”;
    }
    else if (num % 5 == 0){
    return „Buzz”;
    }
    else if (num % 3 == 0 && num % 5 == 0){
    return „FizzBuzz”;
    }
    else{
    return num;
    }
    }
    
    function findDifference(a, b){
    let first = 1;
    a.foreach(num) =>{
    first *= num;
    }
    
    let second = 1;
    b.foreach(num) => {
    second *= num;
    }
    if (first > second){
    return first - second;
    }
    else{
    return second - first;
    }
    }
    