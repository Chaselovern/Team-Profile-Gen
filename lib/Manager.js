class Manager extends Employee{

    constructor(name, id, email, officeNumber, role){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }

    gitofficeNumber(){
        return this.officeNumber;
    }    
    
    getRole(){
        return this.role;
    }
}