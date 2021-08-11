import'./Pokedex.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { pokemonArr } from '../../assets/data/autocomplete';

const POKE_API_URL = 'https://pokeapi.co/api/v2';
// const TYPE_API_URL = `${POKE_API_URL}/type`;
const POKEMON_API_URL = `${POKE_API_URL}/pokemon`;

function Pokedex() {
    const [ autocomplete, setAutocomplete ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ pokemonData, setPokemonData ] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        if (searchQuery.length === 0) return console.log('No Query Provided');

        try {
            const resp = await axios.get(`${POKEMON_API_URL}/${searchQuery.toLowerCase()}`)
            setPokemonData(resp.data);
        } catch (err) {
            console.log(err)
        };
    };

    const handleChange = e => {
        const query = e.target.value;
        setSearchQuery(query);
        
        if (!query) return setAutocomplete([]);

        const filteredautocomplete = filterArr(pokemonArr, query);
        setAutocomplete(filteredautocomplete);
    };

    const filterArr = (arr, query) => {
        return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    };

    console.log(pokemonData);

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Search Bar:</h3> 
                    <input autoComplete="off" type="text" name="query" value={searchQuery} onChange={handleChange} />
                </label>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
            {autocomplete && autocomplete.length !== 0 && 
            autocomplete.map((result, i) => {
                return (
                    <p key={i} onClick={() => {
                        setSearchQuery(result);
                        setAutocomplete([]);
                    }}>{result}</p>
                )
            })
            }
        </section>
    );

};

export default Pokedex;