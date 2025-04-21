/*
Сделайте объект person полностью неизменяемым
*/

let person = {
  name: "Leonardo",
  profession: {
    name: "developer"
  }
};

const deepFreeze = (obj) => {
  for (let key in obj) {
    if ( typeof(obj[key]) === 'object' ) {
      deepFreeze(obj[key])
    }
  }
  
  return Object.freeze(obj)
}

const freezePerson = deepFreeze(person)
freezePerson.profession.name = 'doctor'

console.log(freezePerson)
console.log(person)