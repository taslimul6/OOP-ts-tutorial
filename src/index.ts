
class Employee {
    name: string;
    baseSalary : number;

    constructor (name: string, baseSalary: number){
        this.name= name;
        this.baseSalary= baseSalary;
    }
}


const hasan = new Employee('Hasan' , 2500);
const habib = new Employee('habibi' , 2800);



console.log(hasan, habib)
