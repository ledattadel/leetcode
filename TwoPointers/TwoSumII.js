var twoSum = function(numbers, target) {
    let L = 0, n = numbers.length, R = n - 1;
    while(L < R){
        let sum = numbers[L] + numbers[R]
        if(sum === target){
            return [L+1,R+1]
        }else if(sum > target){
            R--;
        }else{
            L++;
        }
    }
    return [-1,-1]
};
// Can using another 

