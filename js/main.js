'use strict';
// Добавляем нужные переменные 
let 
	tabList 	= document.querySelector('.tab-list'), 
	tab 		= document.querySelectorAll('.tab'),
	tabContent 	= document.querySelectorAll('.tab-content');

tabList.addEventListener('click', function(e) {
	if (e.target && e.target.classList.contains('tab')) {
		let target = e.target;

		e.preventDefault(); // отключаем не нужные действия браузера
	
		for (let i = 0; i < tab.length; i++) { // создаем цикл переберающий все табы  через i
			if (target == tab[i]) {
				tabContent.forEach(function(i) { // перебераем все tab-content и удаляем класс active
					i.classList.remove('active');
				});

				tabContent[i].classList.add('active'); // добавляем нажатому tab-content  класс active
			}
		}
	}
});
