function binarySearchRecursive(arr,target,low,high){
if(low>high){
    return -1;
}

const mid = Math.floor((low + high) / 2);
if(arr[mid]=== target){
    return mid;
}else if(arr[mid]>target) {
    return binarySearchRecursive(arr,target,low,mid -1) ;
}else{
    return binarySearchRecursive(arr,target,mid + 1,high);
}

}




let array = [10,15,20,25,35,40,45,50,87];
let value= 20;

const index = binarySearchRecursive(array,value,0,array.length-1);

if(index !== -1){
    console.log(index);
}else{
    console.log("Not found");
}