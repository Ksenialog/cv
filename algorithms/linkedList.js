
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

const findTheMiddleOfLinkedList = (list) => {
  let slow = list
  let fast = list
  
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  
  return slow
}

console.log(findTheMiddleOfLinkedList(list))

const reverseLinkedList = (list) => {
  let node = null
  
  while (list) {
    const temporary = list.next
    list.next = node
    node = list
    list = temporary
  }
  
  return node
}


const reverseLinkedList2 = (head) => {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  
  return prev;
}

console.log(reverseLinkedList(list))