/*
Реализация кэша с использованием стратегии LRU (Least Recently Used):
Создайте класс Cache, который хранит данные внутри себя.
Реализуйте методы get и set.
При превышении максимального размера кэша удаляйте наименее используемый элемент.
*/

class Cache {
  constructor(size) {
    this.size = size
    this.store = new Map()
  }
  
  get(key) {
    if (!this.store.has(key)) return -1
    
    const value = this.store.get(key)
    this.store.delete(key)
    this.store.set(key, value)
    
    return value
  }
  
  set(key, value) {
    if (this.store.size >= this.size) {
      const leastRecentlyUsedKeyItem = this.store.keys().next().value
      this.store.delete(leastRecentlyUsedKeyItem)
    }
    
    this.store.set(key, value)
  }
}

const cache = new Cache(3)

cache.set('a', 1)
cache.set('b', 2)
cache.set('c', 3)

console.log(cache.get('a')) // 1
console.log(cache.get('b')) // 2

cache.set('d', 4) // c удаляется (LRU)

console.log(cache.get('a')) // 1
console.log(cache.get('c')) // -1
console.log(cache.get('d')) // 4
