var getRow = function(rowIndex) {
  const result = [1]
  
  for (let i = 1; i <= rowIndex; i++) {
    result.push(result[i - 1] * (rowIndex - i + 1) / i)
  }
  
  return result
};

console.log(getRow(4))