let items=['apple','ball','banana','clothes','orange','banana','apple','pen'];
let list=document.querySelector('.list');
for (let i=0;i<items.length;i++){
  let li=document.createElement('li')
  li.innerText=items[i]

  let count=0;
  //more than 1 count
  for(let j=0;j<items.length;j++){
    if(items[i]===items[j]){
      count++;
    }
  }
  if(count>1){
    li.classList.add('highlight');

  }
  list.appendChild(li);
}
