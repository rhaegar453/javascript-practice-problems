Array.prototype.add = function (num) {
  return this.map((a) => a + num);
};

Array.prototype.subtract = function (num) {
  return this.map((a) => a - num);
};

Array.prototype.multiply = function (num) {
  return this.map((item) => item * num);
};


let x=[1,2,3,4,5];

console.log(x.add(5).multiply(2))