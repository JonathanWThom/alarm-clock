var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  var clock = new Clock();
  $('#time').text(clock.time);
});
