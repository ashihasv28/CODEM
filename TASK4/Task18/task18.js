let items = ['Item A','Item B','Item C','Item D'];

let list = document.querySelector('.list');

function showItems(){

  list.innerHTML = '';

  for(let i = 0; i < items.length; i++){

    let li = document.createElement('li');

    li.innerText = items[i];

    let up = document.createElement('button');
    up.innerText = 'Move Up';

    let down = document.createElement('button');
    down.innerText = 'Move Down';

    up.onclick = function(){

      if(i > 0){

        let temp = items[i];
        items[i] = items[i - 1];
        items[i - 1] = temp;

        showItems();

      }

    };

    down.onclick = function(){

      if(i < items.length - 1){

        let temp = items[i];
        items[i] = items[i + 1];
        items[i + 1] = temp;

        showItems();

      }

    };

    li.appendChild(up);
    li.appendChild(down);

    list.appendChild(li);

  }

}

showItems();
