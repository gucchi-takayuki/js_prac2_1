'use strict'; {
  
  class Output {
    constructor(type, number) {
      this.type = type;
      this.number = number;
      const output = document.querySelector('ul');
      const item = document.createElement('li');
      item.textContent = `${this.type} ${this.number}`;
      output.appendChild(item);
    }
  }
  
  document.querySelector('button').addEventListener('click', () => {
    const fizzNum = parseFloat(document.getElementById('fizznum').value);
    const buzzNum = parseFloat(document.getElementById('buzznum').value);

    document.querySelector('ul').innerHTML = '';
    
    if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {
      for (let i = 1; i < 100; i++) {
        if (i % fizzNum === 0 && i % buzzNum === 0) {
          new Output('FizzBuzz', i);
        } else if (i % fizzNum === 0) {
          new Output('Fizz', i);
        } else if (i % buzzNum === 0) {
          new Output('Buzz', i);
        }
      }
    } else {
      const alert = document.querySelector('ul');
      const alertMessage = document.createElement('li');
      alertMessage.textContent = '整数値を入力してください。';
      alert.appendChild(alertMessage);
    }

  });
}