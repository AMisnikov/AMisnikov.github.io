//DROP_MENU + SEARCH BLOCK

var burgerBtn = document.querySelector('.btn-burger');
var mainMenu = document.querySelector('.main-nav');
var searchBox = document.querySelector('.form-box');
var searchBtn = document.querySelector('.main-nav__link--search');

burgerBtn.addEventListener('click', function() {
    if (searchBox.classList.contains('form-box--active')) {
        searchBox.classList.remove('form-box--active');
    }
    burgerBtn.classList.toggle('btn-burger--active');
    mainMenu.classList.toggle('main-nav--drop');
    //console.dir(mainMenu);
});






searchBtn.addEventListener('click', function() {
    
    if(mainMenu.classList.contains('main-nav--drop')) {
        mainMenu.classList.remove('main-nav--drop');
        burgerBtn.classList.remove('btn-burger--active');
    }

    

    searchBox.classList.toggle('form-box--active');
});



//SLIDER!!!!!


//Список классов

var DOM = {
	slide: '.slider__slide' , //Класс слайда
	slideActive: 'slider__slide--active',//Класс активного слайда
	dotContainer: '.slider__nav-box',//Класс контейнера для точек (пагинация)
	dot: '.slider__dot',//Класс точки
	dotActive: 'slider__dot--active',//Класс активной точки
	dotTemplate: '<div class="slider__dot" id="dot-%"></div>',//Шаблон для точки (обязательно должен содержать % , что последствии будет заменено на порядковый номер)
	btnRight: '.slider__btn--right' ,//Класс кнопки-переключателя слайдов влево
	btnLeft: '.slider__btn--left',//Класс кнопки-переключателя слайдов вправо
};

var currentSlide = 0;//счетчик текущего слайда

var slides = document.querySelectorAll(DOM.slide);//список слайдов

drawDots();//Рисуем точки 

var dotes = document.querySelectorAll(DOM.dot);//список точек


//Навешиваем событие на кнопку вправо

document.querySelector(DOM.btnRight).addEventListener('click', function() {
    if (currentSlide + 1 >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    changeSlide(currentSlide);
})

//Навешиваем событие на кнопку влево
document.querySelector(DOM.btnLeft).addEventListener('click', function() {
    if (currentSlide == 0) {
        currentSlide = slides.length -1;
    } else {
        currentSlide--;
    }

    changeSlide(currentSlide);
})

//Навешиваем собития на каждую точку

for (var i = 0; i < dotes.length; i++) {
    dotes[i].addEventListener('click', function(e) {
        //console.log(e.target.id.split('-'));
        
        var id = e.target.id.split('-');
        currentSlide = parseInt(id[1]);

        changeSlide(currentSlide);


    })
}


//Объявление функций


//Функция рисующая точки по количеству слайдов в HTML

function drawDots () {

    var dotHTML = DOM.dotTemplate;

    var dotContainer = document.querySelector(DOM.dotContainer);

    for (var i = 0; i < slides.length; i++) {
        var newDot = dotHTML.replace('%', i);
        

        dotContainer.insertAdjacentHTML('beforeend', newDot);
    }

    document.querySelectorAll(DOM.dot)[0].classList.add(DOM.dotActive);
}

//Функция, переключающая слайды


function changeSlide (slide) {
    for (var i = 0; i < slides.length; i++) {
         slides[i].classList.remove(DOM.slideActive);
         dotes[i].classList.remove(DOM.dotActive);
    }

    slides[slide].classList.add(DOM.slideActive); 
    dotes[slide].classList.add(DOM.dotActive); 

    
}


///////////СКРИПТ ПРОКРУТКИ ВВЕРХ СТРАНИЦЫ

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-70);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

var toTopBtn = document.querySelector('.btn-to-top');

toTopBtn.addEventListener('click', up);
