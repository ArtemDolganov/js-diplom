"use strict";

(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
				}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];return o(n || r);
				}, p, p.exports, r, e, n, t);
			}return n[i].exports;
		}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
			o(t[i]);
		}return o;
	}return r;
})()({ 1: [function (require, module, exports) {
		window.addEventListener('DOMContentLoaded', function () {

			var modal = require('../parts/modal.js');
			var form = require('../parts/form.js');
			var tabFirst = require('../parts/tabFirst.js');
			var tabSeconds = require('../parts/tabSeconds.js');
			var timer = require('../parts/timer.js');
			var bigImages = require('../parts/bigImages.js');

			modal();
			form();
			tabFirst();
			tabSeconds();
			timer();
			bigImages();
		});
	}, { "../parts/bigImages.js": 2, "../parts/form.js": 3, "../parts/modal.js": 4, "../parts/tabFirst.js": 5, "../parts/tabSeconds.js": 6, "../parts/timer.js": 7 }], 2: [function (require, module, exports) {
		function bigImages() {
			var imagesGallery = document.getElementsByClassName('col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn'),
			    imagesBig = document.getElementsByClassName('big_images'),
			    imagesMain = document.getElementsByClassName('main_images'),
			    imagesRow = document.getElementsByClassName('big_image_cover');

			for (var _i = 0; _i < imagesGallery.length; _i++) {
				imagesRow[_i].style.top = 'auto';
				imagesRow[_i].style.left = 'auto';
			}

			function tabHide(elementNumber) {

				for (var _i2 = elementNumber; _i2 < imagesGallery.length; _i2++) {
					imagesBig[_i2].classList.remove('show');
					imagesBig[_i2].classList.add('hide');
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

			for (var j = 0; j < imagesGallery.length; j++) {
				imagesMain[j].addEventListener('click', function () {
					var target = event.target;
					if (target.classList.contains('lupa') || target.classList.contains('main_images')) {
						for (var _i3 = 0; _i3 < imagesGallery.length; _i3++) {
							if (target == imagesGallery[_i3] || target == imagesMain[_i3]) {
								tabOpen(_i3);
								break;
							}
						}
					}
				});
			}
			for (var _j = 0; _j < imagesGallery.length; _j++) {
				imagesRow[_j].addEventListener('click', function (elem) {
					for (var _i4 = 0; _i4 < imagesGallery.length; _i4++) {
						if (!isDescendant(imagesRow[_i4], elem.target)) {
							imagesRow[_i4].style.display = 'none';
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
	}, {}], 3: [function (require, module, exports) {
		function form() {
			var message = new Object();
			message.loading = "Загрузка...";
			message.success = "Спасибо! Скоро мы с Вами свяжемся";
			message.failure = "Что-то пошло не так...";

			var form = document.getElementsByTagName('form'),
			    statusMessage = document.createElement('div');

			function setCursorPosition(pos, elem) {
				elem.focus();
				if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
					var range = elem.createTextRange();
					range.collapse(true);
					range.moveEnd("character", pos);
					range.moveStart("character", pos);
					range.select();
				}
			}

			function mask(event) {
				var matrix = "_ (___) ___ ____",
				    i = 0,
				    def = matrix.replace(/\D/g, ""),
				    val = this.value.replace(/\D/g, "");
				if (def.length >= val.length) val = def;
				this.value = matrix.replace(/./g, function (a) {
					return (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
					);
				});
				if (event.type == "blur") {
					if (this.value.length == 2) this.value = "";
				} else setCursorPosition(this.value.length, this);
			};

			var _loop = function _loop(_i5) {
				var input = form[_i5].getElementsByTagName('input'),
				    input_tel = document.getElementsByName("user_phone");

				input_tel[_i5].addEventListener("input", mask);
				input_tel[_i5].addEventListener("focus", mask);
				input_tel[_i5].addEventListener("blur", mask);
				form[_i5].addEventListener('submit', function (event) {
					form[_i5].appendChild(statusMessage);
					event.preventDefault();

					//AJAX
					var request = new XMLHttpRequest();
					request.open("POST", 'server.php');

					request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

					var formData = new FormData(form[_i5]);

					request.send(formData);

					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							statusMessage.innerHTML = message.loading;
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								console.log(form[_i5]);
								statusMessage.innerHTML = message.success;
							} else {
								statusMessage.innerHTML = message.failure;
							}
						}
					};
					for (var _i6 = 0; _i6 < input.length; _i6++) {
						input[_i6].value = '';
					}
				});
			};

			for (var _i5 = 0; _i5 < form.length; _i5++) {
				_loop(_i5);
			};
		}

		module.exports = form;
	}, {}], 4: [function (require, module, exports) {
		function modal() {
			var body = document.querySelector('body'),
			    popup = document.querySelector('.popup');
			timePopup();

			body.addEventListener('click', function (e) {
				clearTimeout(timePopup);
				e.preventDefault();
				var target = e.target;

				if (target.classList.contains('header_btn') || target.classList.contains('phone_link')) {
					popup.style.display = "block";
				}
				if (target.classList.contains('popup_close') || target.parentElement.classList.contains('popup_close') || target.classList.contains('popup') && !target.classList.contains('popup_form')) {
					popup.style.display = "none";
				}
			});
			function timePopup() {
				setTimeout(function () {
					popup.style.display = "block";
				}, 60000);
			}
		}

		module.exports = modal;
	}, {}], 5: [function (require, module, exports) {
		function tabFirst() {
			//TabFirst

			var tabWrap = document.querySelector('.glazing'),
			    tab = document.querySelectorAll('.tab'),
			    tabContent = document.getElementsByClassName('tab_content'),
			    tabCalc = document.querySelector('.popup_calc'),
			    tabCalcInput = tabCalc.getElementsByTagName('input'),
			    calcItem = document.querySelector('.balcon_icons'),
			    closeCalc = tabCalc.getElementsByTagName('strong')[0];

			var _loop2 = function _loop2(_i7) {
				tabCalcInput[_i7].addEventListener('change', function () {
					if (_i7 == 0) {
						calcAll.width = tabCalcInput[_i7].value;
					} else if (_i7 == 1) {
						calcAll.height = tabCalcInput[_i7].value;
					}
				});
			};

			for (var _i7 = 0; _i7 < tabCalcInput.length; _i7++) {
				_loop2(_i7);
			}

			function hideTabContent(a) {
				for (var _i8 = a; _i8 < tabContent.length; _i8++) {
					tabContent[_i8].classList.remove('show');
					tabContent[_i8].classList.add('hide');
					tab[_i8].classList.remove('active');
				}
			}

			hideTabContent(1);

			function ShowTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
					tab[b].classList.add('active');
				}
			}

			tabWrap.addEventListener('click', function (event) {
				var target = event.target;
				if (target.matches('.tab')) {
					for (var _i9 = 0; _i9 < tab.length; _i9++) {
						if (target == tab[_i9]) {
							ShowTabContent(_i9);
							break;
						}
					}
				}
			});
			//btn
			tabWrap.addEventListener('click', function (event) {
				var target = event.target;
				if (target.tagName == 'BUTTON') {
					tabCalc.style.display = 'flex';
					document.body.style.overflow = 'hidden';
					event.preventDefault();
				}
			});

			document.body.addEventListener('click', function (event) {
				var target = event.target;
				if (target.classList.contains('popup_calc')) {
					tabCalc.style.display = 'none';
					document.body.style.overflow = '';
				}
			});

			closeCalc.addEventListener('click', function () {
				tabCalc.style.display = 'none';
				document.body.style.overflow = '';
			});

			//calc
			var calcContent = document.querySelectorAll('.big_img__items'),
			    calcTab = document.querySelectorAll('.balcon_icons_items'),
			    calcBtn = document.querySelector('.popup_calc_button'),
			    calcNextModal = document.querySelector('.popup_calc_profile'),
			    calcInputs = calcNextModal.getElementsByTagName("input"),
			    closeNextModal = calcNextModal.getElementsByTagName('strong')[0],
			    calcEndBtn = document.querySelector('.popup_calc_profile_button'),
			    calcEndPopup = document.querySelector('.popup_calc_end'),
			    closeEndPopup = calcEndPopup.getElementsByTagName('strong')[0];

			function hideCalcContent(c) {
				for (var _i10 = c; _i10 < calcContent.length; _i10++) {
					calcContent[_i10].classList.remove('show');
					calcContent[_i10].classList.add('hide');
				}
			}

			hideCalcContent(1);

			function ShowCalcContent(d) {
				if (calcContent[d].classList.contains('hide')) {
					hideCalcContent(0);
					calcContent[d].classList.remove('hide');
					calcContent[d].classList.add('show');
				}
			}

			calcItem.addEventListener('click', function (event) {
				var target = event.target;
				if (target.tagName == 'IMG') {
					event.preventDefault();
					for (var _i11 = 0; _i11 < calcTab.length; _i11++) {
						if (target == calcTab[_i11]) {
							ShowCalcContent(_i11);
							break;
						}
					}
				}
			});
			//  form	

			calcBtn.addEventListener('click', function () {
				tabCalc.style.display = 'none';
				calcNextModal.style.display = 'flex';
			});

			for (var _i12 = 0; _i12 < calcInputs.length; _i12++) {
				if (calcInputs[_i12].type == "checkbox") {
					calcInputs[_i12].onchange = function () {
						for (var _i13 = 0; _i13 < calcInputs.length; _i13++) {
							if (calcInputs[_i13].type == "checkbox") {
								calcInputs[_i13].checked = false;
							}
							this.checked = true;
						}
					};
				}
			}

			closeNextModal.addEventListener('click', function () {
				calcNextModal.style.display = 'none';
				document.body.style.overflow = '';
			});

			calcEndBtn.addEventListener('click', function () {
				calcNextModal.style.display = 'none';
				calcEndPopup.style.display = 'flex';
			});

			closeEndPopup.addEventListener('click', function () {
				calcEndPopup.style.display = 'none';
				document.body.style.overflow = '';
			});

			var calcEndPopupInput = calcEndPopup.getElementsByTagName('input'),
			    checkbox = document.getElementsByName('checkbox-test'),
			    calcAll = {
				name: name,
				number: '',
				width: width,
				height: height,
				profile: ''
			};

			var _loop3 = function _loop3(r) {
				calcEndPopupInput[r].addEventListener('change', function () {
					if (i == 0) {
						calcAll.name = calcEndPopupInput[r].value;
					} else if (i == 1) {
						calcAll.number = calcEndPopupInput[r].value;
					}
				});
			};

			for (var r = 0; r < calcEndPopupInput.length; r++) {
				_loop3(r);
			}

			for (var z = 0; z < checkbox.length; z++) {
				if (checkbox[z].type === 'radio' && checkbox[z].checked) {
					calcAll.profile = checkbox[z].value;
				}
			}
		}

		module.exports = tabFirst;
	}, {}], 6: [function (require, module, exports) {
		function tabSeconds() {
			var tabSecond = document.querySelectorAll('.decoration_sliders__items'),
			    wrapTabSecond = document.querySelector('.decoration_slider'),
			    tabSecondActive = document.querySelectorAll('.no_click'),
			    tabSecondContent = document.querySelectorAll('.decoration_content_items');

			function hideTabSecond(f) {
				for (var _i14 = f; _i14 < tabSecondContent.length; _i14++) {
					tabSecondContent[_i14].classList.remove('show');
					tabSecondContent[_i14].classList.add('hide');
					tabSecondActive[_i14].classList.remove('after_click');
				}
			}

			hideTabSecond(1);

			function ShowTabSecond(g) {
				if (tabSecondContent[g].classList.contains('hide')) {
					hideTabSecond(0);
					tabSecondContent[g].classList.remove('hide');
					tabSecondContent[g].classList.add('show');
					tabSecondActive[g].classList.add('after_click');
				}
			}

			wrapTabSecond.addEventListener('click', function (event) {
				var target = event.target;
				if (target.matches('.decoration_sliders__items')) {
					for (var _i15 = 0; _i15 < tabSecond.length; _i15++) {
						if (target == tabSecond[_i15]) {
							ShowTabSecond(_i15);
							break;
						}
					}
				}
			});
		}
		module.exports = tabSeconds;
	}, {}], 7: [function (require, module, exports) {
		function timer() {
			var deadline = '2019/07/04';

			function getTimeRemaining(endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date()),
				    seconds = Math.floor(t / 1000 % 60),
				    minutes = Math.floor(t / 1000 / 60 % 60),
				    hours = Math.floor(t / 10006060 % 24),
				    days = Math.floor(t / (10006060 * 24));

				return {
					'total': t,
					'days': days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			}

			//функция, которая запускает часы
			function setClock(id, endtime) {

				var timer = document.getElementsByClassName('timer')[0],
				    days = timer.querySelector('.days'),
				    hours = timer.querySelector('.hours'),
				    minutes = timer.querySelector('.minutes'),
				    seconds = timer.querySelector('.seconds');

				function updateClock() {
					var t = getTimeRemaining(endtime);
					days.innerHTML = t.days < 10 ? '0' + t.days : t.days;
					hours.innerHTML = t.hours < 10 ? '0' + t.hours : t.hours;
					minutes.innerHTML = t.minutes < 10 ? '0' + t.minutes : t.minutes;
					seconds.innerHTML = t.seconds < 10 ? '0' + t.seconds : t.seconds;

					//остановка таймера
					if (t.total <= 0) {
						var _timeInterval = void 0;
						clearInterval(_timeInterval);
						timer.innerHTML = '00:00:00';
					}
				}

				updateClock();
				var timeInterval = setInterval(updateClock, 1000);
			} //конец функции setClock

			//вызываем функцию запуска часов
			setClock('timer', deadline);
		}
		module.exports = timer;
	}, {}] }, {}, [1]);