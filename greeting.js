const form = document.querySelector('.js-form'), // 변수 form에 js-form class 값 넣기
  input = form.querySelector('input'), // 변수 input에 input class 값 넣기
  greeting = document.querySelector('.js-greetings'); // 변수 greeting에 js-greetings class 값 넣기

const USER_LS = 'currentUser', // USER_LS 변수에  currentUser 값 넣기
  SHOWING_CN = 'showing'; // SHOWING_CN 변수에 showing 값 넣기

function saveName(text) {
  // text를 인자로 받는 saveName 함수 만듦
  localStorage.setItem(USER_LS, text); // 로컬스토리지에 key와 value를 저장함
}

function handleSubmit(event) {
  //handleSubmit 함수 만듦
  event.preventDefault(); // 새로고침 현상 막기
  const currentValue = input.value; // currentValue 변수에 input에 입력되는 value값 넣기
  paintGreeting(currentValue); // currentValue를 인자로 받는 paintGreeting 함수 호출
  saveName(currentValue); // currentValue를 인자로 받는 saveName 함수 호출
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  // text를 인자로 받는 paintGreeting 함수 만듦
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); // 변수 currentUser에 로컬스토리지의 USER_LS 변수의 값 넣기
  if (currentUser === null) {
    // 만약 currentUser 값이 비었다면
    // User is not
    askForName(); // askForName 함수 호출
  } else {
    // 아니면
    // User is
    paintGreeting(currentUser); // currentUser를 인자로 받는 paintGreeting 함수를 호출
  }
}

function init() {
  // 초기화 함수
  loadName(); // loadName 함수 호출
}

init(); // 초기화 함수 호출
