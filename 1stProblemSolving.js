function reverseString(value) {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input.charAt(i);
    }
    return reversed;
  }
  
  const value = "hello world";
  const result = reverseString(value);
  console.log(result);