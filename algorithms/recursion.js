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