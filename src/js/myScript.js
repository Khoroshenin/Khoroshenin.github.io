//Калькулятор через Jquery


var totalPrice,
    finalTime,
    finalPrice;

finalTime = $('#websiteTime');
finalPrice = $('#websitePrice');

totalPrice = 0;

function calculateWeb() {
    var webPrice = $('option[name=website]:selected').val();
    var desPrice = $('option[name=design]:selected').val();
    var adaptPrice = $('option[name=adaptability]:selected').val();
    webPrice = parseInt(webPrice);
    desPrice = parseInt(desPrice);
    adaptPrice = parseInt(adaptPrice);
    
    totalPrice = webPrice + desPrice + adaptPrice;
    
    finalPrice.text(totalPrice + ' rub');
};

$('select').on('change', function(){
    calculateWeb();
});


//Отложенная анимация через Jquery

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.stat_animation');
elements.each((i,el) => {
    observer.observe(el);
});

function onEntry (entry) {
    entry.forEach (change => {
        if (change.isIntersecting) {
        change.target.classList.add('.show_animation');     
        }
    });
}

//Якорные ссылки

$('a[href^="#"]').click(function(){ 
let anchor = $(this).attr('href');  
$('html, body').animate({           
scrollTop:  $(anchor).offset().top  
}, 600);                           
});

//Модальное окно
$('#myModal').modal({
  keyboard: false
})