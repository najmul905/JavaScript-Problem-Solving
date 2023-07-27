const secondProblem=(arr)=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(data[i]>0){
            sum+=arr[i]
         }
    }
   return sum
}
const data=[12,-33,112,14,17,-33]

const value=secondProblem(data)
console.log(value)