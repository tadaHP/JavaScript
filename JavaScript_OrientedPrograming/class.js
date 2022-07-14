class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    //메소드 1번방법
    sum(){
        return "method1: " + (this.first + this.second);
    }
}
var a = new Person('a', 10, 10);

console.log(a.sum());

//메소드 2번방법
Person.prototype.sum = function(){
    return "method2: " + (this.first + this.second);
}
console.log(a.sum());

//메소드 3번 방법
a.sum = function(){
    return "method3: " + (this.first + this.second);
}

console.log(a.sum());

//확인순서  3번 -> 2번 -> 1번