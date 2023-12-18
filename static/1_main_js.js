'use strict' // Установка JS на строгий режим написания кода;

//===================================================================================================//
//                                  Импортированные файлы и модули                                   //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

//===================================================================================================//
//                                       Глобальные переменные                                       //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

let choice_about_me = document.getElementById('choice_about_me_id'); // (кнопка "О СЕБЕ");
let choice_portfolio = document.getElementById('choice_portfolio_id'); // (кнопка "ПОРТФОЛИО");
let choice_order = document.getElementById('choice_order_id'); // (кнопка "ЗАКАЗАТЬ");

let choice_about_me_mini = document.getElementById('choice_about_me_mini_id'); // (каталожная кнопка кнопка "О СЕБЕ");
let choice_portfolio_mini = document.getElementById('choice_portfolio_mini_id'); // (каталожная кнопка кнопка "ПОРТФОЛИО");
let choice_order_mini = document.getElementById('choice_order_mini_id'); // (каталожная кнопка кнопка "ЗАКАЗАТЬ");

let organizations_activities = document.getElementById('organizations_activities_id'); // (раздел "О СЕБЕ");
let description_organization = document.getElementById('description_organization_id'); // (раздел "ПОРТФОЛИО");
let order_main = document.getElementById('order_main_id'); // (раздел "ЗАКАЗАТЬ");

let order_in_fl = document.getElementById('order_in_fl_id'); // (кнопка заказа "FL.ru");
let order_in_kwork = document.getElementById('order_in_kwork_id'); // (кнопка заказа "KWORK");

// список id изображений;
const array_logo = ['organizations_logo_img_id','html_logo_id','css_logo_id','js_logo_id','jquery_logo_id',
                    'tailwind_logo_id','python_logo_id','flask_logo_id','react_js_logo_id',
                    'sqlite3_logo_id','git_logo_id','figma_logo_id','photoshop_logo_id',
                    'fl_logo_id','fhoto_1_logo_id','kwork_logo_id', 'fhoto_2_logo_id', 'html_body_id']

let load_modal_opa_clone = document.getElementById('load_modal_opa_id'); // (туман модального окна);
let load_modal_car_clone = document.getElementById('load_modal_car_id'); // (карта модального окна);
let load_modal_img_div_clone = document.getElementById('load_modal_img_div_id'); // (блок гифки загрузки);
let load_modal_text_block_clone = document.getElementById('load_modal_text_block_id'); // (ЗАПИСКИ_ЗАГРУЗКИ);

//===================================================================================================//
//                                 Одноразовые функции и события                                     //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Вызав функции загрузки изображения из базы данных;
document.addEventListener('DOMContentLoaded', _ => {
    let name_path = '/get_image_load';
    for (let i = 0; i < array_logo.length; i++) {
        fetch_image_load_f(name_path, i);
    }

})

//===================================================================================================//
//                      Многоразовые функции и события вызовов функций                               //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Вызов функции перехода на раздел "О СЕБЕ";
choice_about_me.onclick = () => {transition_to_about_me_f()};
choice_about_me_mini.onclick = () => {transition_to_about_me_f()};

// Вызов функции перехода на раздел "ПОРТФОЛИО";
choice_portfolio.onclick = () => {transition_to_portfolio_f()};
choice_portfolio_mini.onclick = () => {transition_to_portfolio_f()};

// Вызов функции перехода на раздел "ЗАКАЗАТЬ";
choice_order.onclick = () => {transition_to_order_f()};
choice_order_mini.onclick = () => {transition_to_order_f()};

// Функции заказа на "FL.ru";
order_in_fl.onclick = () => {document.location.href = 'https://www.fl.ru/catalog/profile/8391601/'};

// Функции заказа на "KWORK";
order_in_kwork.onclick = () => {document.location.href = 'https://kwork.ru/user/m94kesha16mak'};

//===================================================================================================//
//                             Функции вызываемые другими функциями                                  //
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//

// Функция перехода на раздел "О СЕБЕ";
function transition_to_about_me_f() {
    organizations_activities.scrollIntoView({behavior: 'smooth'})
}

// Функция перехода на раздел "ПОРТФОЛИО";
function transition_to_portfolio_f() {
    description_organization.scrollIntoView({behavior: 'smooth'})
}

// Функция перехода на раздел "ЗАКАЗАТЬ";
function transition_to_order_f() {
    order_main.scrollIntoView({behavior: 'smooth'})
}

// fetch-"GET" запрос для загрузки изображения с базы данных;
function fetch_image_load_f(name_path, i) {
    fetch(name_path)
        .then(response => { return response.blob() })
        .then(blob => {
            let blob_url = new Blob([blob]);
            let new_url = URL.createObjectURL(blob_url);

            if (i==17) {
                document.getElementById(array_logo[i]).style.backgroundImage = `url(${new_url})`;
            }
            else {
                document.getElementById(array_logo[i]).src = new_url;
            }

            load_modal_opa_clone.style.opacity = 0;
            load_modal_car_clone.style.display = 'none';
            load_modal_img_div_clone.style.display = 'none';
            load_modal_text_block_clone.style.display = 'none';
            setTimeout(() => {
                load_modal_opa_clone.style.display = 'none';
    
            }, 2400)
        })
        .catch(error => {
            console.error('Ощибка при получении blob данных: ', error)
        });
}