console.log("Learning about Debugging Node Js");

// For that here we have same code example:through which we gonna understand that hoe we can debug the code in node js:
function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.quality * product.quantity;
  });
}
const products = [
  { name: "laptop", quality: 1000, quantity: 2 },
  { name: "mobile", quality: 500, quantity: 3 },
  { name: "charger", quality: 50, quantity: 5 },
];
// expected output: 6500
const grandTotal = calculateTotal(products);
console.log('grand Total:',grandTotal);