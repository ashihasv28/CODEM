let colors = ['red','blue','green','yellow'];

let grid = document.querySelector('.grid');

let index = 0;

for(let row = 0; row < 3; row++){

  for(let col = 0; col < 5; col++){

    let box = document.createElement('div');

    box.className = 'cell';

    box.style.backgroundColor = colors[index];

    grid.appendChild(box);

    index++;

    if(index === colors.length){

      index = 0;

    }

  }

}
