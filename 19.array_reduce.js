Array.prototype.reduce2 = function(fn, start){
    var result = start !== undefined ? start : this[0];
    for (var i = 0; i < this.length; i++) {
      result = fn(result, this[i]);
    }
    return result;
  };