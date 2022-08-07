// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

let isEmptyObj = (obj) => {return Object.keys(obj).length? false:true}

console.log(isEmptyObj({ name: 'abc'}));
console.log(isEmptyObj({}));

