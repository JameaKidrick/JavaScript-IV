class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(){
        return `Today we are learning about ${student2.favSubjects[2]}.`
    }
    grade(){
        return `${student1.name} receives a perfect score on ${student1.favSubjects[0]}.`
    }

    // RECEIVES `subject` OBJECT AND `student` STRING 
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects //Array, so we use apply???
    }
    listsSubjects(){
        return `${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.` //will need to log each subject one by one -- REDO
    }
    PRAssignment(){
        return `${this.name} has begun sprint challenge on ${this.favSubjects[1]}.`
    }

    // RECEIVES `subject` OBJECT AND `student` STRING 
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(){
        return `${this.name} announces to ${student2.className}, @channel standy times!`
    }
    debugsCode(){
        return `${this.name} debugs ${student1.name}'s code on ${student1.favSubjects[2]}`
    }

    // RECEIVES `slack channel`, `student`, and `subject`
}

const instructor = new Instructor({
    name: 'Maria',
    age: 35,
    location: 'Philadelphia',
    specialty: 'redux',
    favLanguage: 'C#',
    catchPhrase: 'Cowabunga'
})

const student1 = new Student({
    name: 'Bob',
    age: 23,
    location: 'Massachusetts',
    previousBackground: 'Geology',
    className: 'WEB23',
    favSubjects: ['flexbox', 'prototypes', 'callbacks']
})

const student2 = new Student({
    name: 'Toni',
    age: '20',
    location: 'California',
    previousBackground: 'Computer Science',
    className: 'WEB23',
    favSubjects: ['this keyword', 'arrays', 'classes']
})

const pm = new ProjectManager({
    name: 'Kyle',
    age: 25,
    location: 'Texas',
    gradClassName: 'WEB19',
    favInstructor: 'Maria'
})



console.log(instructor.speak()); 
console.log(instructor.demo());
console.log(instructor.grade());

console.log(student1.speak()); 
console.log(student1.listsSubjects());
console.log(student1.PRAssignment());


console.log(student2.speak()); 
console.log(student2.listsSubjects());
console.log(student2.PRAssignment());


console.log(pm.speak());  
console.log(pm.standUp());
console.log(pm.debugsCode());