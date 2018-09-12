(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
  
   
    let modal = require('../parts/modal.js');
    let form = require('../parts/form.js');
    let tabFirst = require('../parts/tabFirst.js');
    let tabSeconds = require('../parts/tabSeconds.js');
    let calc = require('../parts/calc.js');
    let timer = require('../parts/timer.js');
    let bigImages = require('../parts/bigImages.js');
    
    
    modal();
    form();
    tabFirst();
    tabSeconds();
    calc();
    timer();
    bigImages();

}); 


},{"../parts/bigImages.js":2,"../parts/calc.js":3,"../parts/form.js":4,"../parts/modal.js":5,"../parts/tabFirst.js":6,"../parts/tabSeconds.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
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
	 var node = child.parentNode;
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
function calc() {
    //Calc
    let popupCalcBtn = document.getElementsByClassName('popup_calc_btn'),
    popupCalc = document.getElementsByClassName('popup_calc')[0],
    popupBalconIcons = document.getElementsByClassName('icons_image'),
    popupBalconBigIcons = popupCalc.getElementsByClassName('big_image'),
    messageText = '',
    imageValue = '',
    windowWidth = document.getElementById('width'),
    windowHeight = document.getElementById('height'),
    popupCalcNextBtn = document.getElementsByClassName('popup_calc_button')[0],
    popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
    popupTypeOfWork = document.getElementById('view_type'),
    selectValue = "tree",
    checkbox = document.getElementsByClassName("checkbox"),
    checkboxCustom = document.getElementsByClassName("checkbox-custom"),
    checkboxLabel = document.getElementsByClassName("label"),
    styleOfMaterial = '',
    popupCalcProfileNextBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
    popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
    messagePost = new Object(),
    target = null;

        messagePost.loading = 'Идет отправка';
        messagePost.success = 'Спасибо, письмо отправлено';
        messagePost.failure = 'К сожелению что-то пошло не так';

        popupCalc.style.top = 'auto';
        popupCalc.style.left = 'auto';

        popupCalcNextBtn.disabled = true;

for (let i = 0; i < popupBalconIcons.length; i++){
    popupBalconIcons[i].style.top = 'inherit';
    popupBalconIcons[i].style.left = 'inherit';
}

function tabHideBalcon(elementNumber) {

for(let i = elementNumber; i < popupBalconBigIcons.length; i++) {

    popupBalconBigIcons[i].classList.add('hide');
    popupBalconBigIcons[i].classList.remove('show');
}
}

function windowCaclulator() {

for (let i = 0; i < popupCalcBtn.length; i++){

    popupCalcBtn[i].addEventListener('click', function() {

        popupCalc.style.display = 'block';
    });
}

tabHideBalcon(1);

function tabShowBalcon(number) {

    if (popupBalconBigIcons[number].classList.contains('hide')){

        tabHideBalcon(0);

        popupBalconBigIcons[number].classList.remove('hide');
        popupBalconBigIcons[number].classList.add('show');
    }
}

for (let j = 0; j < popupBalconIcons.length; j++){

    popupBalconIcons[j].addEventListener('click', function() {

        target = event.target;

        if(target.classList.contains('icons_image') ||target.classList.contains('balcon_icons')) {

            for(let i = 0; i < popupBalconIcons.length; i++) {

                if (target == popupBalconIcons[i]) {

                    tabShowBalcon(i);

                    imageValue = popupBalconIcons[i].alt;

                    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

                    break;

                }
            }
        }
    });
}

windowWidth.addEventListener('change', function(){

    if (windowWidth.value == '' || isNaN(windowWidth.value)) {
        popupCalcNextBtn.disabled = true;
        popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";

    } else {
        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
        if (windowHeight.value == '' || isNaN(windowHeight.value)) {
        popupCalcNextBtn.disabled = true;
        
    } else {
        popupCalcNextBtn.disabled = false;
        }
    }
        return messageText;
});

windowHeight.addEventListener('change', function(){

    if (windowHeight.value == '' || isNaN(windowHeight.value)) {
        popupCalcNextBtn.disabled = true;
        popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";

    } else {

    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
        
        if (windowWidth.value == '' || isNaN(windowWidth.value)) {
            popupCalcNextBtn.disabled = true;

        } else {
            popupCalcNextBtn.disabled = false;
        }
    }
        return messageText;
});


popupCalcNextBtn.addEventListener('click', function() {

    popupCalc.style.display = 'none';

    popupCalcProfile.style.display = 'block';

});

popupCalcProfileNextBtn.addEventListener('click', function() {

    popupCalcProfile.style.display = 'none';

    popupCalcEnd.style.display = 'block';

    sendForm(popupCalcEnd);
});

popupTypeOfWork.addEventListener('change', function() {

    selectValue = this.options[this.selectedIndex].value;

    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

    return messageText;
});

for (let i = 0; i < checkbox.length; i++) {

    checkbox[i].addEventListener('change', function(){

        if(checkbox[0].checked == true) {

            styleOfMaterial = checkboxCustom[0].id;

            checkbox[1].disabled = true;
            checkboxCustom[1].disabled = true;
            checkboxLabel[1].disabled = true;

        } else {

            if(checkbox[1].checked == true) {

            styleOfMaterial = checkboxCustom[1].id;

            checkbox[0].disabled = true;
            checkboxCustom[0].disabled = true;
            checkboxLabel[0].disabled = true;

            } else {

                checkbox[0].disabled = false;
                checkboxCustom[0].disabled = false;
                checkboxLabel[0].disabled = false;
                checkbox[1].disabled = false;
                checkboxCustom[1].disabled = false;
                checkboxLabel[1].disabled = false;				}
        }

        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + 'мм тип материала:' + selectValue + 'клиент так же желает вид окон: ' + styleOfMaterial;
        
        return messageText;
    });
}

function sendForm(element) {
    let input = element.getElementsByTagName('input'),
        inputName = input[0],
        inputPhone = input[1],
        popupForm = element.getElementsByClassName('form')[0],
        statusMessage = document.createElement('div'),
        elementBtn = element.getElementsByClassName('btn-block')[0];

    function clearInput(){
        for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        }
    }

    clearInput();

    elementBtn.disabled = true;

    statusMessage.classList.add('status');

    popupForm.appendChild(statusMessage);

    element.style.display = 'block';

    inputPhone.addEventListener('change', function(){

        if(isNaN(inputPhone.value) || inputPhone.value == '') {

            statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

            elementBtn.disabled = true;

            } else {

                statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";

                elementBtn.disabled = false;

                messagePost.txt = "Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value  + messageText;

            }
    });
    
    element.addEventListener('submit', function(elem) {

        elem.preventDefault();

        
        function postData(data) {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');

                request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

                request.onreadystatechange = function() {

                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status === 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };

                request.send(data);

            });
        } // postData

        postData(messagePost.txt)
            .then( () => statusMessage.innerHTML = messagePost.loading)
            .then( () => {
                statusMessage.innerHTML = messagePost.success;
                setTimeout( () => {
                    statusMessage.innerHTML = '';
                }, 3000);
                })
            .catch( () => statusMessage.innerHTML = messagePost.failure)
            .then(clearInput);
    
    });
}
}

