let textBox = document.querySelector('.textBox');
let count = document.querySelector('.count');

textBox.oninput = function(){

  let length = textBox.value.length;

  count.innerText = 'Characters: ' + length;

};
