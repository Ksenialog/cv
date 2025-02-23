/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cachedResult = new Map()
  
  return function(...args) {
    const argsKey = args.toString()
    if (cachedResult.has(argsKey)) return cachedResult.get(argsKey)
    
    const result = fn(...args)
    cachedResult.set(argsKey, result)
    
    return result
  }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */