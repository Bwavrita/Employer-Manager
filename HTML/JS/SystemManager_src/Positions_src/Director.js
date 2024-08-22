import { Employer } from "./Employer.js";

export class Director extends Employer{
    constructor(name,cpf,birthDay,salary){
        super(name,cpf,birthDay,salary);
        this.bonus = 2;
    }
}