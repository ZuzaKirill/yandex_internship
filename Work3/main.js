/**  
 * @param {number[]} nums1 - первый отсортированный массив  
 * @param {number} m - количество значимых элементов в nums1  
 * @param {number[]} nums2 - второй отсортированный массив  
 * @param {number} n - количество элементов в nums2  
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.  
 */  
module.exports = function merge(nums1, m, nums2, n) {  
   // ваш код здесь  
  nums1.slice(0, m).concat(nums2).sort((a, b) => a - b).forEach((n, i) => nums1[i] = n);  
}
let num1 = [46,55,88,0,0,0,0];
let num2 = [18,29,80,90];
let k1 = 3, k2 = 4;
merge(num1, k1, num2, k2)
//return JSON.stringify(num1);
console.log(num1);
