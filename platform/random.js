// Напишите функцию random(min, max),
// которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const random = (min, max) => {
  return Math.random() * (max - min) + min
}

console.log(random(3, 8))

// Напишите функцию randomInteger(min, max),
// которая генерирует случайное целое (integer) число от min до max (включительно).
//
//   Любое число из интервала min..max должно появляться с одинаковой вероятностью.

const randomInteger = (min, max) => {
  const floatResult = Math.random() * (max + 1 - min) + min
  
  return Math.floor(floatResult)
}

console.log(randomInteger(3, 8))