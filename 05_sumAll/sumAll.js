const sumAll = function(num1, num2) {
    let sum = 0;
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        if(num1 < num2 && num1 > 0 && num2 > 0){
            for(i=num1; i <= num2; i++) {
               sum += i;
            }
            return sum;
        }
        if(num1 > num2 && num1 > 0 && num2 > 0){
            for(i=num1; i >= num2; i--) {
                sum += i;
            }
            return sum;
        }
    }
   
    return "ERROR";
  
};

// Do not edit below this line
module.exports = sumAll;
