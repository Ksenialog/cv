const users = [
  { userId: 1, delay: 700 },
  { userId: 2, delay: 200 },
  { userId: 3, delay: 1100 },
  { userId: 4, delay: 300 },
  { userId: 5, delay: 500 },
  { userId: 6, delay: 900 },
  { userId: 7, delay: 400 },
]

const delay = (data, ms, signal) => {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new Error('Aborted'))
      return
    }
    
    const timerId = setTimeout(() => resolve(data), ms)
    
    signal.addEventListener('abort', () => {
      clearTimeout(timerId)
      reject(new Error('Aborted'))
    })
  })
}

const fetchUsers = async (data, limit, result = []) => {
  const abortController = new AbortController()
  const signal = abortController.signal
  
  if (limit > 0) {
    await Promise.race([...data.map(({ userId,  delay: myDelay }) => delay(userId,  myDelay, signal))])
      .then((data) => {
        result.push(data)
        abortController.abort()
      })
      .catch((err) => {
        console.error(err)
      })
    
    return fetchUsers(data.filter(({ userId }) => !result.includes(userId)), limit - 1, result)
  }
  
  return result
}

fetchUsers(users, 3)
  .then((result) => {
    console.log(result)
  })