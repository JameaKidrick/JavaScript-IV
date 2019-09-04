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
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(){
        return `${student.name} receives a perfect score on ${student.favSubjects[0]}.`
    }
    test(){
        return student.calculate - Math.floor(Math.random()*20);
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.calculate = attributes.calculate,
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        for( let i = 0; i < this.favSubjects.length; i++){
            console.log(`${this.name}'s favorite subject is ${this.favSubjects[i]}.`)
        }
        // return `${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
    graduate(){
        if(instructor.test() > 70){
            return `Congratulations, ${this.name}! You've successfully graduated from Lambda School with a grade of ${this.calculate}%!`
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const instructor = new Instructor({
    name: 'Maria',
    age: 35,
    location: 'Philadelphia',
    specialty: 'redux',
    favLanguage: 'C#',
    catchPhrase: 'Cowabunga'
});

const student = new Student({
    name: 'Toni',
    age: 20,
    calculate: 100,
    location: 'California',
    previousBackground: 'Computer Science',
    className: 'WEB23',
    favSubjects: ['callbacks', 'arrays', 'classes']
});

const pm = new ProjectManager({
    name: 'Kyle',
    age: 25,
    location: 'Texas',
    gradClassName: 'WEB19',
    favInstructor: 'Maria'
});



console.log(instructor.speak()); 
console.log(instructor.demo(student.favSubjects[2]));
console.log(instructor.grade());
console.log(instructor.test());

console.log(student.speak()); 
console.log(student.listsSubjects());
console.log(student.sprintChallenge(student.favSubjects[0]));
console.log(student.PRAssignment(student.favSubjects[1]));
console.log(student.graduate());

console.log(pm.speak());  
console.log(pm.standUp(student.className));
console.log(pm.debugsCode(student, student.favSubjects[2]));