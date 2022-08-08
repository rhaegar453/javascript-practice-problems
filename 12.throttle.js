let throttlePause

const throttle=(callback, ms)=>{
    if(throttlePause){
        return
    }
    throttlePause=true
    setTimeout(()=>{
        callback();
        throttlePause=false;
    }, ms)
}


const delay=(ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms))
}

const driver=async()=>{
    await delay(1000)
    console.log('Starting the throttler');
    throttle(()=>{
        console.log('Hello Wolrd');
    }, 500)
    throttle(()=>{
        console.log('Hello Wolrd');
    }, 500)
    delay(200);
    throttle(()=>{
        console.log('Hello Wolrd');
    }, 500)
    delay(1000);
    throttle(()=>{
        console.log('Hello Wolrd');
    }, 500)
    throttle(()=>{
        console.log('Hello Wolrd');
    }, 500)

}
