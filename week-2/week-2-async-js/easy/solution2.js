
let i = 1
function print(){
  console.clear();
  console.log(i);
  i += 1
    setTimeout(print,1000)
}

setTimeout(print,1000)