
function createHTMLElement(tag, text){
    const element = document.createElement(tag);
    element.innerText = text;
    return element;
}
const h1Element = createHTMLElement('h1', 'homework#40');
document.body.append(h1Element);
console.log(h1Element);


// 1)

let number = 1;
function makeCounter(){
    return function(){
        return number++;
    };
}
let k = makeCounter();
let k2 = makeCounter();
console.log(k());
console.log(k2());
console.log(k());
console.log(k2());


// 2)

function sum(a){
    return function (b){
        return a + b; 
    }
}
sum(1)(2);
sum(5)(-1);
console.log(sum(1)(2));
console.log(sum(5)(-1));


// 3)

function sumTo(n){
    if (n === 0) 
    return 0;
    if (n === 1) 
    return 1;
    return n + sumTo(n - 1);
}
sumTo(100);
console.log(sumTo(100));

