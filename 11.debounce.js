const debounce=(callback, delay=250)=>{
  let time;
  return (...args)=>{
    clearTimeout(time);
    time=setTimeout(()=>callback(...args), delay);
  }
}
export default debounce;