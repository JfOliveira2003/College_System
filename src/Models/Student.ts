class Student{
    private registration: string;
    private name: string;
    private identification_number: number;
    private age: Date;
    private course: string;

    constructor(registration: string, name: string, identification_number: number, age: Date, course: string, ){
        this.registration = registration;
        this.name = name;
        this.identification_number = identification_number;
        this.age = age;
        this.course = course;
    }
    
    
    public getRegistration() : string {
        return this.registration;
    }
    
    
    public get Name() : string {
        return this.name;
    }
    


} 
export default Student;