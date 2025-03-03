// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory[0].quantity;
let productName = "";

for (let product of inventory) {
  if (product.quantity < minQuantity) {
    minQuantity = product.quantity;
    productName = product.name;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า ${productName} ซึ่งมี ${minQuantity} ชิ้น`)