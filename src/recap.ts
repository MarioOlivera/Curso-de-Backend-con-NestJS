const myName = 'Nicolas';
const myAge = 12;

console.log("name", myName)
console.log("age", myAge)

const suma = (a: number, b: number) => {
  return a + b;
}

const resultado = suma(12, 12);
console.log(resultado);

class Persona {
  private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, my age is ${this.age}`;
  }
}

const nicolas = new Persona(12, 'Nicolás');
console.log(nicolas.getSummary());
