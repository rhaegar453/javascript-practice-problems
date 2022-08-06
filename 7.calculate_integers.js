const arr=[[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]


const calculateIntegers=(arr)=>{
    let count=0;
    for(let i of arr){
        if(Array.isArray(i)){
            count+= calculateIntegers(i)
        }
        else if(Number.isInteger(i)){
            count+=1;
        }
    }
    return count;
}
console.log(calculateIntegers(arr))