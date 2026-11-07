
class Employee {
  constructor (public name: string, 
    private _baseSalary: number)
{}


get baseSalary(): number{
  return this._baseSalary;
}

set baseSalary(newSalary: number){
   this._baseSalary = newSalary;
}

}
const hasan = new Employee('Hasan' , 2500);
const habib = new Employee('habibi' , 2800);

hasan.name= "taslimul "
hasan.baseSalary =2500000;




console.log(hasan)
