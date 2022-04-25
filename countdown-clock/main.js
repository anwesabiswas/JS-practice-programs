const countdown = function () {
    const eventDate = new Date("May 2, 2022 18:30:00").getTime();
    
    const now = new Date().getTime();
    const gap = eventDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const containerDay = Math.floor(gap / day);
    const containerHour = Math.floor((gap%day) / hour);
    const containerMinute = Math.floor((gap%hour) / minute);
    const containerSecond = Math.floor((gap%minute) /second);

    document.querySelector('.day').innerHTML =containerDay;
    document.querySelector('.hour').innerHTML =containerHour;
    document.querySelector('.minute').innerHTML =containerMinute;
    document.querySelector('.second').innerHTML =containerSecond;


}
setInterval(countdown,1000);