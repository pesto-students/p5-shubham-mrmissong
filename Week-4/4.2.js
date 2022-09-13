var Person = function () { }
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
class Teacher extends Person {
    constructor(subject, name) {
        super(name);
        this.subject = subject;
    }
}
Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is teaching ${subject}`)
}
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Closures");

var tim = new Teacher();
tim.initialize("Layman");
tim.teach("iteration");