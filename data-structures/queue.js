class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(value){
        this.queue.push(value)
    }
    dequeue(){
        return this.queue.shift()
    }
    print(){
        console.log('Printing the queue')
        this.queue.map(item=>{
            console.log(item)
        })
    }
}

let q1=new Queue();
q1.enqueue(12)
q1.enqueue(13)
q1.enqueue(14)
q1.print();
q1.dequeue()
q1.print()


