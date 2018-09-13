(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
  
   
    let modal = require('../parts/modal.js');
    let form = require('../parts/form.js');
    let tabFirst = require('../parts/tabFirst.js');
    let tabSeconds = require('../parts/tabSeconds.js');
    let timer = require('../parts/timer.js');
    let bigImages = require('../parts/bigImages.js');
    
    
    modal();
    form();
    tabFirst();
    tabSeconds();
    timer();
    bigImages();

}); 


},{"../parts/bigImages.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/tabFirst.js":5,"../parts/tabSeconds.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function bigImages() {
	let imagesGallery = document.getElementsByClassName('col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn'),
	imagesBig = document.getElementsByClassName('big_images'),
	imagesMain = document.getElementsByClassName('main_images'),
	imagesRow = document.getElementsByClassName('big_image_cover');


for (let i = 0; i < imagesGallery.length; i++) {
	imagesRow[i].style.top = 'auto';
	imagesRow[i].style.left = 'auto';
}

function tabHide(elementNumber) {

	for(let i = elementNumber; i < imagesGallery.length; i++) {
		imagesBig[i].classList.remove('show');
		imagesBig[i].classList.add('hide');
		
	}
}
tabHide(0);

function tabOpen(g) {
		if (imagesBig[g].classList.contains('hide')) {
			tabHide(0);
			imagesBig[g].classList.remove('hide');
			imagesBig[g].classList.add('show');
			imagesBig[g].classList.add('back_pop_item');
			imagesRow[g].style.display = "flex";

		}
}

for(let j = 0; j < imagesGallery.length; j++) {
	imagesMain[j].addEventListener('click', function() {
		let target = event.target;
		if(target.classList.contains('lupa') || target.classList.contains('main_images')) {
			for(let i = 0; i < imagesGallery.length; i++) {
				if (target == imagesGallery[i] || target == imagesMain[i]) {
					tabOpen(i);
					break;
				}
			}
		}
	});
}
for (let j = 0; j < imagesGallery.length; j++) {
	imagesRow[j].addEventListener('click', function(elem) {
		for (let i = 0; i < imagesGallery.length; i++) {
			if (!isDescendant(imagesRow[i], elem.target)){
			imagesRow[i].style.display = 'none';
			}
		}
	});
}
//проверка на родителя
function isDescendant(parent, child) {
	 let node = child.parentNode;
	 while (node != null) {
		 if (node == parent) {
			 return true;
		 }
		 node = node.parentNode;
	 }
	 return false;
	}
}
module.exports = bigImages;
},{}],3:[function(require,module,exports){
function form () {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByTagName('form'),
		statusMessage = document.createElement('div');

	function setCursorPosition(pos, elem) {
	    elem.focus();
	    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	    else if (elem.createTextRange) {
	        var range = elem.createTextRange();
	        range.collapse(true);
	        range.moveEnd("character", pos);
	        range.moveStart("character", pos);
	        range.select()
	    }
	}

	function mask(event) {
	    let matrix = "_ (___) ___ ____",
	        i = 0,
	        def = matrix.replace(/\D/g, ""),
	        val = this.value.replace(/\D/g, "");
	    if (def.length >= val.length) val = def;
	    this.value = matrix.replace(/./g, function(a) {
	        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	    });
	    if (event.type == "blur") {
	        if (this.value.length == 2) this.value = ""
	    } else setCursorPosition(this.value.length, this)
	};
	    
	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input'),
			input_tel = document.getElementsByName("user_phone");

		input_tel[i].addEventListener("input", mask);
	    input_tel[i].addEventListener("focus", mask);
	    input_tel[i].addEventListener("blur", mask);
		form[i].addEventListener('submit', (event) => {
			form[i].appendChild(statusMessage);
			event.preventDefault();

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form[i]);
	
			request.send(formData);
			
			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						console.log(form[i])
						statusMessage.innerHTML = message.success;
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
			
		});
	};
}

