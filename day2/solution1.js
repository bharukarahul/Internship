 function solution(arr, k) {
  let counter=[];
  arr.forEach(function(str,ind){
      if(counter[str])
      counter[str]++;
      else
      counter[str]=1;
  });
  for(let key in counter){
    if(counter[key]==1){  
    if(k==1)
      return key;
      else{
        k--;
      }}
  }
  ans="";
  return ans;// Write your code here
  
};


// --------------------------------- Code Driver ---------------------------------

let result1 = solution(["d","b","c","b","c","a"], 2)
let expected1 = "a"


let result2 = solution(["aaa","aa","a"], 1)
let expected2 = "aaa"

let result3 = solution(["a","b","a"], 3)
let expected3 = ""


console.log(result1 === expected1 ? 'Test Passed' : 'Test Failed')
console.log(result2 === expected2 ? 'Test Passed' : 'Test Failed')
console.log(result3 === expected3 ? 'Test Passed' : 'Test Failed')