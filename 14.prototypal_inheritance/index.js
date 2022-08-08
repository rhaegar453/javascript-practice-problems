function Parent(name){
    this.name=name;
}
Parent.prototype.greet=function(){
    return this.name;
}

function Child(name){
    Parent.call(this, [name]);
    this.name=Child;
}
Child.prototype=Object.create(Parent.prototype);
Child.prototype.constructor=Child;


const child=new Child("Shivaraj")

console.log(child.greet())