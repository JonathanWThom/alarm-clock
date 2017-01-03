function Clock() {
  this.time = moment();
  this.alarm;
}

Clock.prototype.setAlarm = function(time) {
  this.alarm = moment(time, "HH:mm");
}

Clock.prototype.checkAlarm = function() {

  if (this.alarm < this.time) {
    $('#alert').text('alarm!!!!!');
    this.alarm = undefined;
  }
}

Clock.prototype.updateTime = function() {
  this.time = moment();
}

exports.clockModule = Clock;
