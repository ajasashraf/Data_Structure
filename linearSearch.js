function linearSearch(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i;
        }
    }
    return -1;
}

let array=[4,7,3,9,5];
let value=8;

const index = linearSearch(array,value);
console.log(index);
