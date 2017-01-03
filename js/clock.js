function Clock() {
  this.time = moment().format('LT');
  this.alarm;
}

Clock.prototype.setAlarm = function(time) {
  this.alarm = time;
}

exports.clockModule = Clock;
