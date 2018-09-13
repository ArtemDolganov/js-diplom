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

	//Обратный звонок

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