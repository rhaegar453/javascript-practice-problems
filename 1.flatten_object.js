let obj={
    name:'Shivaraj Bakale',
    skills:['HTML','CSS','React'],
    work:{
        company:'BYJUS',
        title:"Lead Engineer-Tech",
    }
}

const flatten=(obj)=>{
    let result={};
    for(let item in obj){
        if(typeof obj[item]==='object'&&!Array.isArray(item)){
            let temp=flatten(obj[item]);
            for(let j in temp){
                result[item+'_'+j]=temp[j]
            }
        }
        else{
            result[item]=obj[item]
        }
    }
    return result;
}

console.log(flatten(obj))