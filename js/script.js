const isAgreed = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const showCounter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const imgForm = document.getElementById('trybewarts-forms-logo');
let counter = 500;
showCounter.innerText = `${counter} caracteres`;
const getName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const getHouse = document.getElementById('house');
const getObservacao = document.getElementById('textarea');
const toggle = document.getElementById('toggle');

function handleButton() {
  if (isAgreed.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function handleChange() {
  counter = 500 - textArea.value.length;
  showCounter.innerText = `${counter} caracteres`;

  if (counter <= 100 && !showCounter.classList.contains('text-red-500')) {
    showCounter.classList.add('text-red-500');
    showCounter.classList.add('dark:text-red-500');
    showCounter.classList.toggle('font-bold');
  } else if (counter > 100 && showCounter.classList.contains('text-red-500')) {
    showCounter.classList.remove('text-red-500');
    showCounter.classList.remove('dark:text-red-500');
    showCounter.classList.toggle('font-bold');
  }
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
  imgForm.classList.toggle('hidden');
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

function handleDark() {
  document.documentElement.classList.toggle('dark');
}

textArea.addEventListener('keyup', handleChange);
isAgreed.addEventListener('change', handleButton);
submitBtn.addEventListener('click', handleSubmit);
toggle.addEventListener('change', handleDark);
