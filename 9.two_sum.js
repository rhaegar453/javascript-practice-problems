let input=[3,5,-4,8,11,-1,6]
const target=10;


const twoSum=(arr, target)=>{
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[target-arr[i]]){
            return [target-arr[i], arr[i]];
        } 
        else{
            obj[arr[i]]=i
        }
    }
}

console.log(twoSum(input, target))