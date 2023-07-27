const romanToInt=(romanNumeral)=> {
    const romanValues = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbol = romanNumeral[i];
      const nextSymbol = romanNumeral[i + 1];
  
      if (romanValues[currentSymbol] < romanValues[nextSymbol]) {
        result -= romanValues[currentSymbol];
      } else {
        result += romanValues[currentSymbol];
      }
    }
  
    return result;
  }
  
  const romanNumeral2 = "XXI";
  console.log(romanToInt(romanNumeral2));
  