const { getPokemonById } = require('./js-foundation/06-promises.js')

getPokemonById(11)
    .then((pokemonName) => { console.log({ pokemonName }) })
    .catch((error) => { console.log('Ese Id es invalido') });