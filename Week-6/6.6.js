let nums = new Array(-1, 2, 1, 4);
// let nums = new Array(-1,0,1,2,-1,-4);
let threeSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let res= nums[0]+nums[1]+nums[2];
    for(let i=0; i<nums.length-2; i++) {
        if(i>0 && nums[i] === nums[i-1])continue;
        let j = i+1;
        let k = nums.length-1;
        while (j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(Math.abs(target-sum)<Math.abs(target-res)){
                res = sum;
            }
            else if(sum < target){
                j++;
            }else {
                k--;
            }
        }
    }return res;
}
console.log(threeSum(nums,1));