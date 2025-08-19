// Даны два отсортированных списка с интервалами присутствия
// пользователей в онлайне в течении дня. Начало интервала строго меньше конца
// Нужно вычислить интервалы, когда оба пользователя были в онлайне
// Интервалы указаны в часах, считаем, что могут быть часы от 0 до 24

const intersection = (user1, user2) => {
  const timeLine = new Array(24).fill(0)
  const activeHours = [...user1, ...user2]
  
  for (let i = 0; i < activeHours.length; i++) {
    const [startHour, endHour] = activeHours[i]
    
    for (let i = startHour; i <= endHour; i++) {
      timeLine[i] += 1
    }
  }
  
  const result = []
  let left = 0
  let right = 1
  
  while (right < timeLine.length) {
    if (timeLine[left] !== 2) {
      left += 1
      right += 1
      continue
    }
    
    if (timeLine[right] === 2) {
      right += 1
      continue
    }
    
    result.push([left, right - 1])
    left = right
    right += 1
  }
  
  return result
}


console.log(intersection([[8, 12], [17, 22]], [[5, 11], [14, 18], [20, 23]])) // [8, 11], [17, 18], [20, 22]