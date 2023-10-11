for(var x=1; x<=100; x++){
    if((x%3)==0 && (x%5)==0){
        console.log("FizzBuzz "+x);
    }
    if((x%3)==0 && (x%5)!=0){
        console.log("Fizz "+x);
    }
    if((x%3)!=0 && (x%5)==0){
        console.log("Buzz "+x);
    }
    if((x%3)!=0 && (x%5)!=0){console.log(x)}
}