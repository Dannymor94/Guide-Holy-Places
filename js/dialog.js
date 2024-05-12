  export const dialog = ()=>{

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const dialog =  document.getElementById('dialog');
  
  open.addEventListener('click', ()=>{
    
    dialog.showModal();
  })
  close.addEventListener('click', ()=>{
    dialog.close();
  })
};
dialog();