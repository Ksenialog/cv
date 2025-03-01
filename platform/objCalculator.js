// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  a: null,
  b: null,
  read() {
    this.a = prompt('Enter your a', 0)
    this.b = prompt('Enter your b', 0)
  },
  sum() {
    return +this.a + +this.b
  },
  mul() {
    return this.a * this.b
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

function Calculator() {
  this.a = null
  this.b = null
  this.read = function() {
    this.a = prompt('Enter your a', 0)
    this.b = prompt('Enter your b', 0)
  }
  this.sum = function() {
    return +this.a + +this.b
  }
  this.mul = function() {
    return this.a * this.b
  }
}


let calculatorFromConstructor = new Calculator();
calculatorFromConstructor.read();

alert( "Sum=" + calculatorFromConstructor.sum() );
alert( "Mul=" + calculatorFromConstructor.mul() );