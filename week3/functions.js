//function sum(num1,num2) {
   // return num1+num2
//}
//var result=(5,4)   //arguments
//console.log(result)

//function sumOfThree(num1,num2,num3) {
    //return num1 + num2 + num3;
   // }
    //var result= sumofThree(5,10,8)  //arguments
   // console.log(result)

   //function evenOrOdd(number) {
   // if (number % 2 === 0) {
     // return "even";
    //}  
   // return "odd";
//  }
  
 // console.log(evenOrOdd(4))





 var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [1, 1,2,3,5,8,13,21,34,55,89,144];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));
       
   
