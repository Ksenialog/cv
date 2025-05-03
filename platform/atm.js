const atm = (userAmount, banknotes, countOfBanknotes) => {
  const store = new Map()
  let remainingAmount = userAmount
  
  for (let i = banknotes.length - 1; i >= 0; i--) {
    if (!remainingAmount) break
    
    const banknote = banknotes[i]
    const availableCount = countOfBanknotes[i]
    
    if (banknote > remainingAmount || !availableCount) continue
    
    const neededCount = Math.floor(remainingAmount / banknote)
    const calculatedCount = neededCount <= availableCount ? neededCount : availableCount
    
    remainingAmount -= banknote * calculatedCount
    store.set(banknote, (store.get(banknote) ?? 0) + calculatedCount)
  }
  
  return remainingAmount ? false : store
}

const banknotes = [50, 100, 200, 500, 1000, 2000, 5000]
console.log(atm(2650, banknotes, [10, 7, 0, 0, 3, 0, 0]))