let num1 = prompt("Enter number1:" );
let num2 = prompt("Enter number2:" );

let isN1Number = num1 && num1.trim() !== '' && !isNaN(num1);
let isN2Number = num2 && num2.trim() !== '' && !isNaN(num2);

if (isN1Number && isN2Number) {
    alert(Number(num1)+Number(num2));
} else {
    alert("Invalid number");
}
