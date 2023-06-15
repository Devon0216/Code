/*
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log(clockStr);
}

updateTime();
setInterval(updateTime, 1000);
*/

let sessionSeconds = null;
let endSeconds = null;

export const sessionTime = (seconds) => {
    sessionSeconds = seconds;
    endSeconds = new Date().setSeconds(new Date().getSeconds() + sessionSeconds);
}

export const countdown = () => {
    const now = new Date().getTime();
    const end = new Date(endSeconds).getTime();
    const duration = Math.ceil((end - now) / 1000);
    console.log(duration);
    return duration;
}

