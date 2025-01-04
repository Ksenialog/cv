// 1

const flat = (array, res = []) => {
  const result = res
  
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (!Array.isArray(item)) {
      result.push(item)
    } else {
      flat(item, result)
    }
  }
  
  return result
}

console.log(flat([1, 2, [3, 4]]))
console.log(flat([]))
console.log(flat([[1, 5], 5, 10]))
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))

// 2

const anotherFlat = (array) => {
  const result = []
  
  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...anotherFlat(item))
    } else {
      result.push(item)
    }
  }
  
  return result
}

console.log(anotherFlat([1, 2, [3, 4]]))
console.log(anotherFlat([]))
console.log(anotherFlat([[1, 5], 5, 10]))
console.log(anotherFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))

// fibonacci
// 0 1 1 2 3 5 8 13 21 34
const fibonacci = (index) => {
  if (index === 1) return 0
  if (index === 2) return 1
  
  return fibonacci(index - 1) + fibonacci(index - 2)
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4)) // 2
console.log(fibonacci(5)) // 3
console.log(fibonacci(8)) // 13
console.log(fibonacci(13)) // 144

const binarySearch = (array, element) => {
  if (!Array.length) return false
  
  if (array.length === 1) {
    return array[0] === element
  }
  
  const center = Math.floor(array.length / 2)

  if (array[center] === element) return true

  const isRight = element > array[center]

  return binarySearch(isRight ? array.slice(center + 1) : array.slice(0, center), element)
}

console.log(binarySearch([3], 3)) // true
console.log(binarySearch([1, 2, 3, 4, 5], 4)) // true
console.log(binarySearch([1, 2, 3, 5, 6], 4)) // false
