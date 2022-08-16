class Stack{
    constructor(){
        this.stack=[];
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        return this.stack.pop();
    }
    print(){
        console.log('Printing the stack')
        this.stack.map(item=>console.log(item))
    }
}

let s1=new Stack();
s1.push(12)
s1.push(13)
s1.push(14)
s1.print();
s1.pop()
s1.print();