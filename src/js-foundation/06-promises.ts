export const getPokemonById = (id: string | number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => pokemon.name)
}