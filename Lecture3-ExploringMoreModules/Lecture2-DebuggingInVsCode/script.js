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

  // this function gonna print the total of all the products:\
  function printTotalValue(value){
    console.log('Total:',value);
  }

  // expected output: 185
  const grandTotal = calculateTotal(productsList);
 // here we gonna use the printTotalValue function to print the total value of the products:which we have calculated above:with in the grandTotal variable:
 printTotalValue(grandTotal);