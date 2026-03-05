let fields = [
  { type: 'text', label: 'Name' },
  { type: 'email', label: 'Email' }
];

let form = document.querySelector('.form');
let submitBtn = document.querySelector('.submit');

for (let i = 0; i < fields.length; i++) {

  let label = document.createElement('label');
  label.innerText = fields[i].label;

  let input = document.createElement('input');
  input.type = fields[i].type;
  input.className = 'inputField';

  form.appendChild(label);
  form.appendChild(document.createElement('br'));
  form.appendChild(input);
  form.appendChild(document.createElement('br'));

}

submitBtn.onclick = function () {

  let inputs = document.querySelectorAll('.inputField');
  let formData = [];

  for (let i = 0; i < inputs.length; i++) {

    formData.push(inputs[i].value);

  }

  console.log(formData);

};
