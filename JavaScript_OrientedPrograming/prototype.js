function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;   
}
Person.prototype.sum = function(){//프로토타입, 한번만실행 메모리 절약 기능 일제히 변경 가능
    // return this.first+this.second;
    return (2*this.first)+this.second;
}

var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());