windowCaclulator();


let popupCalcCloseBotton = document.getElementsByClassName('popup_calc_close')[0];

popupCalcCloseBotton.addEventListener('click', function() {

popupCalc.style.display = 'none';

tabHideBalcon(0);

popupBalconBigIcons[0].classList.remove('hide');
popupBalconBigIcons[0].classList.add('show');

windowWidth.value = null;

windowHeight.value = null;

});
let popupCalcProfileCloseBotton = document.getElementsByClassName('popup_calc_profile_close')[0];

popupCalcProfileCloseBotton.addEventListener('click', function() {

popupCalcProfile.style.display = 'none';

tabHideBalcon(0);

popupBalconBigIcons[0].classList.remove('hide');
popupBalconBigIcons[0].classList.add('show');

windowWidth.value = null;

windowHeight.value = null;

popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];

checkbox[0].checked = false;

checkbox[1].checked = false;

checkbox.value = null;
});

let popupCalcEndCloseBotton = document.getElementsByClassName('popup_calc_end_close')[0];

popupCalcEndCloseBotton.addEventListener('click', function() {

popupCalcEnd.style.display = 'none';

tabHideBalcon(0);

popupBalconBigIcons[0].classList.remove('hide');
popupBalconBigIcons[0].classList.add('show');

windowWidth.value = null;

windowHeight.value = null;

popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];

checkbox[0].checked = false;

checkbox[1].checked = false;

checkbox.value = null;
});
}

module.exports = calc;
},{}],4:[function(require,module,exports){
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
	    var matrix = "_ (___) ___ ____",
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
},{}],5:[function(require,module,exports){
function modal() {
	let popupBtn = document.querySelector('.popup_engineer_btn'),
	    popupEngineer = document.querySelector('.popup_engineer'),
	    closeEngineer = popupEngineer.getElementsByTagName('strong')[0],
	    popup = document.querySelector('.popup');


	setTimeout(function () {
        popup.style.display = 'flex';
        
    }, 60000);

	popupBtn.addEventListener('click', function () {
		popupEngineer.style.display = 'flex';
		popupEngineer.classList.add('open');
	});

	document.body.addEventListener('click', function (event) {
		var target = event.target;
		if (target.matches('.popup_engineer')) {
			popupEngineer.style.display = 'none';
		}
	});

	closeEngineer.addEventListener('click', function () {
		popupEngineer.style.display = 'none';
	});

	//call-back

	let callOrder = document.getElementsByClassName('phone_link'),
	    callPopup = document.querySelector('.popup'),
	    closeCall = callPopup.getElementsByTagName('strong')[0];

	callOrder[0].addEventListener('click', function () {
		callPopup.style.display = 'flex';
	});

	callOrder[1].addEventListener('click', function () {
		callPopup.style.display = 'flex';
	});

	document.body.addEventListener('click', function (event) {
		let target = event.target;
		if (target.matches('.popup')) {
			callPopup.style.display = 'none';
		}
	});

	closeCall.addEventListener('click', function () {
		callPopup.style.display = 'none';
	});
}

module.exports = modal;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
