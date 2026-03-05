let prices = [100, 200, 300];

let box = document.querySelector('.prices');

let total = 0;

for(let i = 0; i < prices.length; i++){

  let div = document.createElement('div');
  div.className = 'item';

  div.innerText = 'Price: ' + prices[i];

  box.appendChild(div);

  total = total + prices[i];

}

let tax = total * 0.10;
let afterTax = total + tax;

let discount = total * 0.05;
let final = afterTax - discount;

let result = document.createElement('div');
result.className = 'result';

result.innerText =
'Total: ' + total +
' | Tax (10%): ' + tax +
' | Discount (5%): ' + discount +
' | Final: ' + final;

box.appendChild(result);
