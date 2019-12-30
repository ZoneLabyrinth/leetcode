/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        let map = {
            CM: 900,
            M: 1000,
            CD: 400,
            D: 500,
            XC: 90,
            C: 100,
            XL: 40,
            L: 50,
            IX: 9,
            X:  10,
            IV: 4,
            V: 5,
            I: 1
        }
        let sum = 0
    
        for(let i = 0 ;i< s.length;i++){
            let key = s.substring(i,i+2);
            if(map[key]){
                sum += map[key]
                i +=1;
            }else{
                sum += map[s[i]]
            }
        }
        return sum
};

