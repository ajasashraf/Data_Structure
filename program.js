function hello(str){
    let words = str.split(' ');
    words.reverse();
    let reversed = words.join(' ');
    return reversed;
    
}

const input = 'Hello world Java';
const ans = hello(input);
console.log(ans);
  