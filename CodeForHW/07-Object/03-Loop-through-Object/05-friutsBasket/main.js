07-03-05

let fruit = {};

for (var i = 0; i<4 ; i++) {
    let name = prompt("Enter Fruit");
    let number = prompt("Enter number");

if (number > 1) {
    name += "s"
}

fruit[name] = number;


}

console.log(fruit)