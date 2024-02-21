"use strict";
/*enum Gender{
    male,
    female
}



interface BatchA{
    age: number;
    height:number;
    religion: string;
    gender: Gender.female;
}

*/
class Person {
    constructor(name, gender) {
        this.race = "";
        this.name = name;
        this.gender = gender;
    }
    desc() {
        return "whatever";
    }
}
let ralph = new Person("ralph", "male");
/// despite the fact that race i not included in my code, it can be accesible because it's a property of the class 
class People {
    constructor(name, gender, accountbalance, accountnumber) {
        this.race = ""; // adding read only make this unassignable 
        this.name = name;
        this.gender = gender;
        this.accountbalance = accountbalance;
        this.accountnumber = accountnumber;
    }
    desc() {
        return "whatever";
    }
}
let dami = new People("ralph", "male", 44000, 215697814);
//dami.race= // cannot be reassigned because it's readonly 
//dami.accountnumber // this is never read at all because it's private. 
// private and readonly are ways to modify OOP. 