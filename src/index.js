import 'normalize.css';
import './styles/main.scss';

// Mobile menu
const mobileMenuIcon = document.querySelector('#js-mobile-menu-icon');
const menu = document.querySelector('#js-menu');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenuIcon.classList.toggle('mobile-menu-icon_open');
  menu.classList.toggle('menu_open');
});

// Range
const range = document.querySelector('#js-input-range');
const rangeValue = document.querySelector('#js-input-range-value');

range.addEventListener('input', (event) => {
  rangeValue.innerHTML = event.target.value + '%';
});

// Select
const select = document.querySelectorAll('.js-select');
const options = document.querySelectorAll('.js-select-option');

select.forEach((select) => {
  select.addEventListener('focusin', (event) => {
    event.target.classList.add('select_opened');
  });
  select.addEventListener('focusout', (event) => {
    event.target.classList.remove('select_opened');
  });
});
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const select = e.target.closest('.js-select');
    select.classList.remove('select_opened');
    select.querySelector('.js-select-button').innerHTML = e.target.textContent;
    select.blur();
  });
});
