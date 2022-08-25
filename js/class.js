class Instructor{
    name;
    designation;
    constructor(name, designation){
        this.name = name;
        this.designation = designation;
    }
}

class Developer extends Instructor{
    uni;
    constructor(name, designation, uni){
        super(name, designation);
        this.uni = uni;
    }
}

const instructor = new Instructor("Dabasish", "Developing");
const dev = new Developer("Joy", "Devops", "PCIU");
console.log(dev);