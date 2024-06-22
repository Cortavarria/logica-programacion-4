function calculateFibonacci() {
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);

  
    const result = Fibonacci(number);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${result}`;
  }
  
  function Fibonacci(number) {
    
      if (number === 1) {
        return 0;
      }

      if (number === 2) {
        return 0,1;
      }

      if (number<=0) {
        return "The input is invalid";
      }

      let fibo =[0,1]
      num=number-2;
      for(i=1; i<=num; i++){
      add=fibo[i]+fibo[i-1];
      fibo.push(add);
      }
      let FinalFibo = fibo.join(', ');
      return FinalFibo;

  }
  