const random = (min, max) => {
  const interval = max - min
  const shift = min
  
  return Math.round(Math.random() * interval + shift)
}

const partition = (array, left, right) => {
  const pivot = array[random(left, right)]
  
  while (left < right) {
    while (array[left] < pivot) {
      left += 1
    }
    
    while (array[right] > pivot) {
      right -= 1
    }
    
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]]
      left += 1
    }
  }
  
  return left
}

const sortQuick = (array, left = 0, right = array.length - 1) => {
  const pivotIndex = partition(array, left, right)
  if (left < pivotIndex - 1) {
    sortQuick(array, left, pivotIndex - 1)
  }
  
  if (pivotIndex < right) {
    sortQuick(array, pivotIndex, right)
  }
  
  return array
}

console.log(sortQuick([56, 87, 18, 92, 42, 31, 44, 82, 36, 91]))