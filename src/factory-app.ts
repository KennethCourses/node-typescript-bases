import { buildMakePerson } from './js-foundation/05-factory';
import { getId, getAge } from './plugins'

const makePerson = buildMakePerson({ getId, getAge });

const obj = { name: 'John', birthdate: '1990-01-01' }

const john = makePerson(obj);

console.log(john);