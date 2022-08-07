// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

//รับค่า เอาค่าใส่

let name = prompt ("Name");
let amount = +prompt ("Amount");
let price = +prompt ("Price");
let discountPercent = +prompt ("Discount (percent)");



let product = {
    name: name,
    amount:amount,
    price: price
};

if(discountPercent){
    product.discount_percent = discountPercent;
}

let calculateNetPrice = (theProduct) => {
    let price = theProduct.price * theProduct.amount;
    if (theProduct.discount_percent){
        price = (price * (100 - theProduct.discount_percent)) / 100;
    
    }
    return price;
}

console.log(calculateNetPrice(product))