let allItems = [
  1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20
];

let page = 1;
let perPage = 5;

let list = document.querySelector('.list');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

function showItems() {

  list.innerHTML = '';

  let start = (page - 1) * perPage;
  let end = start + perPage;

  for (let i = start; i < end && i < allItems.length; i++) {

    let li = document.createElement('li');
    li.innerText = allItems[i];
    list.appendChild(li);

  }

  if (next) {
    next.disabled = end >= allItems.length;
  }

  if (prev) {
    prev.disabled = page === 1;
  }

}

if (next) {
  next.onclick = function () {
    page++;
    showItems();
  };
}

if (prev) {
  prev.onclick = function () {
    page--;
    showItems();
  };
}

showItems();
