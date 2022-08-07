// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->


let x = +prompt("EnterNumber")
let dividen = 10;
let sum = 0;

while (x != 0){
    let result = x % dividen;
    sum += result

    x = Math.floor(x/dividen)
}

console.log(sum)
