// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//   ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this
  }
};



ladder.up().up().down().showStep().down().showStep();