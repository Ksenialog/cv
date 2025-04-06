function toggle(...args) {
  let counter = 0
  
  return () => {
    if (counter >= args.length) counter = 0
    return args[counter++]
  }
}

const speed = toggle('low', 'medium', 'high')
const onOffToggle = toggle('on', 'off')

console.log(speed())
console.log(speed())
console.log(speed())
console.log(speed())

console.log(onOffToggle())
console.log(onOffToggle())
console.log(onOffToggle())
