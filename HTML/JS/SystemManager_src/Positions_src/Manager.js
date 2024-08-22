import { Employer } from "./Employer.js";

export class Manager extends Employer{
    constructor(name,cpf,birthDay,salary){
        super(name,cpf,birthDay,salary);
        this.bonus = 1.5;
    }
    
}