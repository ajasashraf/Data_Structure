function oddEven(arr){
    let oddNumber=[];
    let evenNumber=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
           evenNumber.push(arr[i]);
        }
        else{
            oddNumber.push(arr[i]);
        }
    }
    return{
        oddNumber,
        evenNumber
    }
}

let array=[1,2,3,4,5,6,7,8,9,10];
let results=oddEven(array);

console.log(results.oddNumber);
console.log(results.evenNumber);
  