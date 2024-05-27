//   export const dialog = ()=>{

//   const open = document.getElementById('open');
//   const close = document.getElementById('close');
//   const dialog =  document.getElementById('dialog');
  
//   open.addEventListener('click', ()=>{
    
//     dialog.showModal();
//   })
//   close.addEventListener('click', ()=>{
//     dialog.close();
//   })
// };
// dialog();

 export const closeItem = () =>{
  const inner = document.getElementById('header-inner');
  const cross = document.getElementById('header-cross');
  const HeaderText = document.getElementById('HeaderTextPop');
  
  const icon = document.getElementsByClassName('nav__logo');
  Array.from(icon).forEach(icon => {
    icon.addEventListener('click',()=>{
      HeaderText.classList.toggle('active');
    })
  });
  inner.addEventListener('click', ()=>{
    inner.style.display = 'none';
  })
  cross.addEventListener('click' , ()=>{
  inner.style.display = 'none';
})
};
closeItem();

