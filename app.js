const clrInt = setInterval(setDigitalClock, 1000)

function setDigitalClock() {
    const currentDate = new Date();
    const hourRatio = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    const minuteRatio = ('0' + currentDate.getMinutes()).slice(-2);
    const secondRatio = currentDate.getSeconds();

    setTime(hourEl, hourRatio);
    minEl.innerHTML = minuteRatio;
}

const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const separator = document.querySelector('.separator');

function setTime(element, timeRatio) {
    element.innerHTML = parseInt(timeRatio);
}

const clockBtn = document.querySelector('.clockBtn');

clockBtn.addEventListener('click', () => {
    clearInterval(clrInt);
    hourEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    minEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    separator.style.setProperty('animation', 'none');
})