/** @returns Boolean */  
function Fnc(nums, k) {

  for(let i = 0; i < nums.length; i++) {

    for(let j = i + 1; j < nums.length; j++) {

      if ( nums[i] + nums[j] === k ) {

        return true;

      }

    }

  }
  return false;
}
let nums = [10,15,3,7];
let k = 25;
console.log(Fnc(nums,k));
