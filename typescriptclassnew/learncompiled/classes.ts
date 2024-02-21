
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
    name:string;
    race: string="";
    gender: string
    constructor( name:string,gender:string){
        this.name=name
        this.gender=gender

    }

    desc(): string{
        return "whatever"
    }
}

let ralph=  new Person("ralph","male");

/// despite the fact that race i not included in my code, it can be accesible because it's a property of the class 


class People {
    name:string;
    readonly race: string="";  // adding read only make this unassignable 
    gender: string;
    private accountbalance:number;
    protected accountnumber:number;
    constructor( name:string,gender:string, accountbalance:number, accountnumber:number){
        this.name=name;
        this.gender=gender;
        this.accountbalance=accountbalance;
        this.accountnumber=accountnumber

    }

    desc(): string{
        return "whatever"
    }
}

let dami=  new People("ralph","male",44000,215697814);
//dami.race= // cannot be reassigned because it's readonly 
//dami.accountnumber // this is never read at all because it's private. 
// private and readonly are ways to modify OOP. 

class Accountant extends People{
    constructor( name:string, accountbalance:number, accountnumber:number, gender:string){
        super()
    }
}