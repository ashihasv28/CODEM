let users = [
{name:'Ashi',age:19,email:'ashi@mail.com'},
{name:'maansha',age:25,email:'maansha@mail.com'}
];

let tableBody = document.querySelector('.tableBody');

function renderTable(){

  tableBody.innerHTML='';

  for(let i=0;i<users.length;i++){

    let row=document.createElement('tr'); //tr is the table row

    row.innerHTML=
    '<td>'+users[i].name+'</td>'+
    '<td>'+users[i].age+'</td>'+
    '<td>'+users[i].email+'</td>'+
    '<td><button class="editBtn">Edit</button></td>'

    tableBody.appendChild(row);

    let editBtn=row.querySelector('.editBtn');

    editBtn.onclick=function(){

      row.innerHTML=
      '<td><input class="nameInput" value="'+users[i].name+'"></td>'+
      '<td><input class="ageInput" value="'+users[i].age+'"></td>'+
      '<td><input class="emailInput" value="'+users[i].email+'"></td>'+
      '<td><button class="saveBtn">Save</button></td>'

      let saveBtn=row.querySelector('.saveBtn');

      saveBtn.onclick=function(){
        users[i].name=row.querySelector('.nameInput').value;
        users[i].age=row.querySelector('.ageInput').value;
        users[i].email=row.querySelector('.emailInput').value;

      renderTable();

      }

    }

  }

}

renderTable()
