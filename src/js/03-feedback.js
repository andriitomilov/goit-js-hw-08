import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  formEl: document.querySelector('.feedback-form'),
  userEmailEl: document.querySelector('input'),
  userMessageEl: document.querySelector('textarea'),
};


if (localStorage.getItem(STORAGE_KEY)) {
  const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (obj.email) {
    refs.userEmailEl.value = obj.email;
  }

  if (obj.message) {
    refs.userMessageEl.value = obj.message;
  }
}

const onInputUserPrintData = e => {
  let storage = localStorage.getItem(STORAGE_KEY);
  storage = storage ? JSON.parse(storage) : {};
  storage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
};

const onSubmitForm = e => {
  e.preventDefault();

  if (!refs.userEmailEl.value || !refs.userMessageEl.value) {
    console.log('Enter email and message');
    return;
  }

  refs.formEl.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);

};

refs.formEl.addEventListener('input', throttle(onInputUserPrintData, 500));
refs.formEl.addEventListener('submit', onSubmitForm);
