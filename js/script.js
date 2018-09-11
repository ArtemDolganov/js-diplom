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

		// Tab[1]

	//     tab = document.getElementsByClassName('decoration_slider'),
	// 	tabContent = document.getElementsByClassName('decoration_content');
	// 	// info = document.getElementsByClassName('info-header')[0],
	// 	// timer = document.getElementsByClassName("timer-numbers");

	// 	console.log(tab);
	// 	console.log(tabContent);
		
     
  

	// function hideTabContent(a) {
	// 	for(let i = a; i < tabContent.length; i++){
	// 		tabContent[i].classList.remove('show');
	// 		tabContent[i].classList.add('hide');
	// 	}	
	// }

	// hideTabContent(1)

	// function showTabContent(b) {
	// 	if (tabContent[b].classList.contains('hide')){
	// 		hideTabContent(0);
	// 		tabContent[b].classList.remove('hide');
	// 		tabContent[b].classList.add('show');
	// 	}
	// }
    // decoration.addEventListener('click', function(event) {
    // 	let target = event.target;
    // 	if(target.className == 'decoration_slider') {
    // 		for (let i = 0; i < tab.length; i++) {
    // 			if(target == tab[i]) {
    // 				showTabContent(i);
    // 				break;
    // 			}
	// 		}
    // 	}
 	// });
	// });
		// // Tab[1]
		// let decoTab = document.getElementsByClassName('decoration_slider')[0],
        // tab = document.querySelectorAll('.tab'),
        // decoContent = document.getElementsByClassName('decoration_content');
        
        // function hideTabContent (a) {
        //     for (let i = a; i < decoContent.length; i++) {
        //        decoContent[i].classList.remove('show');
		// 		decoContent[i].classList.add('hide');
				
				
        //     }
        // }
        
        //  hideTabContent(1)

        // function ShowTabContent (b) {
        //     if (decoContent[b].classList.contains('hide')) {
        //         hideTabContent(0);
        //         decoContent[b].classList.remove('hide');
		// 		decoContent[b].classList.add('show');
				
				
        //     }
        // }

        // tabDeco.addEventListener('click', function(event) {
        //     let target = event.target;
            
        //     if(target.className == 'internal_link no_click after_click'|| target.className == 'external_link no_click' || target.className == 'rising_link no_click' || target.className == 'roof_link no_click' ) {
        //         for (let i = 0; i < tab.length; i++) {
        //             if (target == tab[i]) {
        //                 ShowTabContent(i);
        //                 break;
        //             }
        //         }
        //     }

		// });

// 		//Form 
// 		//Создаем новый объект? чтобы оповещать пользователя о каких то действиях ниже
// 		let message = new Object();
// 		//Оповещение
// 		message.loading = "Згрузка....";
// 		message.success = "Спасибо! Скоро мы с вами свяжемся";
// 		message.failure = "Что то пошло не так....";

// 		//Получаем форму модального окна
// 		let form = document.getElementsByClassName('main-form')[0],
// 		    input = form.getElementsByTagName('input'),
		
// 		//Создаем блок куда поместим наш message
// 		statusMessage = document.createElement('div');
// 		//Назначаем класс новосозданному statusMessage но его пока нет, если захотим создадим
// 		statusMessage.classList.add('status');

// 		//Добавляем обработчик событий
// 		form.addEventListener('submit', function(event) {
// 			//Останавливаем поведение браузера при нажатии на кнопку
// 			event.preventDefault();
// 			//Добавляем наш message в форму
// 			form.appendChild(statusMessage);

// 			//AJAX
// 			//Создаем объект в который с попомощью конструктора помещаем этот объект
// 			let request = new XMLHttpRequest();
// 			//Настройка отправки данных на сервер и путь к нему
// 			request.open("POST", "server.php")

// 			//Указываем кодировку заголовка для коректности
// 			request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");

