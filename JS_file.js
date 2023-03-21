// Получаем кнопку "Зареєструватися"
var registerButton = document.getElementById("register-button");

// Получаем модальное окно
var modal = document.getElementById("modal");

// Получаем элементы формы
var nameInput = document.getElementById("name-input");
var phoneInput = document.getElementById("phone-input");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var confirmPasswordInput = document.getElementById("confirm-password-input");

// Получаем кнопку закрытия модального окна
var closeButton = document.getElementById("close-button");

// Скрываем модальное окно при загрузке страницы
modal.style.display = "none";

// Получаем кнопку "Зареєструватися"
var registerButton = document.getElementById("register-button");

// Получаем модальное окно
var modal = document.getElementById("modal");

// Получаем элементы формы
var nameInput = document.getElementById("name-input");
var phoneInput = document.getElementById("phone-input");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var confirmPasswordInput = document.getElementById("confirm-password-input");

// Получаем кнопку закрытия модального окна
var closeButton = document.getElementById("close-button");

// Открываем модальное окно при клике на кнопку "Зареєструватися"
registerButton.onclick = function() {
modal.style.display = "block";
}

// Закрываем модальное окно при клике на кнопку закрытия
closeButton.onclick = function() {
modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

// Обрабатываем отправку формы
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
event.preventDefault(); // Отменяем стандартное поведение формы

// Получаем значения полей формы
var name = nameInput.value;
var phone = phoneInput.value;
var email = emailInput.value;
var password = passwordInput.value;
var confirmPassword = confirmPasswordInput.value;

// TODO: обработка отправки формы (например, отправка на сервер с помощью AJAX)

// Очищаем значения полей формы
nameInput.value = '';
phoneInput.value = '';
emailInput.value = '';
passwordInput.value = '';
confirmPasswordInput.value = '';

// Закрываем модальное окно
modal.style.display = 'none';
});







