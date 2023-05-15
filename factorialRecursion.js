function factorial(n){
    if(n==0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

num=factorial(5);
console.log(num);