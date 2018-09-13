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