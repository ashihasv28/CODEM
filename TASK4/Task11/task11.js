let numbers = [];

for(let i = 0; i < 5; i++){
  //to generate random numbers
  numbers.push(Math.floor(Math.random() * 9) + 1);

}

let display = document.querySelector('.numbers');
let start = document.querySelector('.start');

function showNumbers(){

  display.innerText = numbers.join('');

}

showNumbers();

start.onclick = function(){

  bubbleSort();

};

function bubbleSort(){

  let i = 0;
  let j = 0;

  let interval = setInterval(function(){

    if(i < numbers.length){

      if(j < numbers.length - i - 1){

        if(numbers[j] > numbers[j+1]){

          let temp = numbers[j];
          numbers[j] = numbers[j+1];
          numbers[j+1] = temp;

          showNumbers();

        }

        j++;

      }
      else{

        j = 0;
        i++;

      }

    }
    else{

      clearInterval(interval);

    }

  }, 800);

}