// 			//Получаем данные из импутов которые ввел пользователь, fromData берет все данные нашей формы
// 			let formData = new FormData(form);
// 			//Отправляем все данные на сервер
// 			request.send(formData);
// 			//Создаем событие которое отслеживает статус отправки запроса в данный момент
// 			request.onreadystatechange = function(){
// 				//создаем условие 
// 				if(request.readyState < 4){
// 					//если запрос не готов выводим лоадинг(пользователь ждет)
// 					statusMessage.innerHTML = message.loading;
// 					//Проверяем на полное соответствие
// 				}else if (request.readyState == 4){
// 					//Проверяем, что ответил сервер
// 					if (request.status == 200 && request.status < 300){
// 						//Сообщаем пользователю, что все ок данные ушли
// 						statusMessage.innerHTML = message.success;
// 						//Добавляем контент на страничку
// 					}
// 					//Если сервер не принял,добавляем сообщение о ошибки
// 					else{
// 						statusMessage.innerHTML = message.failure;		
// 					}
// 				}
// 			}
// //Очищаем все поля ввода от импутов после успешной отправки при помощи цикла
// 			for (let i = 0; i < input.length; i++){
// 				input[i].value = '';
// 			}
// 		});

// 		//Contactform
		
// 		//Получаем форму контактного окна
// 		let contForm = document.getElementById('form'),
// 		    inputCont = contForm.getElementsByTagName('input');
		
	
// 		//Добавляем обработчик событий
// 		contForm.addEventListener('submit', function(event) {
// 			//Останавливаем поведение браузера при нажатии на кнопку
// 			event.preventDefault();
// 			//Добавляем наш message в форму
// 			contForm.appendChild(statusMessage);

// 			//AJAX
// 			//Создаем объект в который с попомощью конструктора помещаем этот объект
// 			let request = new XMLHttpRequest();
// 			//Настройка отправки данных на сервер и путь к нему
// 			request.open("POST", "server.php")

// 			//Указываем кодировку заголовка для коректности
// 			request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");

// 			//Получаем данные из импутов которые ввел пользователь, fromData берет все данные нашей формы
// 			let formData = new FormData(contForm);
// 			//Отправляем все данные на сервер
// 			request.send(formData);
// 			//Создаем событие которое отслеживает статус отправки запроса в данный момент
// 			request.onreadystatechange = function(){
// 				//создаем условие 
// 				if(request.readyState < 4){
// 					//если запрос не готов выводим лоадинг(пользователь ждет)
// 					statusMessage.innerHTML = message.loading;
// 					//Проверяем на полное соответствие
// 				}else if (request.readyState == 4){
// 					//Проверяем, что ответил сервер
// 					if (request.status == 200 && request.status < 300){
// 						//Сообщаем пользователю, что все ок данные ушли
// 						statusMessage.innerHTML = message.success;
// 						//Добавляем контент на страничку
// 					}
// 					//Если сервер не принял,добавляем сообщение о ошибки
// 					else{
// 						statusMessage.innerHTML = message.failure;		
// 					}
// 				}
// 			}
// //Очищаем все поля ввода от импутов после успешной отправки при помощи цикла
// 			for (let i = 0; i < inputCont.length; i++){
// 				inputCont[i].value = '';
// 			}
// 		});
		
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
// let popupCallWindow.addEventListener('click', function(elem) {
//     if (!isDescendant(popupDialog, elem.target)){
//     popupCallWindow.style.display = 'none';
//     popupCallWindow.style.top = 'auto';
//     popupCallWindow.style.left = 'auto';
//     }
// });
// //проверка на родителя
// function isDescendant(parent, child) {
//      let node = child.parentNode;
//      while (node != null) {
//          if (node == parent) {
//              return true;
//          }
//          node = node.parentNode;
//      }
//      return false;
// }
// popupCallWindow = document.getElementsByClassName('popup')[0],
// popupCallWindow.style.top = 'auto';
// popupCallWindow.style.left = 'auto';



//  let popupBtn = document.getElementsByClassName('popup_engineer_btn')[0],
// 		popupEnginer = document.getElementsByClassName('popup_enginer')[0],
// 		closeModalHead = document.getElementsByClassName('poup_close')[1],
// 		closeModalBack = document.getElementsByClassName('poup_dualog')[1];

// 		popupBtn.addEventListener('click', () => popupEnginer.style.display = 'flex');
// 		closeModalHead.addEventListener('click', () => popupEnginer.style.display = 'none');
// 		closeModalBack.addEventListener('click', () => popupEnginer.style.display = 'none');
 // if(target.className == 'tree_link tab active'|| target.className == 'aluminum_link tab' || target.className == 'plastic_link tab' || target.className == 'rise_link tab' || target.className == 'french_link tab' ) {