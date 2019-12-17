$(document).ready(function(){
    var gmtTime = moment();
    // Get the local version of that date
    var localTime = gmtTime.local();
    $("#currentDay").text(localTime)




});