module.exports = form;
},{}],4:[function(require,module,exports){
function modal() {
	let body = document.querySelector('body'),
			popup = document.querySelector('.popup');
			timePopup();
			
	body.addEventListener('click', (e) => {
		clearTimeout(timePopup);
		e.preventDefault();
		let target = e.target;
		
		if(target.classList.contains('header_btn') || target.classList.contains('phone_link')){
			popup.style.display = "block";
		}
		if(target.classList.contains('popup_close') || target.parentElement.classList.contains('popup_close') || target.classList.contains('popup') && !target.classList.contains('popup_form')){
				popup.style.display = "none";
		}
	});
	function timePopup() {
		setTimeout(function() {
				popup.style.display = "block";
		}, 60000)
		}
	
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function tabFirst() {
 //TabFirst

    let tabWrap = document.querySelector('.glazing'),
		tab = document.querySelectorAll('.tab'),
		tabContent = document.getElementsByClassName('tab_content'),
		tabCalc = document.querySelector('.popup_calc'),
		tabCalcInput = tabCalc.getElementsByTagName('input'),
		calcItem = document.querySelector('.balcon_icons'),
		closeCalc = tabCalc.getElementsByTagName('strong')[0];

		for (let i = 0; i < tabCalcInput.length; i++) {
			tabCalcInput[i].addEventListener('change', () =>{
				if(i == 0) {
					calcAll.width = tabCalcInput[i].value;
				} else if (i == 1) {
					calcAll.height = tabCalcInput[i].value;
				}
			});
		}
		
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
		//btn
		tabWrap.addEventListener('click', function(event) {
			let target = event.target;
			if (target.tagName == 'BUTTON') {
				tabCalc.style.display = 'flex';
				document.body.style.overflow = 'hidden';
				event.preventDefault()
			}
		});

		document.body.addEventListener('click', function (event) {
        let target = event.target;
            if (target.classList.contains('popup_calc')) {
 				tabCalc.style.display = 'none';
 				document.body.style.overflow = '';
            }
        });

		closeCalc.addEventListener('click', () => {
			tabCalc.style.display = 'none';
			document.body.style.overflow = '';
		});

		//calc
		let calcContent = document.querySelectorAll('.big_img__items'),
			calcTab = document.querySelectorAll('.balcon_icons_items'),
			calcBtn = document.querySelector('.popup_calc_button'),
			calcNextModal = document.querySelector('.popup_calc_profile'),
			calcInputs = calcNextModal.getElementsByTagName("input"),
			closeNextModal = calcNextModal.getElementsByTagName('strong')[0],
			calcEndBtn = document.querySelector('.popup_calc_profile_button'),
			calcEndPopup = document.querySelector('.popup_calc_end'),
			closeEndPopup = calcEndPopup.getElementsByTagName('strong')[0];
			


		function hideCalcContent (c) {
			for (let i = c; i < calcContent.length; i++) {
				calcContent[i].classList.remove('show');
				calcContent[i].classList.add('hide');
				
			}
		}

		hideCalcContent (1);

		function ShowCalcContent (d) {
			if (calcContent[d].classList.contains('hide')) {
				hideCalcContent(0);
				calcContent[d].classList.remove('hide');
				calcContent[d].classList.add('show');
				
			}
		}

		calcItem.addEventListener('click', (event) => {
			let target = event.target;
			if (target.tagName == 'IMG') {
				event.preventDefault();
				for (let i = 0; i < calcTab.length; i++) {
					if (target == calcTab[i]) {
						ShowCalcContent(i);
						break;
					}
				}
			}
		});
		//  form	

		calcBtn.addEventListener('click', () => {
			tabCalc.style.display = 'none';
			calcNextModal.style.display = 'flex';
		});

	
		for(let i = 0; i < calcInputs.length; i++) {
			if(calcInputs[i].type == "checkbox"){
				calcInputs[i].onchange = function () {
					for(let i = 0; i < calcInputs.length; i++){
						if(calcInputs[i].type == "checkbox"){
							calcInputs[i].checked=false;
							}
							this.checked=true;
						}
					}
				}
			}

		closeNextModal.addEventListener('click', () => {
			calcNextModal.style.display = 'none';
			document.body.style.overflow = '';
		});

	
		calcEndBtn.addEventListener('click', () => {
			calcNextModal.style.display = 'none';
			calcEndPopup.style.display = 'flex';
		});

		closeEndPopup.addEventListener('click', () => {
			calcEndPopup.style.display = 'none';
			document.body.style.overflow = '';
		});

		let calcEndPopupInput = calcEndPopup.getElementsByTagName('input'),
			checkbox = document.getElementsByName('checkbox-test'),
			calcAll = {
				name,
				number: '',
				width,
				height,
				profile: '',
			};
			

		for (let r = 0; r < calcEndPopupInput.length; r++) {
			calcEndPopupInput[r].addEventListener('change', () => {
				if(i == 0) {
					calcAll.name = calcEndPopupInput[r].value;
				} else if (i == 1) {
					calcAll.number = calcEndPopupInput[r].value;
				}
			});
		}

		for (let z = 0; z < checkbox.length; z++) {
            if (checkbox[z].type === 'radio' && checkbox[z].checked) {
               calcAll.profile = checkbox[z].value;
            }
          }
}
        

module.exports = tabFirst;
},{}],6:[function(require,module,exports){
function tabSeconds() {
    let tabSecond = document.querySelectorAll('.decoration_sliders__items'),
        wrapTabSecond = document.querySelector('.decoration_slider'),
        tabSecondActive = document.querySelectorAll('.no_click'),
        tabSecondContent = document.querySelectorAll('.decoration_content_items');
        
        function hideTabSecond (f) {
            for (let i = f; i < tabSecondContent.length; i++) {
                tabSecondContent[i].classList.remove('show');
                tabSecondContent[i].classList.add('hide');
                tabSecondActive[i].classList.remove('after_click');
            }
        }

        hideTabSecond (1);

        function ShowTabSecond (g) {
            if (tabSecondContent[g].classList.contains('hide')) {
                hideTabSecond(0);
                tabSecondContent[g].classList.remove('hide');
                tabSecondContent[g].classList.add('show');
                tabSecondActive[g].classList.add('after_click');
            }
        }

        wrapTabSecond.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.decoration_sliders__items')) {
                for (let i = 0; i < tabSecond.length; i++) {
                    if (target == tabSecond[i]) {
                        ShowTabSecond(i);
                        break;
                    }
                }
            }
        });
}
module.exports = tabSeconds;
},{}],7:[function(require,module,exports){
function timer() {
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

}
module.exports = timer;
},{}]},{},[1]);
