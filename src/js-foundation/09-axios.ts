import { axiosPlugin } from '../plugins';

export const getPokemonById = async (id: number) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await axiosPlugin.get(url);

    return pokemon.name;
}