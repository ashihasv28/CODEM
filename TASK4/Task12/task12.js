let quiz = [

  {
    question: 'What is JavaScript?',
    options: ['Language','Framework','Database'],
    answer: 'Language'
  },

  {
    question: 'Which keyword declares a variable?',
    options: ['var','loop','print'],
    answer: 'var'
  }

];

let container = document.querySelector('.quiz');

let current = 0;
let score = 0;

function showQuestion(){

  container.innerHTML = '';

  if(current < quiz.length){

    let q = document.createElement('div');
    q.className = 'question';
    q.innerText = quiz[current].question;

    container.appendChild(q);

    for(let i = 0; i < quiz[current].options.length; i++){

      let btn = document.createElement('button');
      btn.className = 'option';
      btn.innerText = quiz[current].options[i];

      btn.onclick = function(){

        if(btn.innerText === quiz[current].answer){

          score++;

        }

        current++;
        showQuestion();

      };

      container.appendChild(btn);

    }

  }
  else{

    container.innerHTML = 'Final Score: ' + score + ' / ' + quiz.length;

  }

}

showQuestion();
