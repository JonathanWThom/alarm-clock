var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  var clock = new Clock();

  var clockId = window.setInterval(function() {
    clock.updateTime(); }, 1000);

  var timeId = window.setInterval(function() { $('#time').text(clock.time.format("HH:mm:ss")); }, 1000);


  $("form").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();
    clock.setAlarm(alarm);
    $(".alarms").text(clock.alarm.format("HH:mm"));

    var alarmId = window.setInterval(function() {
      clock.checkAlarm(); }, 1000);
  });


});
