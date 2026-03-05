let rules = [

  { rule: 'Minimum 8 characters', isPassed: false },

  { rule: 'At least one number', isPassed: false },

  { rule: 'At least one uppercase letter', isPassed: false },

  { rule: 'At least one special character', isPassed: false }

];

let box = document.querySelector('.passwordBox');

let input = document.createElement('input');
input.type = 'password';
input.className = 'input';
input.placeholder = 'Enter password';

let list = document.createElement('div');

box.appendChild(input);
box.appendChild(list);

function checkPassword(){

  let pass = input.value;

  rules[0].isPassed = pass.length >= 8;
  rules[1].isPassed = /[0-9]/.test(pass);
  rules[2].isPassed = /[A-Z]/.test(pass);
  rules[3].isPassed = /[!@#$%^&*]/.test(pass);

  showRules();

}

function showRules(){

  list.innerHTML = '';

  let failed = [];

  for(let i = 0; i < rules.length; i++){

    let div = document.createElement('div');
    div.className = 'rule';

    if(rules[i].isPassed){

      div.classList.add('pass');
      div.innerText = '✓ ' + rules[i].rule;

    }
    else{

      div.classList.add('fail');
      div.innerText = '✗ ' + rules[i].rule;

      failed.push(rules[i].rule);

    }

    list.appendChild(div);

  }

}

input.oninput = function(){

  checkPassword();

};

showRules();
