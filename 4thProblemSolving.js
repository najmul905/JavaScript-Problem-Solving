const data=(sortedArray, target)=> {
    const length = sortedArray.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (sortedArray[i] + sortedArray[j] === target) {
          return [i, j];
        }
      }
    }
    return []; 
  }
  
  // Example usage:
  const sortedArray = [1, 3, 6, 7, 11, 15];
  const target = 9;
  const result = data(sortedArray, target);
  console.log(result); 
  