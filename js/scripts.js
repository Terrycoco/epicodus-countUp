var countUp = function(ceiling, interval) {
  var result = [];
  for (var i= 0 + interval; i <= ceiling; i = i + interval) {
      result.push(i);
  }
  return result;
};
