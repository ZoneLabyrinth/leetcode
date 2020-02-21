/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let num = '1';
    let result = '';
    let temp = 1;
    for(let i = 0;i<n-1;i++){
        for(j=0;j<num.length;j++){
            if(num[j]!==num[j+1] || j == num.length){
                result += temp + num[j]
                temp = 1
            }else{
                temp+=1;
            }
        }
        num = result;
        result =''
    }
    return num
};

