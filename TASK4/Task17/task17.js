let expenses = [

  { category: 'Food', amount: 200 },
  { category: 'Travel', amount: 500 },
  { category: 'Food', amount: 300 }

];

let box = document.querySelector('.expenseBox');

let table = document.createElement('table');

let header = document.createElement('tr');

header.innerHTML = '<th>Category</th><th>Amount</th>';

table.appendChild(header);

box.appendChild(table);

let totals = {};

let grandTotal = 0;

for(let i = 0; i < expenses.length; i++){

  let row = document.createElement('tr');

  row.innerHTML =
  '<td>' + expenses[i].category + '</td>' +
  '<td>₹' + expenses[i].amount + '</td>';

  table.appendChild(row);

  if(!totals[expenses[i].category]){
    totals[expenses[i].category] = 0;
  }

  totals[expenses[i].category] += expenses[i].amount;

  grandTotal += expenses[i].amount;

}

for(let key in totals){

  let div = document.createElement('div');
  div.className = 'summary';

  div.innerText = key + ': ₹' + totals[key];

  box.appendChild(div);

}

let totalDiv = document.createElement('div');
totalDiv.className = 'summary';

totalDiv.innerText = 'Total: ₹' + grandTotal;

box.appendChild(totalDiv);
