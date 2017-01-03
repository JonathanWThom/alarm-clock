var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  var clock = new Clock();
  $('#time').text(clock.time);

  $("form").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();
    clock.setAlarm(alarm);
    $(".alarms").text(clock.alarm);
  });
});
