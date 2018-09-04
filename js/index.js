const n = parseFloat(prompt('Enter N'));

function fibonacci(n) {
  let sq5 = Math.sqrt(5); 
  const a = (1 + sq5) / 2;
  const b = (1 - sq5) / 2;
  return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
}

alert(fibonacci(n));

