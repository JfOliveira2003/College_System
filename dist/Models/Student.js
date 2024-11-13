"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(registration, name, identification_number, age, course) {
        this.registration = registration;
        this.name = name;
        this.identification_number = identification_number;
        this.age = age;
        this.course = course;
    }
    getRegistration() {
        return this.registration;
    }
    get Name() {
        return this.name;
    }
}
exports.default = Student;
