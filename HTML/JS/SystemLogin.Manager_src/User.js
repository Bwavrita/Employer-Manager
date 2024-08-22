import { DataEmployee } from "../Data/DataEmployee.js";

export class User {
    constructor(user, email, enterprise, password) {
        this._user = user;
        this._email = email;
        this._enterprise = enterprise;
        this._password = password;
        this._dataEmployee = new DataEmployee();
    }

    get user() {
        return this._user;
    }

    get email() {
        return this._email;
    }

    get employee() {
        return this._dataEmployee;
    }

    addEmployee(employee) {
        return this._dataEmployee.addEmployer(employee);
    }

    removeEmployee(cpf) {
        this._dataEmployee.removeEmployeeByCpf(cpf);
    }

    addManager(manager) {
        return this._dataEmployee.addManager(manager);
    }

    removeManager(cpf) {
        this._dataEmployee.removeManager(cpf);
    }

    addDirector(director) {
        return this._dataEmployee.addDirector(director);
    }

    removeDirector(cpf) {
        this._dataEmployee.removeDirector(cpf);
    }
}
