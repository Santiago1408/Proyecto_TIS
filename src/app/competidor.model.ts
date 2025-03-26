export class Competidor{
    id: number;
    nombres: string="";
    apellidos: string="";
    fechaNacimiento: string="";
    ci: string="";
    email: string="";
    numCelular: string="";
    colegio: string="";
    curso: string="";
    departamento: string="2";
    provincia: string="";

    constructor(ID: number, Nombres: string, Apellidos: string, FechaNacimiento: string, CI: string, Email: string, NumCelular: string, Colegio: string, Curso: string, Departamento: string, Provincia: string){
        this.id = ID; 
        this.nombres = Nombres;
        this.apellidos = Apellidos;
        this.fechaNacimiento = FechaNacimiento;
        this.ci = CI;
        this.email = Email;
        this.numCelular = NumCelular;
        this.colegio = Colegio;
        this.curso = Curso;
        this.departamento = Departamento;
        this.provincia = Provincia;
    }
}