// Задача 1: Сложение с каррированием
// Напишите каррированную функцию sum, которая принимает три числа и возвращает их сумму.
// Функция должна быть вызвана следующим образом: sum(1)(2)(3).

const sum = (a, b, c) => a + b + c
const curring = (func) => {
  return (a) => {
    return (b) => {
      return (c) => {
        return func(a, b, c)
      }
    }
  }
}

const curriedSum = curring(sum)
console.log(curriedSum(3)(7)(8))

// Задача 2: Каррированная функция для вычисления степени
// Создайте каррированную функцию power, которая принимает основание и показатель степени,
// а затем возвращает результат возведения в степень.
// Функция должна быть вызвана следующим образом: power(2)(3)

const power = (a) => {
  return (b) => {
    return a ** b
  }
}
console.log(power(2)(5))

// Задача 3: Фильтрация массива
// Напишите каррированную функцию filterArray,
// которая принимает функцию-предикат и массив,
// а затем возвращает новый массив, отфильтрованный по этому предикату.
// Функция должна быть вызвана следующим образом: filterArray(isEven)([1, 2, 3, 4, 5]),
// где isEven — функция, проверяющая, является ли число чётным.

const isEven = (num) => num % 2 === 0
const filterArray = (predicatFn) => {
  return (arr) => {
    return arr.filter(predicatFn)
  }
}

console.log(filterArray(isEven)([1, 2, 3, 4, 5]))


// Задача 4: Логирование с каррированием
// Напишите каррированную функцию log, которая принимает тег (строка) и сообщение (строка),
// а затем выводит в консоль сообщение в формате: [Тег] Сообщение.
// Функция должна быть вызвана следующим образом: log('INFO')('Это информационное сообщение').

const log = (tag) => {
  return (message) => {
    return `[${tag.toUpperCase()}] ${message}`
  }
}

console.log(log('warning')('This is a test message'))

// advanced carrying
const curry = function(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args)
    }
    
    return function (...nextArgs) {
      return curried(...args, ...nextArgs)
    }
  }
}

const summ = (a, b, c) => a + b + c
const curriedSumm = curry(summ)

console.log(curriedSumm(5, 13)(1))