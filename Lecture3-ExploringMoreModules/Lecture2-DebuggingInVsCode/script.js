// For that here we have same code example:through which we gonna understand that hoe we can debug the code in node js:
function calculateTotal(products) {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }
  const productsList = [
    { name: "laptop", price: 50, quantity: 2 },
    { name: "mobile", price: 25, quantity: 1 },
    { name: "charger", price: 30, quantity: 2 },
  ];
  // expected output: 185
  const grandTotal = calculateTotal(productsList);
  console.log('grand Total:',grandTotal);