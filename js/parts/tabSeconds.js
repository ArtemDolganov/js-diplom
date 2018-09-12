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