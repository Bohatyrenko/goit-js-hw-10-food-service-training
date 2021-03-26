import menu from './menu.json';
import cardMenuTemplate from '../templates/card-menu.hbs';
import '../css/menu.css';

console.log(menu);

const listMenuRef = document.querySelector('.js-menu');

const menuTemplate = menu.map(cardMenu => cardMenuTemplate(cardMenu)).join('');
console.log(menuTemplate);

listMenuRef.innerHTML = menuTemplate;
