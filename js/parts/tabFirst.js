function tabFirst() {
 //TabFirst
        
 let tabFirst = document.getElementsByClassName('glazing_slider')[0],
 tab = document.querySelectorAll('.tab'),
 tabContent = document.getElementsByClassName('tab_content');
 
 function hideTabContent (a) {
     for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
         tab[i].classList.remove('active');
     }
 }
 
  hideTabContent(1)

 function ShowTabContent (b) {
     if (tabContent[b].classList.contains('hide')) {
         hideTabContent(0);
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
         tab[b].classList.add('active');
         
    }
 }

 tabFirst.addEventListener('click', function(event) {
     let target = event.target;
     if(target.matches('.tab')) {
         for (let i = 0; i < tab.length; i++) {
             if (target == tab[i]) {
                 ShowTabContent(i);
                 break;
             }
         }
     }

 });
}
module.exports = tabFirst;