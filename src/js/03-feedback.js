import throttle from "lodash.throttle";

// const emailRef = document.querySelector("input");
// const messageRef = document.querySelector("textarea");
// const formRef=document.querySelector(".feedback-form")
const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
    form:document.querySelector(".feedback-form"),
}
 
// -------------------1----------------------
refs.form.addEventListener("input", throttle(onFormInputInf,500));


function onFormInputInf() {
    const formData = {
        email: refs.input.value,
        massage: refs.textarea.value,
    }
    console.log(formData);
    localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(formData));

}

// -------------------2----------------------
function checkStatusLocalStorage() {
    const parsedLocalStore = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY'));
    console.log(parsedLocalStore);
    if (parsedLocalStore) {
        refs.input.value = parsedLocalStore.email;
        refs.textarea.value = parsedLocalStore.massage;
    }
    else {
        refs.input.value = '';
        refs.textarea.value = '';
    }
   
}
checkStatusLocalStorage();
// -------------------3----------------------
refs.form.addEventListener('submit', submitForm);
function submitForm(evt) {
    evt.preventDefault();

    const parsedLS = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY'));
    console.log(parsedLS);

    localStorage.removeItem('LOCALSTORAGE_KEY')
    refs.input.value = '';
    refs.textarea.value = '';
   
}