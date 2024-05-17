const { getPokemonById } = require('./js-foundation/09-axios')

getPokemonById(1)
    .then(pokemon => console.log({ pokemon }));