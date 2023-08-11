// создать текстовое поле
function getInput(placeholder, type, className) {
  let input = document.createElement('input');
  input.placeholder = placeholder;
  input.type = type;
  input.classList.add(className);

  return input;
};

// создать блок для текстовых полей
let box = document.createElement('div');
box.classList.add('box');

// создать заголовок
let title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Регистрация';

// создать блок фамилии
let surNameInpWrap = document.createElement('div');
surNameInpWrap.classList.add('field-wrap');
let surNameInp = getInput('Фамилия', 'text', 'text-field');
let surNameErrorLabel = document.createElement('label');
surNameErrorLabel.classList.add('error');
surNameInpWrap.append(surNameInp, surNameErrorLabel);

// создать блок имени
let nameInpWrap = document.createElement('div');
nameInpWrap.classList.add('field-wrap');
let nameInp = getInput('Имя', 'text', 'text-field');
let nameErrorLabel = document.createElement('label');
nameErrorLabel.classList.add('error');
nameInpWrap.append(nameInp, nameErrorLabel);

// создать блок возраста
let ageInpWrap = document.createElement('div');
ageInpWrap.classList.add('field-wrap');
let ageInp = getInput('Возраст', 'number', 'text-field');
ageInp.min = 15;
let ageErrorLabel = document.createElement('label');
ageErrorLabel.classList.add('error');
ageInpWrap.append(ageInp, ageErrorLabel);

// создать блок почты
let emailInpWrap = document.createElement('div');
emailInpWrap.classList.add('field-wrap');
let emailInp = getInput('Почта', 'email', 'text-field');
let emailErrorLabel = document.createElement('label');
emailErrorLabel.classList.add('error');
emailInpWrap.append(emailInp, emailErrorLabel);

// создать блок пароля
let passwordInpWrap = document.createElement('div');
passwordInpWrap.classList.add('field-wrap');
let passwordInp = getInput('Пароль', 'password', 'text-field');
let passwordErrorLabel = document.createElement('label');
passwordErrorLabel.classList.add('error');
passwordInpWrap.append(passwordInp, passwordErrorLabel);


// Создание чекбокса с условиями
let conditionLabelWrap = document.createElement('div');
conditionLabelWrap.classList.add('field-wrap');
let conditionLable = document.createElement('label');
conditionLable.classList.add('condition');
let conditionInp = document.createElement('input');
conditionInp.type = 'checkbox';
let conditionSpan = document.createElement('span');
conditionSpan.textContent = 'Согласны с условиями?';
conditionLable.append(conditionInp, conditionSpan);
let conditionErrorLabel = document.createElement('label');
conditionErrorLabel.classList.add('error');
conditionLabelWrap.append(conditionLable, conditionErrorLabel);


// создание кнопки
let regBtn = document.createElement('button');
regBtn.classList.add('btn');
regBtn.textContent = 'Регистрация';


regBtn.onclick = function () {
  // Получение значений
  let surNameValue = surNameInp.value;
  let nameValue = nameInp.value;
  let ageValue = Number(ageInp.value);
  let emailValue = emailInp.value;
  let passwordValue = passwordInp.value;
  let conditionValue = conditionInp.checked;


  //Проверка на ввод данных
  let validationResult = false;

  surNameErrorLabel.textContent = '';
  if (surNameValue.length <= 1) {
    surNameErrorLabel.textContent = 'В фамилии должно быть больше 1 буквы';
    surNameInp.classList.add('error-input');
    validationResult = true;
  } else if (surNameValue === '') {
    surNameErrorLabel.textContent = 'Введите фамилию';
    surNameInp.classList.add('error-input');
    validationResult = true;
  } else {
    surNameInp.classList.add('complete-input');
  };


  nameErrorLabel.textContent = '';
  if (nameValue.length <= 3) {
    nameErrorLabel.textContent = 'В имени должно быть больше 3 букв';
    nameInp.classList.add('error-input');
    validationResult = true;
  } else if (nameValue === '') {
    nameErrorLabel.textContent = 'Введите имя';
    nameInp.classList.add('error-input');
    validationResult = true;
  } else {
    nameInp.classList.add('complete-input');
  };


  ageErrorLabel.textContent = '';
  if (ageValue <= 14) {
    ageErrorLabel.textContent = 'Регистрация для лиц старше 14 лет';
    ageInp.classList.add('error-input');
    validationResult = true;
  } else if (ageValue === 0) {
    ageErrorLabel.textContent = 'Введите возраст';
    ageInp.classList.add('error-input');
    validationResult = true;
  } else {
    ageInp.classList.add('complete-input');
  };


  emailErrorLabel.textContent = '';
  if (emailValue.length <= 6) {
    emailErrorLabel.textContent = 'Почта должна содержать больше 6-ти символов';
    emailInp.classList.add('error-input');
    validationResult = true;
  } else if (emailValue.includes('@') === false) {
    emailErrorLabel.textContent = 'В почте отсутствует \"@\"';
    emailInp.classList.add('error-input');
    validationResult = true;
  } else if (emailValue === '') {
    emailErrorLabel.textContent = 'Введите почту';
    emailInp.classList.add('error-input');
    validationResult = true;
  } else {
    emailInp.classList.add('complete-input');
  };


  passwordErrorLabel.textContent = '';
  if (passwordValue.length < 6) {
    passwordErrorLabel.textContent = 'Пароль должен содержать больше 6-ти символов';
    passwordInp.classList.add('error-input');
    validationResult = true;
  } else if (passwordValue.includes('_') === false) {
    passwordErrorLabel.textContent = 'Пароль должен содержать знак \"_\"';
    passwordInp.classList.add('error-input');
    validationResult = true;
  } else if (passwordValue === '') {
    passwordErrorLabel.textContent = 'Введите пароль';
    passwordInp.classList.add('error-input');
    validationResult = true;
  } else {
    passwordInp.classList.add('complete-input');
  };


  conditionErrorLabel.textContent = '';
  if (conditionValue === false) {
    conditionErrorLabel.textContent = 'Вы не согласны с условиями';
    validationResult = true;
  };

  if (validationResult === true) {
    return;
  };

  alert(`${surNameValue} ${nameValue}, поздравляем с успешной регистрацией!`);
  surNameInp.value = '';
  nameInp.value = '';
  ageInp.value = '';
  emailInp.value = '';
  passwordInp.value = '';
  conditionInp.checked = false;
};

box.append(
  title,
  surNameInpWrap,
  nameInpWrap,
  ageInpWrap,
  emailInpWrap,
  passwordInpWrap,
  conditionLabelWrap,
  regBtn

);

document.body.append(box);
