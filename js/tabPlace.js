export const tabPalce = ()=>{
  const tab = document.querySelectorAll('[role="tab"]');
  const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
  
  function tabClick (event){
    tabPanels.forEach(panel =>{
      panel.hidden = true;
    })
     tab.forEach(tab =>{
      tab.setAttribute('aria-selected', false);
    })
    event.currentTarget.setAttribute('aria-selected', true);
    const { id } = event.currentTarget;
    const tabPanel =  tabPanels.find(
      panel => panel.getAttribute('aria-labelledby') === id
    );
    tabPanel.hidden = false;
  }
 

  tab.forEach(tab =>{
    tab.addEventListener('click', tabClick)
  })
}
tabPalce();