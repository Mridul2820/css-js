// DOM Elements 
const date = document.getElementById('date');
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// options
const showAMPM = true;

// show time 
function showTime() {
    let today = new Date();
    let day = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    let year = today.getFullYear();
    let hour = today.getHours();
    let mint = today.getMinutes();
    let sec = today.getSeconds();

    // output date 
    date.innerHTML = `${month}<span> </span>${day}<span>, </span>${year}`;

    // set AM or PM 
    const amPm = hour >= 12 ? 'PM' : 'AM';
    
    // 12 hr format 
    hour = hour % 12 || 12;

    // output time 
    time.innerHTML = `${hour}<span>:</span>${addZero(mint)}<span>:</span>${addZero(sec)} ${showAMPM ? amPm : ''}`;

    setTimeout(showTime,1000);
}

// add zero to time 
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting 
function setBgAndGreet() {
    let today = new Date();
    let hour = today.getHours();

    if(hour >= 5 && hour < 12){
        //morning
        document.body.style.backgroundImage = "url('assets/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    }
    else if (hour >= 12 && hour < 16) {
        // afternoon 
        document.body.style.backgroundImage = "url('assets/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }
    else if (hour => 16 && hour <= 20) {
        // evening
        document.body.style.backgroundImage = "url('assets/evening.jpg')";
        greeting.textContent = 'Good Evening';
    }
    else {
        // night
        document.body.style.backgroundImage = "url('assets/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }

    setTimeout(setBgAndGreet,1000);

}
// Get name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }

    else {
        name.textContent = localStorage.getItem('name');
    }
}

// set name 
function setName(e) {
    if(e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }

    else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get focus 
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }

    else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set Focus 
function setFocus(e) {
    if(e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }

    else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run 
showTime();
setBgAndGreet();
getName();
getFocus();