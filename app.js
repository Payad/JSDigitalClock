setInterval(setDigitalClock, 1000)

function setDigitalClock() {
    const currentDate = new Date();
    const hourRatio = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    const minuteRatio = currentDate.getMinutes();
    const secondRatio = currentDate.getSeconds();

    setTime(hourEl, hourRatio);
    minEl.innerHTML = minuteRatio;
}

const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');

function setTime(element, timeRatio) {
    element.innerHTML = parseInt(timeRatio);
}