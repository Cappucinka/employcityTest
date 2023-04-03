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
const ranges = document.querySelectorAll('.js-input-range-line');

ranges.forEach((range) => {
  range.addEventListener('input', (event) => {
    const rangeValue = event.target
      .closest('.js-input-range')
      .querySelector('.js-input-range-value');
    rangeValue.innerHTML = event.target.value + '%';
  });
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
  option.addEventListener('click', (event) => {
    const select = event.target.closest('.js-select');
    const value = event.target.innerText;
    select.classList.remove('select_opened');
    select.querySelector('.js-select-button').innerHTML = value;
    select.querySelector('.js-select-input').value = value;
    select.blur();
  });
});
