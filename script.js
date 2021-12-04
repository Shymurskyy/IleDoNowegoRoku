const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEL = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2022';

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate=new Date();

    const totalsec=(newYearsDate-currentDate)/1000;
    const days =Math.floor(totalsec/3600/24);
    const hours =Math.floor(totalsec/3600)%24;
    const mins =Math.floor(totalsec/60)%60;
    const seconds =Math.floor(totalsec)%60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEL.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}
countDown();

setInterval(countDown,1000);