const Name = "Maharashtra "

console.log(Name.split("").join("-"))

//Convert String to number

const money = "10";
console.log(typeof money)

Number1 = parseInt(money);
Number2 = +money;
Number3 = Number(money);

console.log(Number1, Number2, Number3)
// const num = 20;
function x() {
    const num = 10;
    // console.log(num)
}
//console.log(num)
x();


//Convert number to string

const money2 = 10;
console.log(typeof money)

Number1 = money2.toString();
console.log(Number1)

//document.write(Number1)

//print 1 to 10

let n = 10;
for (let i = 0; i < n; i++) {
    document.write(" " + i)
}
let i = 0;
while (i <= 100) {
    console.log("Suyog", i);
    i++;
}

i = 20
do {
    console.log("Suyog Muley", i);
    i++;

}
while (i <= 400)

const arrayList = []
const arrr = new Array();
console.log(typeof arrr)

function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(10, 10))

const car = {
    type: "fiat",
    model: "BMW",
    color: "Red",
}

console.log(typeof car)

car.type = "Toyota";

console.log(car)

car.wheels = 4

console.log(car)



