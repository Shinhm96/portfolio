// scroll to top
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

// dark & white
const colorSwitch = document.getElementById('darkmodeBtn');

colorSwitch.addEventListener('click', checkMode);

function checkMode() {
    console.log('check');
    if (colorSwitch.checked) {
        console.log('dark on');
        darkModeOn();
    } else {
        console.log('dark off');
        darkModeOff();
    }
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
    label.style.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
    label.style.remove("dark-mode");
}

//chart
var pathLength = document.querySelector('#graph').getTotalLength();
