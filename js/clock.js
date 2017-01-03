function Clock() {
  this.time = moment().format('LT');
}

exports.clockModule = Clock;
