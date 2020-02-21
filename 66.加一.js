/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    if(digits[len-1] === 9){
        while(digits[len-1] === 9){
            digits[len-1] = 0
            len -=1
        }
        len==0?digits.unshift(1):digits[len - 1] +=1
        return digits
    }
    digits[len-1]+=1
    return digits
};

