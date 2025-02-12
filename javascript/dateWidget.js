console.log("dateWidget.js");
// klockan
function clock() {
    let now = new Date();
    const theTime = now.toLocaleTimeString();
    document.querySelector('#showTime').innerHTML = theTime;
}
setInterval(clock, 1000);

// veckor
let now = new Date();
let startDate = new Date(now.getFullYear(), 0, 1); 
let daysInYear = Math.floor((now - startDate) /
    (24 * 60 * 60 * 1000));

let week = Math.ceil(daysInYear / 7);

document.querySelector('#showWeek').innerHTML+="<b>" + week + "</b>"; // Hjälp från geeksforgeeks.org https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/

// Datum
let day = now.getDate();
let month = now.getMonth()+1;
let year = now.getFullYear();

document.querySelector('#showDate').innerHTML="<b>" +day + "-" + month + "-" + year + "</b>";