const form = document.querySelector('.form');
const loginInput = form.querySelector('.name');
const emailInput = form.querySelector('.email');
const PasswordInput = form.querySelector('.password');

form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();
  
  // Получаем значения полей формы
  const login = loginInput.value;
  const email = emailInput.value;
  const password = PasswordInput.value;
  
  // Проверяем, что поля заполнены
  if (!login || !email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  
  // Проверяем, что пароль содержит хотя бы одну заглавную букву, одну строчную букву и одну цифру
  if (!IsValidEmail(email)) {
    alert('Email должно содерать @ и .');
    return;
  }
  if (isValidPassword(password)) {
    alert('Пароль должен содержать как минимум 8 символов');
    return;
  }
  
  
  // Если всё в порядке, отправляем форму
  form.submit();
});



function isValidPassword(password) {
  // Проверка пароля регулярным выражением
  const pattern = password.length < 8;
  return pattern;
}

function IsValidEmail(email){
  const checker = email.includes("@") && email.includes(".")
  return checker
}