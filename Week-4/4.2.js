class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name) {
        //super needs to be used in a derived class.
        // the this keyword shows an error if super is not used.
        super(name);
    }
}
// prototypical inheritance allows objects to add or inherit properties or methods from other objects
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " " + "is teaching" + " " + subject)
}
var him = new Teacher("Adam", 45);
him.teach("Closures");

var her = new Teacher("Eve", 55);
her.teach("Prototypes");