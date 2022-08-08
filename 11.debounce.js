let time;
const debounce = (callback, ms) => {
  clearInterval(time);
  time = setTimeout(callback, ms);
};

debounce(() => console.log("Hello World"), 1000);
debounce(() => console.log("Hello World"), 1000);
debounce(() => console.log("Hello World"), 1000);
debounce(() => console.log("Hello World"), 1000);
