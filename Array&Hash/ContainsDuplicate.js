/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = []
    for(let i = 0; i< nums.length; i++){
        if(hash.includes(nums[i])){ 
            // Hàm incluse khiến thời gian chạy lại 1 lần nữa

            return true;
        }else{
            hash.push(nums[i])
        }
    }
    return false
 };

var containsDuplicate = function(nums) {
    let obj = {};
    for (let num of nums) {
        if (obj[num]) {
            return true;
        } else {
            obj[num] = true;
        }
    }
    return false;
};