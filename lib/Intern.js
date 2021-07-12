class Intern extends Employee{

    constructor(name, id, email, school, role){
        super(name, id, email);
        this.school = school;
        this.role = role;
    }

    getSchool(){
        return this.school;
    }

    setSchool(newSchool){
        this.school = newSchool;
    }

    getRole(){
        return this.role
    }

