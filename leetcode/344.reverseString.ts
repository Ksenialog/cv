// easy
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Временная сложность: O(n)
// Пространственная сложность: O(1)
function reverseString(s: string[]): void {
  const last = s.length / 2
  for (let i = 0; i < last; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
}

// Через reverse()
// Временная сложность: O(n)
// Пространственная сложность: O(n)