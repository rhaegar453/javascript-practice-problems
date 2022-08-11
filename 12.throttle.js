const throttle=(callback, delay=500)=>{
    let shouldWait=false;
    return (...args)=>{
        if(shouldWait){
            return;
        }
        shouldWait=true;
        callback(...args);
        setTimeout(()=>{
            shouldWait=false;
        }, delay)
    }
}
export default throttle;