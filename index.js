let secretNum;
secretNum=Number.parseInt(secretNum);
console.log(typeof secretNum)
const secretnumber=()=>{
secretNum = Math.floor((Math.random()*100)+1)
console.log(secretNum)
}
// generate number
const generate_num = ()=>{
let x = document.getElementById('section1');
x.style.display='none'
let y = document.getElementById('section2');
y.style.display='block'
let z = document.getElementById('section3');
z.style.display='none'
setTimeout(()=>{
    secretnumber();
    let a = document.getElementById('section1');
    a.style.display='none'
    let b = document.getElementById('section2');
    b.style.display='none'
    let c = document.getElementById('section3');
    c.style.display='block'
},4000);
}
//check number
const check =()=>{
var value = document.getElementById('field').value;
value = Number.parseInt(value);
    if ( value==secretNum ){
    alert(`Congratulations! The number was ${secretNum}, You won the game.`)
    generate_num();
    }
    else if(value<secretNum)
    {
    alert(`The entered number ${value} is too low, Please Try again!`)
    }
    else if(value>secretNum)
    {
    alert(`The entered number ${value} is too high, Please Try again!`)
    }
}