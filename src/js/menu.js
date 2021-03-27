import menu from './menu.json';
import cardsMenuTemplate from '../templates/cards-list.hbs';

const listMenuRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('.theme-switch__track');
const bodyRef = document.querySelector('body');

checkboxRef.addEventListener('click', changeTheme);

listMenuRef.innerHTML = cardsMenuTemplate(menu);

bodyRef.classList.add('light-theme');

// const valueTheme = localStorage.getItem('Theme');
// console.log(valueTheme);

// function changeClass(oldClass, newClass) {
//   bodyRef.classList.remove(oldClass);
//   bodyRef.classList.add(newClass);
// }

// const onDarkTheme = () => {
//   changeClass(dark - theme, light - theme);
//   localStorage.setItem('Theme', dark - theme);
//   checkboxRef.setAttribute('checked', true);
// };

// const onLightTheme = () => {
//   changeClass(light - theme, dark - theme);
//   localStorage.setItem('Theme', light - theme);
// };

// function checkboxFn() {
//   if (bodyRef.classList.contains(light - theme)) {
//     onDarkTheme();
//   } else {
//     onLightTheme();
//   }
// }
// if (valueThem === Theme.dark - theme) {
//   onDarkTheme();
// }

function changeTheme(e) {
  const darkTheme = bodyRef.classList.add('dark-theme');
  if (bodyRef.classList === 'dark-theme') {
    bodyRef.replace('dark-theme', 'light-theme');
  }
}

//   const value = e.currentTarget.value;
//   console.log(value);
//   localStorage.setItem('currentTheme', chengeTheme(e));
// }
// const saveData = localStorage.getItem('my-data');
// console.log(saveData);
// const parsedData = JSON.parse(saveData);
// console.log(parsedData);
// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 5 }));
