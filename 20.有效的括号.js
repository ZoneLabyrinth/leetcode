/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        var st = []
        for(var l of s)
            if ((i="({[]})".indexOf(l))>-1)
                if (st[st.length-1]+i===5)
                   { console.log(st[st.length-1]);
                    st.length--;}
                else
                    {st.push(i);}
        return st.length===0
};
isValid('([])')

