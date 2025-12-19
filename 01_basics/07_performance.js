//code 1
const t1 = performance.now()
  for(let i=1;i<=10;i++){
    let para = document.createElement('p');
    para.textContent = "This is my car" + i;
    document.body.appendChild(para);
  }
  const t2 = performance.now();
  console.log("Total time by code1 : " +(t2-t1));

  //code2
  const t3 = performance.now();
  let mydiv = document.createElement('div');
  for(let i=1;i<=10;i++){
    let para = document.createElement('p');
    para.textContent="This is my bike " + i;
    mydiv.appendChild(para);
  }
  document.body.appendChild(mydiv)
  const t4 = performance.now();
   console.log("Total time by code1 : " +(t4-t3));

   
   //best code
   let fragment = document.createDocumentFragment();

   for(let i=1;i<=10;i++){
    let para = document.createElement('p');
    para.textContent ="This is my cycle"+i;
    fragment.appendChild(para);
   }
Document.body.appendChild(fragment);