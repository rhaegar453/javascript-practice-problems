const modifiedAll = function (promises) {
  return new Promise((res, rej) => {
    let result = [];
    let count = 0;
    promises.forEach((promise) => {
      promise
        .then((data) => {
          result.push(data);
          if (count == promises.length) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
};

let delay=(ms)=>{
    return new Promise((resolve)=>setTimeout((...args)=>{
        console.log("Calling promise for ",ms)
        resolve(...args)
    }, ms))
}

modifiedAll([delay(3000), delay(2000),delay(4000)])
