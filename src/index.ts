class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `Name is ${this.name} , salary${this._baseSalary}`;
  }
}

//
const hasan = new Employee("Hasan", 2500);
const habib = new Employee("habibi", 2800);

class Manager extends Employee {
  constructor(
    name: string, 
    _baseSalary: number, 
    public teamMemberCount: number) {
    super(name, _baseSalary);
  }
  describeWork():string{
    return `${this.name} manages total ${this.teamMemberCount} persons`
  }
}

const mizan = new Manager("mizan", 7800,25);

console.log(mizan.describeWork());
