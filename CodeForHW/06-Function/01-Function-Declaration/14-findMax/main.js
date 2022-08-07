// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

function max (...args){
    if (args.length <= 0){
        return "NaN"
    } else if (args.length >= 5) {
        return "Too many arguments"
    }
    return Math.max(...args)
}


console.log(max()); // undefined
console.log(max(2)); // 2
console.log(max(3, 1)); // 3
console.log(max(7, 3, 9, 2)); // 9


