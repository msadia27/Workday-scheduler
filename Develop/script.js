$("#currentDay").text(moment().format("MMMM Do YYYY"));

var myTimeBlock = document.getElementById('time-block');
var currentHour = moment().hour()
var currentDay = moment().format("MMMM Do YYYY");

function checkTime() {
    for (let i = 0; i < myTimeBlock.clientHeight; i++)
};