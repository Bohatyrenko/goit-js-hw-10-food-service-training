// const themeChange = localStorage.getItem('dark')
const listMenuRef = document.querySelector('.js-menu');
const themeRef = document.querySelector('.theme-switch__track');

const changeTheme = () => {
  themeRef.classList.add('.dark-theme');
};
