let comments = [];

let box = document.querySelector('.commentBox');

let input = document.createElement('input');
input.className = 'input';
input.placeholder = 'Enter comment';

let btn = document.createElement('button');
btn.innerText = 'Submit';

let list = document.createElement('div');

box.appendChild(input);
box.appendChild(btn);
box.appendChild(list);

function showComments(){

  list.innerHTML = '';

  if(comments.length === 0){

    list.innerText = 'No Comments In the Array';

  }
  else{

    let limit = comments.length;

    if(limit > 5){
      limit = 5;
    }

    for(let i = 0; i < limit; i++){

      let div = document.createElement('div');
      div.className = 'comment';

      div.innerText = comments[comments.length - 1 - i];

      list.appendChild(div);

    }

  }

}

btn.onclick = function(){

  let text = input.value;

  if(text !== ''){

    comments.push(text);

    input.value = '';

    showComments();

  }

};

showComments();
