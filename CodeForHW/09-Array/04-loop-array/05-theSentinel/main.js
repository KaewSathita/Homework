// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

let arr = [];
let isNumber = true;

do {
    let num = prompt("Number:");

    isNumber = num && !isNaN(num); //

    if(isNumber){
        arr.push(Number(num))

    }
} while (isNumber);

let sum = 0;
for (var i=0; i<arr.length; i++) {
    sum += arr[i];

}

console.log(sum)