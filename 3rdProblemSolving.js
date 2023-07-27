const mostFrequentElement=(arr)=>{
    const frequencyMap = {};
    let mostFrequentElement = arr[0];
    let maxFrequency = 1;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  
  
      // Update mostFrequentElement and maxFrequency if needed
      if (frequencyMap[element] > maxFrequency) {
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4,5,5,5,5];
  const result = mostFrequentElement(inputArray);
  console.log(result);