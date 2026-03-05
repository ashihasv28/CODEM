let products = [
  { name: 'Samsung', price: 60000, category: 'phone' },
  { name: 'iPhone', price: 70000, category: 'phone' },
  { name: 'Macbook', price: 90000, category: 'laptop' },
  { name: 'Dell', price: 50000, category: 'laptop' }
];

function displayProducts(list){

    let table = document.querySelector('.productBody');
    table.innerHTML = '';

    for(let i = 0; i < list.length; i++){
      let row = document.createElement('tr');

      row.innerHTML =
      '<td>' + list[i].name + '</td>' +
      '<td>' + list[i].price + '</td>' +
      '<td>' + list[i].category + '</td>';

      table.appendChild(row);

    }

}

function filterProducts(){

    let category = document.querySelector('.category').value;
    let min = Number(document.querySelector('.min').value);
    let max = Number(document.querySelector('.max').value);

    let filtered = [];

    for(let i = 0; i < products.length; i++){

      let product = products[i];

      let categoryMatch = (category === 'all' || product.category === category);
      let minMatch = (!min || product.price >= min);
      let maxMatch = (!max || product.price <= max);

      if(categoryMatch && minMatch && maxMatch){
        filtered.push(product);
      }

    }

    if(filtered.length === 0){

      document.querySelector('.productBody').innerHTML = '';
      document.querySelector('.message').innerText = 'No products found';

    }
    else{

      document.querySelector('.message').innerText = '';
      displayProducts(filtered);

    }

}

function updateMax(){

    let minInput = document.querySelector('.min');
    let maxInput = document.querySelector('.max');

    let minValue = Number(minInput.value);

    if(maxInput.value === '' || Number(maxInput.value) < minValue){
      maxInput.value = minValue;

    }

}

displayProducts(products);
