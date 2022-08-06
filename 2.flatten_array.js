const array=[1,2,3,[4,5,6,7,[8,9,10]]]



const flattenArray=(array)=>{
    let result=[]
    for(let item of array){
        if(Array.isArray(item)){
            let flattened=flattenArray(item);
            result.push(...flattened)
        }
        else{
            result.push(item)
        }
    }
    return result;
};

console.log(flattenArray(array))