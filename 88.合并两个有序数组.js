/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var x = 0;
    var y =0;

    nums1.splice(m,nums1.length);
    nums2.splice(n,nums2.length);

    while(y<n){
        if(nums2[y]<nums1[x] || nums1[x] ===undefined){
            nums1.splice(x,0,nums2[y])
            x++;
            y++
        }else{
            x++;
        }
    }


};

