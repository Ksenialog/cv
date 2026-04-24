// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Временная сложность: O(n)
// Пространственная сложность: O(n)
function isPalindrome(s: string): boolean {
  const str = s.toLowerCase().match(/[a-z]|[0-9]/g) || []
  const last = (str.length - 1) / 2

  for (let i = 0; i < last; i++) {
    if (str[i] !== str.at(-1 - i)) {
      return false
    }
  }

  return true
};

const isAlphabetic = function(value: string): boolean {
  return /[a-zA-Z0-9]/.test(value)
}

// Временная сложность: O(n)
// Пространственная сложность: O(1)
function isPalindromeNext(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isAlphabetic(s[left])) {
      left += 1
      continue
    }

    if (!isAlphabetic(s[right])) {
      right -= 1
      continue
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }

    left += 1
    right -= 1
  }

  return true
}
