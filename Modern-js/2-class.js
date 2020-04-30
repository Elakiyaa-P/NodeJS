class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}!`);
    }
}
//Inheritance
class Student  extends Person{
    constructor(name, level){
        super(name);            //super-->Parent class constructor (Person)
        this.level=level;
    }
    greet(){
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}
//Creating instance of the class
const o1=new Person("Elite");
const o2=new Student("Tina","1st Grade");
const o3=new Student("Mary","2nd Grade");

//Method Overriding
o3.greet=()=>console.log("I'm Special!");

//Calling those methods
o1.greet();
o2.greet();
o3.greet();

