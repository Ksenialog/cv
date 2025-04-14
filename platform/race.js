const users = [
  { userId: 1, delay: 700 },
  { userId: 2, delay: 200 },
  { userId: 3, delay: 1100 },
  { userId: 4, delay: 300 },
  { userId: 5, delay: 500 },
  { userId: 6, delay: 900 },
  { userId: 7, delay: 400 },
]

const delay = (data, ms) => new Promise((resolve) => setTimeout(() => resolve(data), ms))

const fetchUsers = async (data, limit, result = []) => {
  if (limit > 0) {
    await Promise.race([...data.map(({ userId,  delay: myDelay }) => delay(userId,  myDelay))])
      .then((data) => {
        result.push(data)
      })

    return fetchUsers(data.filter(({ userId }) => !result.includes(userId)), limit - 1, result)
  }
  
  return result
}

const test = await fetchUsers(users, 3)
console.log(test)