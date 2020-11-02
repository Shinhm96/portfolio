// dark & white
const colorSwitch = document.getElementById('darkmodeBtn');

colorSwitch.addEventListener('click', checkMode);

function checkMode() {
    console.log('check');
    if (colorSwitch.checked) {
        console.log('dark on');
        darkModeOn();
        localStorage.setItem('dark on');
    } else {
        console.log('dark off');
        darkModeOff();
        localStorage.clear;
    }
}

if(localStorage.getItem('dark on')) {
    darkModeOn();
    checkBoxOn();
}

function checkBoxOn() {
    document.getElementById("darkmodeBtn").checked = true;
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
    label.style.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
    label.style.remove("dark-mode");
}

// clock
const clock = document.querySelector('.time');


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}


function init(){
    setInterval(getTime, 1000);
}

init();

// days
const d = document.querySelector(".date");

setInterval(() => {
    const today = new Date();
    const date = today.toDateString();

    d.innerText = date;
});

function padding(n) {
    return n.toString().padStart(2,"0");
}

// // menu
// var wrapperMenu = document.querySelector('.wrapper-menu');

// wrapperMenu.addEventListener('click', function(){
//   wrapperMenu.classList.toggle('open');  
// })