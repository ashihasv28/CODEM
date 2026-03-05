let texts = ['JavaScript', 'Java', 'Python', 'React'];

let input = document.querySelector('.search');
let result = document.querySelector('.result');

function showData(data) {

  result.innerHTML = '';

  if (data.length === 0) {
    result.innerHTML = '<li>No results found</li>';
    return;
  }

  for (let i = 0; i < data.length; i++) {

    let li = document.createElement('li');
    li.innerText = data[i];

    result.appendChild(li);

  }

}

input.oninput = function () {

  let value = input.value.toLowerCase();
  let filtered = [];

  for (let i = 0; i < texts.length; i++) {

    if (texts[i].toLowerCase().includes(value)) {
      filtered.push(texts[i]);
    }

  }

  showData(filtered);

};

showData(texts);
