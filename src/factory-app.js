const { buildMakePerson } = require('./js-foundation/05-factory')
const { getId, getAge } = require('./plugins')

const makePerson = buildMakePerson({ getId, getAge })

const obj = { name: 'John', birthdate: '1990-01-01' }

const john = makePerson(obj);

console.log(john)