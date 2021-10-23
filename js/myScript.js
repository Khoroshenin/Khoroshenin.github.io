let website = prompt("Какой тип сайта тебе нужен? 1-Сайт-визитка, 2-Интернет-магазин, 3-Корпоративный сайт");
let design = prompt("Какой дизайн ты хотел бы? 1-Самый простой, 2-Выберу готовый шаблон, 3-Уникальный дизайн");
let adaptability = prompt("Адаптивность сайта? 1-Только для ПК, 2-Для ПК и мобилок, 3-Для всех устройств");

function getCost1 () {
    console.log(website);
    if(website == 1) {
        simpleWeb(); 
    }
}

function simpleWeb () {
    concole.log(5000);
}  

getCost1();





