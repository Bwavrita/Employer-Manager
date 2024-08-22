export class DataEmployee {
    constructor() {
        this._employer = [];
        this._manager = [];
        this._director = [];
    }

    addEmployer(employer) {
        if (this.findEmployer(employer.cpf).length === 0) { // Corrigido: Usando parâmetro employer
            this._employer.push(employer);
            return true;
        } else {
            return false; 
        }
    }

    displayEmployer() {
        this._employer.forEach(employer => { // Corrigido: Usando parâmetro employer
            console.log(`Name: ${employer.name}, CPF: ${employer.cpf}`);
        });
    }

    findEmployer(cpf) {
        return this._employer.filter(employer => employer.cpf === cpf);
    }

    removeEmployeeByCpf(cpf) {
        this._employer = this._employer.filter(employer => employer.cpf !== cpf);
    }

    addManager(manager) {
        if (this.findManager(manager.cpf).length === 0) { // Corrigido: Usando parâmetro manager
            this._manager.push(manager);
            return true;
        } else {
            return false;
        }
    }

    displayManager() {
        this._manager.forEach(manager => { // Corrigido: Usando parâmetro manager
            console.log(`Name: ${manager.name}, CPF: ${manager.cpf}`);
        });
    }

    findManager(cpf) {
        return this._manager.filter(manager => manager.cpf === cpf);
    }

    removeManager(cpf) {
        this._manager = this._manager.filter(manager => manager.cpf !== cpf);
    }

    addDirector(director) {
        if (this.findDirector(director.cpf).length === 0) { // Corrigido: Usando parâmetro director
            this._director.push(director);
            return true;
        } else {
            return false;
        }
    }

    displayDirector() {
        this._director.forEach(director => { // Corrigido: Usando parâmetro director
            console.log(`Name: ${director.name}, CPF: ${director.cpf}`);
        });
    }

    findDirector(cpf) {
        return this._director.filter(director => director.cpf === cpf);
    }

    removeDirector(cpf) {
        this._director = this._director.filter(director => director.cpf !== cpf);
    }
}