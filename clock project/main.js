let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function setDate() {
    let now = new Date();

    let getSecond = now.getSeconds();
    let getMinute = now.getMinutes();
    let getHour = now.getHours();

    let secondDegree = (getSecond / 60) * 360;
    let minuteDegree = (getMinute / 60) * 360;
    let hourDegree = (getHour / 12) * 360;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);