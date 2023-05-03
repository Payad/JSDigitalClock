const clrInt = setInterval(setDigitalClock, 1000)

function setDigitalClock() {
    const currentDate = new Date();
    const hourRatio = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    const minuteRatio = ('0' + currentDate.getMinutes()).slice(-2);
    const secondRatio = currentDate.getSeconds();
    const meridian = currentDate.getHours() <= 12 ? 'AM':'PM'

    setTime(hourEl, hourRatio);
    minEl.innerHTML = minuteRatio;
    setMeridian(am_pm, meridian)
}

const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const separator = document.querySelector('.separator');
const am_pm = document.querySelector('.meridian');

function setTime(element, timeRatio) {
    element.innerHTML = parseInt(timeRatio);
}

function setMeridian(element, meridian) {
    // if (currentDate.getHours() < 12 ? 'AM':'PM') {

    // }
    element.innerHTML = meridian
}

const clockBtn = document.querySelector('.clockBtn');
const hourBtn = document.querySelector('.hourBtn');
const minBtn = document.querySelector('.minuteBtn');
const setBtn = document.querySelector('.setBtn');

// const clrH = setInterval(setHour());

function setHour() {
    hourEl.innerHTML++;
}

function setMinute() {
if (minEl.innerHTML < 59) {
    minEl.innerHTML++;
    minEl.innerHTML = ('0' + minEl.innerHTML).slice(-2);
} else {
    minEl.innerHTML = '0' + 0;
}
if (minEl.innerHTML === '0' + 0) {
    hourEl.innerHTML++;
}
}

// let clicked = false;
clockBtn.addEventListener('click', () => {
    clearInterval(clrInt);
    // clearInterval(clrM);
    // minBtn.addEventListener('click', () => {
    //     hourEl.style.removeProperty('animation')
    //     minEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    //     // clearInterval(clrInt)
    //     clockBtn.disabled = true;
    //     if (minEl.innerHTML < 59) {
    //         ++minEl.innerHTML;
    //         minEl.innerHTML = ('0' + minEl.innerHTML).slice(-2);
    //     } else {
    //     // minEl.innerHTML = ('0' + minId.innerHTML).slice(-2);
    //     minEl.innerHTML = '0' + 0;
    // }
    // })
    hourEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    minEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    separator.style.setProperty('animation', 'none');
    // clockBtn.disabled = false;
    hourBtn.disabled = false;
    minBtn.disabled = false;

    // hourBtn.addEventListener('click', () => {
    //     minEl.style.setProperty('animation', 'none');
    //     hourEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite')
    //     // clearInterval(clrInt);
    //     clockBtn.disabled = true;
    //     if (hourEl.innerHTML < 12) {
    //     hourEl.innerHTML++;
    //     } else {
    //         hourEl.innerHTML = 1;
    //     }
    //     if (hourBtn.clicked = true) {
    //         // hourEl.innerHTML =- 1;
    //         console.log('Hello')
    //         // console.log(hourEl.innerHTML =- 1);
    //     }
    //     // console.log('Hello');
    // });

    // const minId = document.getElementById('minute');
    // minBtn.addEventListener('click', () => {
    //     hourEl.style.removeProperty('animation')
    //     minEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    //     clearInterval(clrInt)
    //     clockBtn.disabled = true;
    //     if (minEl.innerHTML < 59) {
    //         ++minEl.innerHTML;
    //         minEl.innerHTML = ('0' + minEl.innerHTML).slice(-2);
    //     } else {
    //     // minEl.innerHTML = ('0' + minId.innerHTML).slice(-2);
    //     minEl.innerHTML = '0' + 0;
    // }
    // })
    setBtn.addEventListener('click', () => {
        clearInterval(clrInt)
        hourEl.style.setProperty('animation', 'none');
        minEl.style.setProperty('animation', 'none');
        separator.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
        const clrH = setInterval(setHour, 3600000);
        const clrM = setInterval(setMinute, 60000);
        clockBtn.disabled = false;
        hourBtn.disabled = true;
        minBtn.disabled = true;
    })
    // clearInterval(clrM);
})

hourBtn.addEventListener('click', () => {
    minEl.style.setProperty('animation', 'none');
    hourEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite')
    // clearInterval(clrInt);
    clockBtn.disabled = true;
    if (hourEl.innerHTML < 12) {
    hourEl.innerHTML++;
    } else {
        hourEl.innerHTML = 1;
    }
    // if (hourBtn.clicked = true) {
    //     // hourEl.innerHTML =- 1;
    //     console.log('Hello')
    //     // console.log(hourEl.innerHTML =- 1);
    // }
    // // console.log('Hello');
});

minBtn.addEventListener('click', () => {
    hourEl.style.removeProperty('animation')
    minEl.style.setProperty('animation', 'separator 1s steps(1, end) infinite');
    // clearInterval(clrInt)
    clockBtn.disabled = true;
    if (minEl.innerHTML < 59) {
        ++minEl.innerHTML;
        minEl.innerHTML = ('0' + minEl.innerHTML).slice(-2);
    } else {
    // minEl.innerHTML = ('0' + minId.innerHTML).slice(-2);
    minEl.innerHTML = '0' + 0;
}
})

setDigitalClock();