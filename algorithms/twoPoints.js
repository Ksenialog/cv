const moveZeroes = function(nums) {
  let first = 0
  let next = 1
  
  while (nums.length > next) {
    if (nums[first] === 0) {
      while (next < nums.length) {
        if (nums[next]) {
          [nums[first], nums[next]] = [nums[next], nums[first]]
          first += 1
          next += 1
  
          continue
        }
        
        next += 1
      }
    }
    
    first += 1
    next += 1
  }
  
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))