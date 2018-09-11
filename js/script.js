window.addEventListener('DOMContentLoaded', function() {
let popupBtn = document.querySelector('.popup_engineer_btn'), //вызываем кнопку модального окна
   
    //добавляем  модальное окно
	  popupMod = document.querySelector('.popup_engineer'),  
	 // добавляем класс закрытия модального окна.
	 popupClose = popupMod.getElementsByClassName('popup_close')[0]; 
        //добавляем обработчик событий открытия модального окна
     popupBtn.addEventListener('click', function() {
         popupMod.style.display = 'block';
    });
         //добавляем обработчик событий закрития модального окна
    popupClose.addEventListener('click', function() {
        popupMod.style.display = 'none';
	});

	window.addEventListener('click', (e) => {
		let target = e.target;
			if(target.closest('.form') && !target.closest('.popup_close')) {
				target.stopPropagation();
			} else if (target.closest('.popup_engineer'))
				popupMod.style.display = 'none';
				
		});
	
	
	
let phoneLink = document.getElementsByClassName('phone_link'),
    callPopup = document.querySelector('.popup'),  
	closePhone = document.querySelector('.popup_close'); 
	
	phoneLink[0].addEventListener('click', function() {
		callPopup.style.display = 'block';
		
		
    });
    phoneLink[1].addEventListener('click', function() {
		callPopup.style.display = 'block';
		event.preventDefault();
	
	 
    }); 
    closePhone.addEventListener('click', function() {
		callPopup.style.display = 'none';
	
	});
	
	window.addEventListener('click', (e) => {
		let target = e.target;
			if(target.closest('.form') && !target.closest('.popup_close')) {
				target.stopPropagation();
			} else if (target.closest('.popup'))
				callPopup.style.display = 'none';
				
	});

	

	//Tab[0]
let tabWrap = document.getElementsByClassName('glazing_slider')[0],
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

        tabWrap.addEventListener('click', function(event) {
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

	
//Timer
let deadline = '2019/07/04';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor( (t/1000)%60 ), 
    minutes = Math.floor((t/1000/60)%60),
    hours = Math.floor( (t/(10006060)) %24),
    days = Math.floor( (t/(10006060*24)) );


    return {
        'total': t,
        'days' : days, 
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

//функция, которая запускает часы
function setClock(id, endtime){

    let timer = document.getElementsByClassName('timer')[0],
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.innerHTML = (t.days < 10) ? '0' + t.days : t.days;
            hours.innerHTML = (t.hours < 10) ? '0' + t.hours : t.hours;
            minutes.innerHTML = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
            seconds.innerHTML = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

            //остановка таймера
            if (t.total <= 0) {
                let timeInterval;
                clearInterval(timeInterval);
                timer.innerHTML = '00:00:00';
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);


}//конец функции setClock

//вызываем функцию запуска часов
setClock('timer', deadline);

});
