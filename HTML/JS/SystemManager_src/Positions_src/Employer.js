export class Employer {
    constructor(name, cpf, birthDay, salary) {
        this._name = name;
        this._cpf = cpf;
        this._birthDay = new Date(birthDay);
        this._old = this.getOld(this._birthDay);
        this._salary = salary;
    }

    getOld(birthDay) {
        const today = new Date();
        let age = today.getFullYear() - birthDay.getFullYear();
        const monthDifference = today.getMonth() - birthDay.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDay.getDate())) {
            age--;
        }

        return age;
    }

    get name() {
        return this._name;
    }

    get cpf() {
        return this._cpf;
    }

    get old() {
        return this._old;
    }

    get salary() {
        return this._salary;
    }
}
