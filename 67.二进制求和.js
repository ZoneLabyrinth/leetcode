/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")

    let len = a.length>b.length?a.length:b.length
    let res = []
    let temp = 0;
    for(let i = 0;i<len;i++ ){
        tem1 = Number(a[i]||0);
        tem2 = Number(b[i]||0);
        let sum = tem1 + tem2 +temp 
        if(sum > 1){
            res[i] = sum -2;
            temp = 1;
        }else{
            res[i] = sum
            temp = 0
        }
     }
     if(temp === 1){res.push(1)}
     return res.reverse().join("")

};

