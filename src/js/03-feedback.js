import throttle from 'lodash.throttle';

const formData = {};
const form = document.querySelector('.feedback-form');

populateTexteria();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
    let preFormData = localStorage.getItem('feedback-form-state');
    preFormData = preFormData ? JSON.parse(preFormData) : {};
    preFormData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(preFormData));
}

function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function populateTexteria() {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formData) { 
             for (let key in formData) {
             form.elements[key].value = formData[key];
         }
    }
   
};
