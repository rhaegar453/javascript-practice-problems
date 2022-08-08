Array.prototype.modifiedFilter=function(fn){
    let result=[];
    for(let i=0;i<this.length;i++){
        if(fn(this[i])){
            result.push(this[i])
        }
    }
    return result;
}
let x=[1,2,3,4,5];

console.log(x.modifiedFilter(x=>x%2))