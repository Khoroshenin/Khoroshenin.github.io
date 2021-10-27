let website = prompt("Какой тип сайта тебе нужен? 1-Сайт-визитка, 2-Интернет-магазин, 3-Корпоративный сайт");
let design = prompt("Какой дизайн ты хотел бы? 1-Самый простой, 2-Выберу готовый шаблон, 3-Уникальный дизайн");
let adaptability = prompt("Адаптивность сайта? 1-Только для ПК, 2-Для ПК и мобилок, 3-Для всех устройств");

let costweb1 = 0;
let costweb2 = 0;
let costweb3 = 0;

let costdesign1 = 0;
let costdesign2 = 0;
let costdesign3 = 0;

let costadapt1 = 0;
let costadapt2 = 0;
let costadapt3 = 0;

//Стоимость сайта

function getCostweb1 () {
    if(website == 1) {
        simpleWeb(); 
    }
}

function simpleWeb () {
    costweb1 = 5000;
}  

getCostweb1();

function getCostweb2 () {
    if(website == 2) {
        storeWeb(); 
    }
}

function storeWeb () {
    costweb2 = 10000;
} 

getCostweb2();

function getCostweb3 () {
    if(website == 3) {
        corpWeb(); 
    }
}

function corpWeb () {
    costweb3 = 8000;
}

getCostweb3();

//Стоимость дизайна

function getCostdesign1 () {
    if(design == 1) {
        simpleDesign(); 
    }
}

function simpleDesign () {
    costdesign1 = 3000;
}

getCostdesign1();

function getCostdesign2 () {
    if(design == 2) {
        templateDesign(); 
    }
}

function templateDesign () {
    costdesign2 = 5000;
}

getCostdesign2();

function getCostdesign3 () {
    if(design == 3) {
        customDesign(); 
    }
}

function customDesign () {
    costdesign3 = 10000;
}

getCostdesign3();

//Стоимость адаптивности

function getCostadapt1 () {
    if(adaptability == 1) {
        adaptPC(); 
    }
}

function adaptPC () {
    costadapt1 = 0;
}

getCostadapt1();

function getCostadapt2 () {
    if(adaptability == 2) {
        adaptMob(); 
    }
}

function adaptMob () {
    costadapt2 = 4000;
}

getCostadapt2();

function getCostadapt3 () {
    if(adaptability == 3) {
        adaptAll(); 
    }
}

function adaptAll () {
    costadapt3 = 7000;
}

getCostadapt3();



let finalpriceWeb = (costweb1 + costweb2 + costweb3) + (costdesign1 + costdesign2 + costdesign3) + (costadapt1 + costadapt2 + costadapt3);

let finalpriceText = "Стоимость создания вашего сайта составит " + finalpriceWeb + " рублей." 

alert(finalpriceText);
