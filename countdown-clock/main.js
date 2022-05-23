const countdown = function () {
    const now = new Date();
    let eventStartDate = new Date(`10-10-${now.getFullYear()}`);
    let eventEndDate = new Date(`10-10-${now.getFullYear()} 23:59:59`);
    const yearEndDate = new Date(`12-31-${now.getFullYear()} 23:59:59`);
    // HTML container where we are showing counter or Happy Birthday 
    const countDownDiv =  document.querySelector('.count-down-wrapper');
    
    if (now > eventEndDate && now < yearEndDate) {
        eventStartDate = new Date(`10-10-${now.getFullYear() + 1}`);
    }
    const gap = eventStartDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const containerDay = Math.floor(gap / day);
    const containerHour = Math.floor((gap % day) / hour);
    const containerMinute = Math.floor((gap % hour) / minute);
    const containerSecond = Math.floor((gap % minute) / second);

    if(now >= eventStartDate && now <= eventEndDate) {
        countDownDiv.innerHTML = `
            <h1 class="happy-birthday">Happy Birthday Gohan &#127874;</h1>
        `
    } else {
        document.querySelector('.day').innerHTML = containerDay;
        document.querySelector('.hour').innerHTML = containerHour;
        document.querySelector('.minute').innerHTML = containerMinute;
        document.querySelector('.second').innerHTML = containerSecond;
    }
}

countdown(); // Calling function immediately
setInterval(countdown, 1000);