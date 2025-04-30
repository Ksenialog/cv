// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

const printList = (list) => {
  console.log(list.value)
  if (list.next) printList(list.next)
}

printList(list)

const printList2 = (list) => {
  let temporary = list
  while (temporary) {
    console.log(temporary.value)
    temporary = temporary.next
  }
}

printList2(list)