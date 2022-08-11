let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

const countdown = () => {
     // GETTING TIME LEFT
     let countDate = new Date("Aug 13, 2022 0:0:0").getTime();
     let presentTime = new Date().getTime();
     let timeLeft = countDate - presentTime;

     // GETTING HOW TIME WORKS
     let seconds = 1000;
     let minutes = seconds * 60;
     let hours = minutes * 60;
     let days = hours * 24;

     // GETTING THE INNERHTML TEXT
     let daysLeft = Math.floor(timeLeft / days);
     let hoursLeft = Math.floor((timeLeft % days) / hours);
     let minutesLeft = Math.floor((timeLeft % hours) / minutes);
     let secondsLeft = Math.floor((timeLeft % minutes) / seconds);

     day.innerHTML = daysLeft;
     hour.innerHTML = hoursLeft;
     minute.innerHTML = minutesLeft;
     second.innerHTML = secondsLeft;
}

setInterval(countdown, 1000)

let hamburger = document.getElementById('hamburger')
let close = document.getElementById('close')
let navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
     if (navLinks.className === 'links') {
          navLinks.className = 'active'
     } else {
          navLinks.className = 'links'
     }
})

hamburger.addEventListener('click', () => {
     close.style.display = 'block'
     hamburger.style.display = 'none'
})

close.addEventListener('click', () => {
     if (navLinks.className === 'active') {
          navLinks.className = 'links'
     } else {
          navLinks.className = 'active'
     }
})

close.addEventListener('click', () => {
     hamburger.style.display = 'block'
     close.style.display = 'none'
})