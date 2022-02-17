// function updateCaseInput(isIncreasing) {
//     const caseInput = document.getElementById('caseNumber');
//     let caseNumber = caseInput.value;
//     // caseInput.value = parseInt(caseNumber) + 1;
//     if (isIncreasing == true) {
//         // caseInput.value = parseInt(caseNumber) + 1;
//         caseNumber = parseInt(caseNumber) + 1;
//     } else if (caseNumber > 0) {
//         // caseInput.value = parseInt(caseNumber) - 1;
//         caseNumber = parseInt(caseNumber) - 1;
//     }
//     caseInput.value = caseNumber;
//     const caseTotal = document.getElementById('caseTotal');
//     caseTotal.innerText = caseNumber * 59;
// }
// document.getElementById('casePlus').addEventListener('click', function() {
//     // const caseInput = document.getElementById('caseNumber');
//     // const caseNumber = caseInput.value;
//     // caseInput.value = parseInt(caseNumber) + 1;
//     updateCaseInput(true);
// });
// document.getElementById('caseMinus').addEventListener('click', function() {
//     // const caseInput = document.getElementById('caseNumber');
//     // const caseNumber = caseInput.value;
//     // caseInput.value = parseInt(caseNumber) - 1;
//     updateCaseInput(false);
// });
////////////////////////////////////////////////////////////////////
// function updateProductTotal(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + 'Number');
//     let productNumber = productInput.value;
//     if (isIncreasing == true) {
//         productNumber = parseInt(productNumber) + 1;
//     } else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;
//     }
//     productInput.value = productNumber;
//     // update phone total
//     const productTotal = document.getElementById(product + 'Total');
//     productTotal.innerText = productNumber * price;

// };
// // handle phone increase and decrease events
// document.getElementById('phonePlus').addEventListener('click', function() {
//     updateProductTotal('phone', 1219,
//         true);
// });
// document.getElementById('phoneMinus').addEventListener('click', function() {
//     updateProductTotal('phone', 1219,
//         false);
// });
// // handle case increase and decrease events
// document.getElementById('casePlus').addEventListener('click', function() {
//     updateProductTotal('case', 59, true);
// });
// document.getElementById('caseMinus').addEventListener('click', function() {
//     updateProductTotal('case', 59, false);
// });



/////////////////////////////////////////////////////////////////
// function updateProductTotal(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + 'Number');
//     let productNumber = productInput.value;
//     if (isIncreasing == true) {
//         productNumber = parseInt(productNumber) + 1;
//     } else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;
//     }
//     productInput.value = productNumber;
//     const productTotal = document.getElementById(product + 'Total');
//     productTotal.innerText = productNumber * price;
//     // calculate total
//     calculateTotal();
// };

// function getInputValue(product) {
//     const productInput = document.getElementById(product + 'Number');
//     const productNumber = parseInt(productInput.value);
//     return productNumber;
// }

// function calculateTotal() {
//     const phoneTotal = getInputValue('phone') * 1219;
//     const caseTotal = getInputValue('case') * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const texAmount = subTotal / 10;
//     const totalPrice = subTotal + texAmount;
//     // update on the html
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tex-amount').innerText = texAmount;
//     document.getElementById('total-price').innerText = totalPrice;
// }


// document.getElementById('phonePlus').addEventListener('click', function() {
//     updateProductTotal('phone', 1224, true);
// });
// document.getElementById('phoneMinus').addEventListener('click', function() {
//     updateProductTotal('phone', 1224, false);
// });
// document.getElementById('casePlus').addEventListener('click', function() {
//     updateProductTotal('case', 59,
//         true);
// });
// document.getElementById('caseMinus').addEventListener('click', function() {
//     updateProductTotal('case', 59,
//         false);
// });