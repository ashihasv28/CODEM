let users = [1,2,3,4];

let orders = [500,1200,800];

let revenue = [5000,3000];

let dash = document.querySelector('.dashboard');

function showSummary(){

  dash.innerHTML = '';

  let totalUsers = users.length;

  let totalOrders = orders.length;

  let totalRevenue = 0;

  for(let i = 0; i < revenue.length; i++){

    totalRevenue += revenue[i];

  }

  let card1 = document.createElement('div');
  card1.className = 'card';
  card1.innerText = 'Total Users: ' + totalUsers;

  let card2 = document.createElement('div');
  card2.className = 'card';
  card2.innerText = 'Total Orders: ' + totalOrders;

  let card3 = document.createElement('div');
  card3.className = 'card';
  card3.innerText = 'Total Revenue: ₹' + totalRevenue;

  dash.appendChild(card1);
  dash.appendChild(card2);
  dash.appendChild(card3);

}

showSummary();
