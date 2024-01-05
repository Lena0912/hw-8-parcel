// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  };

const MESSAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', evt => {
    
    formData[evt.target.name] = evt.target.data;
    
  console.log(formData);
});

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(MESSAGE_KEY);
}

function onTextareaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(MESSAGE_KEY, message);
}

function populateTextarea(evt) {
    const savedMessage = localStorage.getItem(MESSAGE_KEY);

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
    
}