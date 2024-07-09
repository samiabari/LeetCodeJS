/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const dict={};

    for(let i=0;i<nums.length;i++)
    {
        dict[nums[i]]=i;
    }

    for(let i=0;i<nums.length;i++)
    {
        let comp = target-nums[i];
        if(dict.hasOwnProperty(comp) && dict[comp]!==i)
        {
            return [i, dict[comp]] ;
        }
    }
};