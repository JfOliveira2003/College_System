class Professor{
    private name : string;
    private registration_code : string;
    private academic_background : string;
    private id_classmate : string;

    constructor(name: string, registration: string, academic_back: string, id_classmate : string){
        this.name = name;
        this.registration_code = registration;
        this.academic_background = academic_back;
        this.id_classmate = id_classmate;
    }
}