var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  var clock = new Clock();

  var clockId = window.setInterval(function() {
    clock.updateTime(); }, 1000);

  var timeId = window.setInterval(function() { $('#time').text(clock.time.format("HH:mm:ss")); }, 1000);


  $("#set-alarm").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();
    clock.setAlarm(alarm);
    $(".alarms").text(clock.alarm.format("HH:mm"));
    $("#alarm-control").show();
    var alarmId = window.setInterval(function() {
      clock.checkAlarm(); }, 1000);

      $("#control").submit(function(event){
        event.preventDefault();
        clock.turnOffAlarm();
        window.clearInterval(alarmId);
        $(".alarms").empty();
        $('body').removeClass('red');
        $("#alarm-control").hide();
      });
  });




});
