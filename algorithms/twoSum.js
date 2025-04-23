const twoSum = function(nums, target) {
  const store = new Map()
  
  for (let i = 0; i < nums.length; i++) {
    const additional = target - nums[i]
    
    if (store.has(additional)) {
      return [i, store.get(additional)]
    }
    
    store.set(nums[i], i)
  }
  
};

console.log(twoSum([0,-3,-5,0], -8))