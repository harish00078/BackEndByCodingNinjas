console.log("Learning about Debugging Node Js");

// For that here we have same code example:through which we gonna understand that hoe we can debug the code in node js:
function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.quality * product.quantity;
  });
  return total;
}
const products = [
  { name: "laptop", quality: 50, quantity: 2 },
  { name: "mobile", quality: 25, quantity: 1 },
  { name: "charger", quality: 30, quantity: 2 },
];
// expected output: 185
const grandTotal = calculateTotal(products);
console.log('grand Total:',grandTotal);