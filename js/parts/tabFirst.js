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
            if(target.matches('.popup_calc')) {
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