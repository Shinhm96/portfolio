// logoRoation
const path = document.querySelector("#logoText");


function loop(t) {
    path.setAttribute("transform", `rotate(${t * 0.02},50,50)`);

    requestAnimationFrame(loop);
}
loop(0);

// dark & white
const colorSwitch = document.getElementById('darkmodeBtn');

colorSwitch.addEventListener('click', checkMode);

function checkMode() {
    console.log('check');
    if (colorSwitch.checked) {
        console.log('dark on');
        darkModeOn();
        localStorage.setItem('dark on', this.checked);
    } else {
        console.log('dark off');
        darkModeOff();
        localStorage.removeItem('dark on', this.checked);
    }
}

if(localStorage.getItem('dark on', this.checked)) {
    darkModeOn();
    checkBoxOn();
}

function checkBoxOn() {
    document.getElementById("darkmodeBtn").checked = true;
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

// cursor
const cursor = document.querySelector('.cursor');
const menuLinks = document.querySelectorAll('.menu a');
const toggleBtn = document.querySelector('.toggle');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add("link-grow");
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove("link-grow");
    });
});

toggleBtn.addEventListener('mouseover', () => {
    cursor.classList.add("link-grow");
    cursor.classList.add('hoverd-link');
})

toggleBtn.addEventListener('mouseleave', () => {
    cursor.classList.remove("link-grow");
    cursor.classList.remove('hoverd-link');
})