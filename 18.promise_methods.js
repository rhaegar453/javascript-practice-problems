const delay=(ms)=>{
    return new Promise((resolve)=>{
        return setTimeout(()=>{
            console.log('Delaying by ', ms)
            resolve();
        }, ms)
    })
}


const allExample=async()=>{
    return Promise.all([delay(2000),delay(4000),delay(2000)])
}
const allSettledExample=async()=>{
    return Promise.allSettled([delay(2000),delay(4000),delay(2000)])
}

allExample().then(data=>{
    console.log("Finished execution")
})

allSettledExample().then(data=>{
    console.log("Finished execution of allSettled")
})