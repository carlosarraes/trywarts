const signUpBtn = document.getElementById('signup-btn');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const isAgreed = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const showCounter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
let counter = 500;
showCounter.innerText = counter;
const getName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const getHouse = document.getElementById('house');
const getObservacao = document.getElementById('textarea');

// prettier-ignore
function checkId() {
  if (
    emailInput.value === 'tryber@teste.com'
    && passwordInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function handleButton() {
  if (isAgreed.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function handleChange() {
  counter = 500 - textArea.value.length;
  showCounter.innerText = counter;
}

function fillData(familia, listMaterias, rate) {
  const data = {
    name: `${getName.value} ${getLastName.value}`,
    email: getEmail.value,
    casa: getHouse.value,
    family: familia,
    materias: listMaterias,
    avaliacao: rate,
    observacao: getObservacao.value,
  };
  return data;
}

// prettier-ignore
function getData() {
  const getFamilia = document.querySelector('input[name="family"]:checked').value;
  const getMaterias = document.querySelectorAll('input[name="subject"]:checked');
  let showMaterias = '';
  for (let i = 0; i < getMaterias.length; i += 1) {
    if (i === getMaterias.length - 1) {
      showMaterias += `${getMaterias[i].value}`;
    } else {
      showMaterias += `${getMaterias[i].value}, `;
    }
  }
  const getAvaliacao = document.querySelector('input[name="rate"]:checked').value;

  return fillData(getFamilia, showMaterias, getAvaliacao);
}

function handleSubmit(e) {
  e.preventDefault();
  evaluationForm.classList.toggle('hidden');
  formData.classList.toggle('hidden');
  const data = getData();
  const getSpan = document.querySelectorAll('span');
  getSpan[0].innerText = data.name;
  getSpan[1].innerText = data.email;
  getSpan[2].innerText = data.casa;
  getSpan[3].innerText = data.family;
  getSpan[4].innerText = data.materias;
  getSpan[5].innerText = data.avaliacao;
  getSpan[6].innerText = data.observacao;
}

textArea.addEventListener('keyup', handleChange);
isAgreed.addEventListener('change', handleButton);
signUpBtn.addEventListener('click', checkId);
submitBtn.addEventListener('click', handleSubmit);
