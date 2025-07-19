const hrEl = document.querySelector(".hr");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

setInterval(() => {
    let date = new Date();

    hr = date.getHours() * 30;
    min = date.getMinutes() * 6;
    sec = date.getSeconds() * 6;

    hrEl.style.transform = `rotateZ(${(hr) + min / 12}deg)`;
    minEl.style.transform = `rotateZ(${min}deg)`;
    secEl.style.transform = `rotateZ(${sec}deg)`;
})