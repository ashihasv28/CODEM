let items = [
  { product: 'Pencil', quantity: 10 },
  { product: 'Papers', quantity: 5 },
  { product: 'Eraser', quantity: 0 }
];

let list = document.querySelector('.inventory');

function showItems(){

  list.innerHTML = '';

  for(let i = 0; i < items.length; i++){

    let li = document.createElement('li');

    let name = document.createElement('span');
    name.className = 'name';
    name.innerText = items[i].product + ' :';

    let qty = document.createElement('span');
    qty.className = 'qty';
    qty.innerText = items[i].quantity;

    li.appendChild(name);
    li.appendChild(qty);

    let add = document.createElement('button');
    add.innerText = '+';

    let minus = document.createElement('button');
    minus.innerText = '-';

    add.onclick = function(){

      items[i].quantity++;
      showItems();

    };

    minus.onclick = function(){

      if(items[i].quantity > 0){
        items[i].quantity--;
      }

      showItems();

    };

    li.appendChild(add);
    li.appendChild(minus);

    list.appendChild(li);

  }

}

showItems();
