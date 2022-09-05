//this, call, apply, bind

let student={
    name: "Missong",
    age: 27,
    course: "Fullstack Development",
    institution: "Pesto",
    printIt: function() {
        console.log(this.name)
        console.log(this.institution)
    }
}
student.printIt();

let instructor={
    name: "Gandhi",
    age: 127,
    course: "Law",
    institution: "UCL",
}

//call function-here 'instructor' is using the call function to use the printIt function present in 'student' to print the instructor's name and institution.
student.printIt.call(instructor);

//when the function is out of the object
let printContactInfo=function(state,country,telephoneCode){
    console.log(this.name + " " +state+ " "+country+ " "+ telephoneCode)
}

//apply function-here arguments can be passed together in an array list.

printContactInfo.apply(student,["Assam","India","+91"]);
printContactInfo.apply(instructor,["Assam","India","+91"]);

//bind function-it binds the value or information to a variable that is stored there for later use or can be accessed at any time.

let useLater1 = printContactInfo.bind(student,"Assam","India","+91");
let useLater2 = printContactInfo.bind(instructor,"Assam","India","+91");

useLater1();
useLater2();