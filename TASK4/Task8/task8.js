let students = [
  { name: 'Ashi', present: true },
  { name: 'vanaja', present: false },
  { name: 'mizhina', present: true }
];

let list = document.querySelector('.studentList');
let summary = document.querySelector('.summary');

function showStudents(){

  list.innerHTML = '';

  let present = 0;
  let absent = 0;

  for(let i = 0; i < students.length; i++){

    let li = document.createElement('li');

    let text = document.createElement('span');

    let status = students[i].present ? 'Present' : 'Absent';

    text.innerText = students[i].name + ' - ' + status;

    let btn = document.createElement('button');
    btn.innerText = 'Toggle';

    btn.onclick = function(){

      students[i].present = !students[i].present;

      showStudents();

    };

    li.appendChild(text);
    li.appendChild(btn);

    list.appendChild(li);

    if(students[i].present){
      present++;
    }else{
      absent++;
    }

  }

  summary.innerText = 'Present: ' + present + ' | Absent: ' + absent;

}

showStudents();
