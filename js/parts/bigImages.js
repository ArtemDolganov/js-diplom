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