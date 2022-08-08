Array.prototype.modifiedMap=function(fn){
    let result=[];
    for(let i=0;i<this.length;i++){
        result.push(fn(this[i]))
    }
    return result;
}

let x=[1,2,3,4,5].modifiedMap(x=>x+2);
console.log(x)
