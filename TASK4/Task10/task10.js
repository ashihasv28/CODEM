let inputs = [];

let container = document.querySelector('.container');

let textarea = document.createElement('textarea');

let submit = document.createElement('button');
submit.innerText = 'Submit';

let count = document.createElement('div');
count.className = 'info';
count.innerText = 'Characters: 0';

let longest = document.createElement('div');
longest.className = 'info';
longest.innerText = 'Longest Input: ';

container.appendChild(textarea);
container.appendChild(submit);
container.appendChild(count);
container.appendChild(longest);

textarea.oninput = function(){

  let text = textarea.value;

  count.innerText = 'Characters: ' + text.length;

};

submit.onclick = function(){

  let text = textarea.value;

  if(text !== ''){

    inputs.push(text);

    let long = '';

    for(let i = 0; i < inputs.length; i++){

      if(inputs[i].length > long.length){

        long = inputs[i];

      }

    }

    longest.innerText = 'Longest Input: ' + long;

    textarea.value = '';
    count.innerText = 'Characters: 0';

  }

};
