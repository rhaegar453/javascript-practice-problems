const curry=(fn)=>{
    return curried=(...args)=>{
        if(fn.length!==args.length){
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}

const add=(a, b,c)=>{
    return a+b+c;
}

const multiply=(a,b,c)=>{
    return a*b*c;
}

const curriedAdd=curry(add);
const curriedMultiply=curry(multiply);

console.log(curriedAdd(1)(2)(3))
console.log(curriedMultiply(6)(7)(8))
