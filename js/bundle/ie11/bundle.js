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

            var modalForm = require('../parts/modalForm.js');
            var tabFirst = require('../parts/tabFirst.js');
            var tabSeconds = require('../parts/tabSeconds.js');
            var calc = require('../parts/calc.js');
            var timer = require('../parts/timer.js');
            var bigImages = require('../parts/bigImages.js');

            modalForm();
            tabFirst();
            tabSeconds();
            calc();
            timer();
            bigImages();
        });
    }, { "../parts/bigImages.js": 2, "../parts/calc.js": 3, "../parts/modalForm.js": 4, "../parts/tabFirst.js": 5, "../parts/tabSeconds.js": 6, "../parts/timer.js": 7 }], 2: [function (require, module, exports) {
        function bigImages() {
            var imagesGallery = document.getElementsByClassName('col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn'),
                imagesBig = document.getElementsByClassName('big_images'),
                imagesMain = document.getElementsByClassName('main_images'),
                imagesRow = document.getElementsByClassName('big_image_cover');

            for (var i = 0; i < imagesGallery.length; i++) {
                imagesRow[i].style.top = 'auto';
                imagesRow[i].style.left = 'auto';
            }

            function tabHide(elementNumber) {

                for (var _i = elementNumber; _i < imagesGallery.length; _i++) {
                    imagesBig[_i].classList.remove('show');
                    imagesBig[_i].classList.add('hide');
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
                        for (var _i2 = 0; _i2 < imagesGallery.length; _i2++) {
                            if (target == imagesGallery[_i2] || target == imagesMain[_i2]) {
                                tabOpen(_i2);
                                break;
                            }
                        }
                    }
                });
            }
            for (var _j = 0; _j < imagesGallery.length; _j++) {
                imagesRow[_j].addEventListener('click', function (elem) {
                    for (var _i3 = 0; _i3 < imagesGallery.length; _i3++) {
                        if (!isDescendant(imagesRow[_i3], elem.target)) {
                            imagesRow[_i3].style.display = 'none';
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
        function calc() {
            //Calc
            var popupCalcBtn = document.getElementsByClassName('popup_calc_btn'),
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

            for (var i = 0; i < popupBalconIcons.length; i++) {
                popupBalconIcons[i].style.top = 'inherit';
                popupBalconIcons[i].style.left = 'inherit';
            }

            function tabHideBalcon(elementNumber) {

                for (var _i4 = elementNumber; _i4 < popupBalconBigIcons.length; _i4++) {

                    popupBalconBigIcons[_i4].classList.add('hide');
                    popupBalconBigIcons[_i4].classList.remove('show');
                }
            }

            function windowCaclulator() {

                for (var _i5 = 0; _i5 < popupCalcBtn.length; _i5++) {

                    popupCalcBtn[_i5].addEventListener('click', function () {

                        popupCalc.style.display = 'block';
                    });
                }

                tabHideBalcon(1);

                function tabShowBalcon(number) {

                    if (popupBalconBigIcons[number].classList.contains('hide')) {

                        tabHideBalcon(0);

                        popupBalconBigIcons[number].classList.remove('hide');
                        popupBalconBigIcons[number].classList.add('show');
                    }
                }

                for (var j = 0; j < popupBalconIcons.length; j++) {

                    popupBalconIcons[j].addEventListener('click', function () {

                        target = event.target;

                        if (target.classList.contains('icons_image') || target.classList.contains('balcon_icons')) {

                            for (var _i6 = 0; _i6 < popupBalconIcons.length; _i6++) {

                                if (target == popupBalconIcons[_i6]) {

                                    tabShowBalcon(_i6);

                                    imageValue = popupBalconIcons[_i6].alt;

                                    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

                                    break;
                                }
                            }
                        }
                    });
                }

                windowWidth.addEventListener('change', function () {

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

                windowHeight.addEventListener('change', function () {

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

                popupCalcNextBtn.addEventListener('click', function () {

                    popupCalc.style.display = 'none';

                    popupCalcProfile.style.display = 'block';
                });

                popupCalcProfileNextBtn.addEventListener('click', function () {

                    popupCalcProfile.style.display = 'none';

                    popupCalcEnd.style.display = 'block';

                    sendForm(popupCalcEnd);
                });

                popupTypeOfWork.addEventListener('change', function () {

                    selectValue = this.options[this.selectedIndex].value;

                    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

                    return messageText;
                });

                for (var _i7 = 0; _i7 < checkbox.length; _i7++) {

                    checkbox[_i7].addEventListener('change', function () {

                        if (checkbox[0].checked == true) {

                            styleOfMaterial = checkboxCustom[0].id;

                            checkbox[1].disabled = true;
                            checkboxCustom[1].disabled = true;
                            checkboxLabel[1].disabled = true;
                        } else {

                            if (checkbox[1].checked == true) {

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
                                checkboxLabel[1].disabled = false;
                            }
                        }

                        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + 'мм тип материала:' + selectValue + 'клиент так же желает вид окон: ' + styleOfMaterial;

                        return messageText;
                    });
                }

                function sendForm(element) {
                    var input = element.getElementsByTagName('input'),
                        inputName = input[0],
                        inputPhone = input[1],
                        popupForm = element.getElementsByClassName('form')[0],
                        statusMessage = document.createElement('div'),
                        elementBtn = element.getElementsByClassName('btn-block')[0];

                    function clearInput() {
                        for (var _i8 = 0; _i8 < input.length; _i8++) {
                            input[_i8].value = '';
                        }
                    }

                    clearInput();

                    elementBtn.disabled = true;

                    statusMessage.classList.add('status');

                    popupForm.appendChild(statusMessage);

                    element.style.display = 'block';

                    inputPhone.addEventListener('change', function () {

                        if (isNaN(inputPhone.value) || inputPhone.value == '') {

                            statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

                            elementBtn.disabled = true;
                        } else {

                            statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";

                            elementBtn.disabled = false;

                            messagePost.txt = "Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value + messageText;
                        }
                    });

                    element.addEventListener('submit', function (elem) {

                        elem.preventDefault();

                        function postData(data) {

                            return new Promise(function (resolve, reject) {
                                var request = new XMLHttpRequest();

                                request.open('POST', 'server.php');

                                request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

                                request.onreadystatechange = function () {

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

                        postData(messagePost.txt).then(function () {
                            return statusMessage.innerHTML = messagePost.loading;
                        }).then(function () {
                            statusMessage.innerHTML = messagePost.success;
                            setTimeout(function () {
                                statusMessage.innerHTML = '';
                            }, 3000);
                        }).catch(function () {
                            return statusMessage.innerHTML = messagePost.failure;
                        }).then(clearInput);
                    });
                }
            }

            windowCaclulator();

            var popupCalcCloseBotton = document.getElementsByClassName('popup_calc_close')[0];

            popupCalcCloseBotton.addEventListener('click', function () {

                popupCalc.style.display = 'none';

                tabHideBalcon(0);

                popupBalconBigIcons[0].classList.remove('hide');
                popupBalconBigIcons[0].classList.add('show');

                windowWidth.value = null;

                windowHeight.value = null;
            });
            var popupCalcProfileCloseBotton = document.getElementsByClassName('popup_calc_profile_close')[0];

            popupCalcProfileCloseBotton.addEventListener('click', function () {

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

            var popupCalcEndCloseBotton = document.getElementsByClassName('popup_calc_end_close')[0];

            popupCalcEndCloseBotton.addEventListener('click', function () {

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
    }, {}], 4: [function (require, module, exports) {
        function modalForm() {
            //Modal&form
            //Вызов модалок а также отвравка формы
            var popupCallWindow = document.getElementsByClassName('popup')[0],
                popupDialog = popupCallWindow.getElementsByClassName('popup_dialog')[0],
                contactUs = document.getElementsByClassName('contact_us')[0],
                feedback = document.getElementsByClassName('feedback_block')[0],
                callMaster = document.getElementsByClassName('header_btn')[0],
                mainForm = document.getElementsByClassName('col-lg-4 col-sm-8 col-sm-offset-2'),
                message = new Object();
            event.preventDefault();

            popupCallWindow.style.top = 'auto';
            popupCallWindow.style.left = 'auto';
            message.loading = 'Идет отправка';
            message.success = 'Спасибо, письмо отправлено';
            message.failure = 'К сожелению что-то пошло не так';

            function sendForm(element) {
                var input = element.getElementsByTagName('input'),
                    inputName = input[0],
                    inputPhone = input[1],
                    popupForm = element.getElementsByClassName('form')[0],
                    statusMessage = document.createElement('div'),
                    elementBtn = element.getElementsByClassName('btn-block')[0];

                function clearInput() {
                    for (var i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                clearInput();

                elementBtn.disabled = true;

                statusMessage.classList.add('status');

                popupForm.appendChild(statusMessage);

                element.style.display = 'block';

                inputPhone.addEventListener('change', function () {

                    if (isNaN(inputPhone.value) || inputPhone.value == '') {

                        statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

                        elementBtn.disabled = true;
                    } else {
                        statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";
                        elementBtn.disabled = false;
                        message.txt = encodeURIComponent("Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value);
                    }
                });

                element.addEventListener('submit', function (elem) {

                    elem.preventDefault();

                    function postData(data) {

                        return new Promise(function (resolve, reject) {
                            var request = new XMLHttpRequest();

                            request.open('POST', 'server.php');

                            request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

                            request.onreadystatechange = function () {

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
                    }
                    // postData

                    postData(message.txt).then(function () {
                        return statusMessage.innerHTML = message.loading;
                    }).then(function () {
                        statusMessage.innerHTML = message.success;
                        setTimeout(function () {
                            statusMessage.innerHTML = '';
                        }, 3000);
                    }).catch(function () {
                        return statusMessage.innerHTML = message.failure;
                    }).then(clearInput);
                });
            }

            contactUs.addEventListener('click', function () {

                sendForm(popupCallWindow);
            });

            feedback.addEventListener('click', function () {
                event.preventDefault();
                sendForm(popupCallWindow);
            });

            //Нажатие на Крестик
            var popupCloseBotton = popupCallWindow.getElementsByClassName('popup_close')[0];

            popupCloseBotton.addEventListener('click', function () {

                popupCallWindow.style.display = 'none';
            });

            //Подложка

            popupCallWindow.addEventListener('click', function (e) {
                var target = e.target;
                if (target.closest('.form') && !target.closest('.popup_close')) {
                    target.preventDefault();
                } else if (target.closest('.popup')) popupCallWindow.style.display = 'none';
            });
            //Кнопка вызвать мастера  сверху
            callMaster.addEventListener('click', function () {

                sendForm(popupCallWindow);
                event.preventDefault();
            });

            //60 секундный выход модалки
            setTimeout(function () {

                sendForm(popupCallWindow);
            }, 60000);

            //Задание отправки формы для всех бланков
            for (var i = 0; i < mainForm.length; i++) {

                sendForm(mainForm[i]);
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
        module.exports = modalForm;
    }, {}], 5: [function (require, module, exports) {
        function tabFirst() {
            //TabFirst

            var tabFirst = document.getElementsByClassName('glazing_slider')[0],
                tab = document.querySelectorAll('.tab'),
                tabContent = document.getElementsByClassName('tab_content');

            function hideTabContent(a) {
                for (var i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.add('hide');
                    tab[i].classList.remove('active');
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

            tabFirst.addEventListener('click', function (event) {
                var target = event.target;
                if (target.matches('.tab')) {
                    for (var i = 0; i < tab.length; i++) {
                        if (target == tab[i]) {
                            ShowTabContent(i);
                            break;
                        }
                    }
                }
            });
        }
        module.exports = tabFirst;
    }, {}], 6: [function (require, module, exports) {
        function tabSeconds() {
            var tabSecond = document.querySelectorAll('.decoration_sliders__items'),
                wrapTabSecond = document.querySelector('.decoration_slider'),
                tabSecondActive = document.querySelectorAll('.no_click'),
                tabSecondContent = document.querySelectorAll('.decoration_content_items');

            function hideTabSecond(f) {
                for (var i = f; i < tabSecondContent.length; i++) {
                    tabSecondContent[i].classList.remove('show');
                    tabSecondContent[i].classList.add('hide');
                    tabSecondActive[i].classList.remove('after_click');
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
                    for (var i = 0; i < tabSecond.length; i++) {
                        if (target == tabSecond[i]) {
                            ShowTabSecond(i);
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