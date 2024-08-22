import { User } from "../SystemLogin.Manager_src/User.js";

export class DataEnterpise{
    constructor(){
        this._user = [];
    }

    addUser(user){
        if(this.findUser(user.email).length ===0){
            this._user.push(user);
            return true;
        }else{
            return false;
        }
    }

    displayUser(){
        this._user.forEach(user =>{
            console.log(`User: ${user.user}, Email: ${user.email}`);
        })
    }

    findUser(email){
        return this._user.filter(user => user.email === email);
    }

    removeUser(email){
        this._user = this._user.filter(user => user.email !== email);
    }

    login(email, password) {
        const validUser = this._user.find(u => u.email === email && u.password === password);
       
        return !!validUser;
    }
    
}