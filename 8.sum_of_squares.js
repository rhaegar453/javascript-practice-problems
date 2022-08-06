const arr=[[1,2],3]

const sumOfSquares=(arr)=>{
    let result=0;
    for(let i of arr){
        if(Array.isArray(i)){
            result+=sumOfSquares(i);
        }
        else{
            result+=i*i
        }
    }
    return result;
}
console.log(sumOfSquares(arr))