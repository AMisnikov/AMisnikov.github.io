//SEARCH BLOCK

var searchBox = document.querySelector('.form-box');
var searchBtn = document.querySelector('.main-nav__link--search');

searchBtn.addEventListener('click', function() {

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

