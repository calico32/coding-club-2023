const makePalindrome = (string) => {
  let reversed = string.split('').reverse().join('')
  for (let i = 0; i < string.length; i++) {
    let substring = string.substring(i)
    if (reversed.startsWith(substring)) {
      return string + reversed.substring(substring.length)
    }
  }

  return string + reversed
}

const testInputs = ['a', 'aa', 'math', 'racecar', 'data', 'racecars', 'abcd', 'abcdc']

for (const input in testInputs) {
  console.log(`makePalindrome(${input}) = ${makePalindrome(input)}`)
}
