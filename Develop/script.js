$("#currentDay").text(moment().format("MMMM Do YYYY"));
var currentDay = moment().format("MMMM Do YYYY");

$(document).ready(function() {
    
    var description = $(".description");
    var saveButton = $(".saveBtn");
    var currentHour = moment().hour();
    
    console.log(currentHour);
    console.log(typeof currentHour);
    
    
   
    description.each(function () {
        var myTimeBlock = parseInt($(this).attr("id"));

        if (myTimeBlock === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (myTimeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
    
    
    description.each(function() {
    
        for (var i = 0; i < localStorage.length; i++) {
            var objectKey = localStorage.key(i);
            var taskValue = localStorage.getItem(objectKey);
            var rowHour = $(this).siblings(".hour").text();
            
            console.log(rowHour);
            console.log(typeof rowHour);
            console.log(objectKey);
            console.log(typeof objectKey);
            console.log(taskValue);
            console.log(typeof taskValue);
           
            if (objectKey === rowHour) {
                $(this).val(taskValue);
            }
           
        }
    });
    

    function saveTasks () {
        var currentTime = $(this).data("hour");
        var rowHour = $(this).siblings(".hour").text();
        var task = $(this).siblings(".description").val();
    
        console.log(currentTime);
        console.log(rowHour);
        console.log(task);
    
        if (task === "") {
            localStorage.setItem(rowHour, "");
        }
        else {
            localStorage.setItem(rowHour, task);
        }
    }
    
    saveButton.on("click", saveTasks);
    
    });