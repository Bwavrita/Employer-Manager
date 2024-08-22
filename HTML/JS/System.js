import { Employer } from "./SystemManager_src/Positions_src/Employer.js";
import { Manager } from "./SystemManager_src/Positions_src/Manager.js";
import { Director } from "./SystemManager_src/Positions_src/Director.js";
import { DataEmployee } from "./Data/DataEmployee.js";
import { DataEnterpise } from "./Data/DataEnterprise.js";
import { User } from "./SystemLogin.Manager_src/User.js";

function registerEmployer(user) {
    console.log(user);
    if (user === false) {
        console.error("User is undefined");
        return;
    }

    var attributes = [
        document.querySelector("#name"),
        document.querySelector("#date"),
        document.querySelector("#cpf"),
        document.querySelector("#position"),
        document.querySelector("#salary")
    ];
    const name = attributes[0].value;
    const birthDate = attributes[1].value;
    const cpf = attributes[2].value;
    const position = attributes[3].value;
    const salary = attributes[4].value;

    let employee;

    switch (position) {
        case "Employer":
            employee = new Employer(name, birthDate, cpf, salary);
            if (user.addEmployer(employee) == false) {
                alert("Employee already registered");
            }
            break;
        case "Manager":
            employee = new Manager(name, birthDate, cpf, salary);
            if (!user.addManager(employee) == false) {
                alert("Manager already registered");
            }
            break;
        case "Director":
            employee = new Director(name, birthDate, cpf, salary);
            if (user.addDirector(employee) == false) {
                alert("Director already registered");
            }
            break;
        default:
            console.error("Unknown position type");
            return;
    }

    attributes.forEach(attr => attr.value = "");
    attributes[0].focus();
}

function loginUser(dataUser) {
    var attributes = [
        document.querySelector("#email"),
        document.querySelector("#password")
    ];
    const email = attributes[0].value;
    const password = attributes[1].value;
    if (dataUser.login(email, password)) {
        const user = dataUser.findUser(email);
        return user[0];
    } else {
        return false;
    }
}

function registerUser(dataUser) {
    try {
        var attributes = [
            document.querySelector("#user"),
            document.querySelector("#email"),
            document.querySelector("#enterprise"),
            document.querySelector("#password"),
            document.querySelector("#confirmPassword")
        ];
        const user = attributes[0].value;
        const email = attributes[1].value;
        const enterprise = attributes[2].value;
        const password = attributes[3].value;
        const cPassword = attributes[4].value;

        if (password !== cPassword) {
            throw new Error("Passwords do not match");
        }

        const newUser = new User(user, email, enterprise, password);
        
        if (dataUser.addUser(newUser) === false) {
            alert("Email already registered");
            return false;
        }

        console.log("User registered successfully:", newUser);
        return newUser;
        
    } catch (error) {
        alert(error.message);
        return false;
    }
}


function main() {
    let dataUser = new DataEnterpise();
    let user;

    switch (window.location.pathname) {
        case "/HTML/LoginPage.html":
            document.querySelector("#loginForm").addEventListener("submit", function(event) {
                event.preventDefault();
                user = loginUser(dataUser);
                if (user === false) {
                    alert("User or password incorrect");
                } else {
                    console.log("Login successful", user);
                    window.location.href = "/HTML/MainPage.html"
                }
            });

            document.querySelector("#registerButton").addEventListener("click", function(event) {
                event.preventDefault();
                window.location.href = "/HTML/RegisterPage.html";
            });
            break;

        case "/HTML/MainPage.html":
            dataUser.displayUser();
            console.log("oi");
            document.querySelector('.form').addEventListener("submit", function(event) {
                event.preventDefault();
                registerEmployer(dataUser);
            });
            break;

        case "/HTML/RegisterPage.html":
            document.querySelector("#registerForm").addEventListener("submit", function(event) {
                event.preventDefault();
                user = registerUser(dataUser);
                if (user === false) {
                    alert("Email already registered");
                } else {
                    console.log("Registration successful", user);
                    //window.location.href = "/HTML/MainPage.html"
                    dataUser.displayUser();
                }
            });
            break;

        default:
            console.error("Página não reconhecida:", window.location.pathname);
            break;
    }
}

main();
