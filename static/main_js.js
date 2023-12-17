'use strict' // Установка JS на строгий режим написания кода;

//===================================================================================================//
//                                  Импортированные файлы и модули                                   //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//


//===================================================================================================//
//                                       Глобальные переменные                                       //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

let choice_contacts = document.getElementById('choice_contacts_id'); // (кнопка "КОНТАКТЫ");
let choice_contacts_mini = document.getElementById('choice_contacts_mini_id'); // (каталожная кнопка кнопка "КОНТАКТЫ");
let footer = document.getElementById('footer_id'); // (раздел "КОНТАКТЫ");

// Переменные каталога сайта;
let burger_catalog_buttom = document.getElementById('burger_catalog_buttom_id'); // (кнопка скрытого каталога);
let burger_catalog_open = document.getElementById('burger_catalog_open_id'); // (скрытый каталог);
let array_hidden_directory = document.querySelectorAll('.burger_catalog_open_cl > div'); // (строки скрытого каталога);

// Переменные модального окна загрузки;
let load_modal_opa = document.getElementById('load_modal_opa_id'); // (туман модального окна);
let load_modal_car = document.getElementById('load_modal_car_id'); // (карта модального окна);
let load_modal_img_div = document.getElementById('load_modal_img_div_id'); // (блок гифки загрузки);
let load_modal_img = document.getElementById('load_modal_img_id'); // (гифка загрузки);
let load_modal_text_block = document.getElementById('load_modal_text_block_id'); // (ЗАПИСКИ_ЗАГРУЗКИ);
let load_modal_text = document.getElementById('load_modal_text_id'); // (текст Loading...);
let loding_count_gradient = 0; // (угол градиента в блоке загрузки);
let loding_count_point = 0; // (точки в тексте в блоке загрузки);

//===================================================================================================//
//                                 Одноразовые функции и события                                     //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

burger_catalog_open.style.height = `0px`;
adjustment_width_hidden_catalog_f();

// (скрытие скрытого каталога);
burger_catalog_open.style.display = 'none';

// Функция круговой анимации загрузки;
setInterval(_=>{
    loding_count_gradient += 10;
    load_modal_img_div.style.transform = `rotateZ(${loding_count_gradient}deg)`;
    load_modal_img.style.transform = `rotateZ(-${loding_count_gradient}deg)`;
}, 100);

// Функция добавления точек для анимации текста Loading;
setInterval(_=>{
    loding_count_point = (loding_count_point != 3) ? loding_count_point + 1 : 0;
    let local_str = 'loading';
    for (let i=0; i<loding_count_point; i++) {local_str += '.'};
    load_modal_text.innerText = local_str;
}, 500);

//===================================================================================================//
//                      Многоразовые функции и события вызовов функций                               //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Вызов функции перехода на раздел "КОНТАКТЫ";
choice_contacts.onclick = () => {transition_to_contacts_f()};
choice_contacts_mini.onclick = () => {transition_to_contacts_f()};

// Функции скрытия и показа скрытого каталога и установка его позиции;
burger_catalog_buttom.addEventListener('click', _=>{
    open_close_menu_f();
    position_menu_f();
    adjustment_width_hidden_catalog_f();
});

burger_catalog_open.addEventListener('click', _=>{
    open_close_menu_f();
    position_menu_f();
    adjustment_width_hidden_catalog_f();
});

// Функция регулировки ширины скрытого каталога;
window.addEventListener('resize', _ => {adjustment_width_hidden_catalog_f()});

//===================================================================================================//
//                             Функции вызываемые другими функциями                                  //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Функция перехода на раздел "КОНТАКТЫ";
function transition_to_contacts_f() {
    footer.scrollIntoView({behavior: 'smooth'})
}

// Функция анимации прихода скрытого каталога;
function hidden_directory_animation_go_f() {
    burger_catalog_open.style.display = 'flex';
    setTimeout(()=>{
        burger_catalog_open.style.height = `200px`;
        burger_catalog_open.style.paddingBottom = `20px`;
    }, 1);
    setTimeout(()=>{
        burger_catalog_open.style.fontSize = `21px`;
        array_hidden_directory.forEach((e)=>{e.style.height = '30px'});
        burger_catalog_open.style.transform = '300ms';
        array_hidden_directory.forEach((e)=>{setTimeout(_=>{e.style.color = 'rgb(222, 220, 220)'}, 1)});
    }, 300);
}

// Функция анимации ухода скрытого каталога;
function hidden_directory_animation_stop_f() {
    burger_catalog_open.style.transform = '0ms';
    burger_catalog_open.style.paddingBottom = `0px`;
    array_hidden_directory.forEach((e)=>{e.style.height = '0px'});
    array_hidden_directory.forEach((e)=>{setTimeout(_=>{e.style.color = '#0b0d0f'}, 1)});
    setTimeout(()=>{
        burger_catalog_open.style.height = `0px`;
    }, 1);
    setTimeout(()=>{
        burger_catalog_open.style.display = 'none';
    }, 300);
}

// Функция регулировки ширины скрытого каталога;
function adjustment_width_hidden_catalog_f() {
    let width_windows = window.innerWidth;
    burger_catalog_open.style.width = `${(width_windows / 4) * 1.515}px`; // (ширина скрытого каталога бургер);
}

// Функция позиционирования скрытого каталога;
function position_menu_f() {
    burger_catalog_open.style.top = `60px`; // (Y-позиция каталог бургер);
    burger_catalog_open.style.right = `0px`; // (Y-позиция каталог бургер);
}

// Функция скрытия и показа скрытого каталога;
function open_close_menu_f() {
    if (burger_catalog_open.style.display == 'none') {
        hidden_directory_animation_go_f();
    }
    else {
        burger_catalog_open.style.fontSize = `0px`;
        hidden_directory_animation_stop_f();
    };
}

// POST запросы;
function post_request_f(name_path, data) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `${name_path}`, true); 
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify({ "data": data }));
}

// fetch-"GET" запрос для загрузки видео с базы данных;
function fetch_request_f(name_path, data) {
    fetch(`${name_path}`)
        .then(response => { return response.blob() })
        .then(blob => {
            _9_modal_table.style.display = 'none'; // (Скрытие модального окна загрузки);
            let blob_url = new Blob([blob]);
            let new_url = URL.createObjectURL(blob_url);
            // Здесь может быть функция;
        })
        .catch(error => {
            console.error('Ощибка при получении blob данных: ', error)
        });
}

// GET запросы;
function get_request_f() {
    let xhr = new XMLHttpRequest(); // XMLHttp метод для ajax "GET" запроса;
    xhr.open('GET', '/9_video_get_1_file', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText); // Cписок имен в JSON формате;
            // Здесь может быть функция;
        }
    }
    xhr.send();
}