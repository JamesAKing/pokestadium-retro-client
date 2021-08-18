import'./Pokedex.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { pokemonArr } from '../../assets/data/autocomplete';
import PokedexEntry from '../pokedex-entry/PokedexEntry';
import { filterArr } from '../../utilities/functions';
import SearchIcon from '../../assets/icons/search.svg';

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

    const resetSearch = () => {
        setSearchQuery('');
        setPokemonData({});
    };

    const handleChange = e => {
        const query = e.target.value;
        setSearchQuery(query);
        
        if (!query) return setAutocomplete([]);

        const filteredPokemonArr = filterArr(pokemonArr, query);
        setAutocomplete(filteredPokemonArr);
    };
    
    return (
        <section>
            <form role="search" onSubmit={handleSubmit}>
                {/* <label htmlFor="query">
                    <div>
                        <img  src={null} alt="search pokedex" />
                    </div> 
                    <input className="input" autoComplete="off" type="text" placeholder="Type to search..." name="query" value={searchQuery} onChange={handleChange} />
                </label> */}
                <div className="search-bar">
                    <div className="search-bar__icon-container">
                        <img className="search-bar__icon" src={SearchIcon} alt="search pokedex" />
                    </div>
                    <label htmlFor="query"></label>
                    <input className="search-bar__input" type="text" autoComplete="off" name="query" value={searchQuery} placeholder="search pokedex..." onChange={handleChange}/>
                    <ul className="search-bar__autocomplete">
                        {autocomplete.map((pokemon, i) => {
                            return (
                                <li 
                                    className="search-bar__items" 
                                    key={i} 
                                    onClick={() => {
                                        setSearchQuery(pokemon);
                                        setAutocomplete([]);
                                    }}>
                                        {pokemon}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button type="submit">Search</button>
                    <button type="button" onClick={resetSearch}>Clear</button>
                </div>
            </form>
            {/* {autocomplete && autocomplete.length !== 0 && 
            autocomplete.map((result, i) => {
                return (
                    <p key={i} onClick={() => {
                        setSearchQuery(result);
                        setAutocomplete([]);
                    }}>{result}</p>
                )
            })
            } */}
            <div className={`pokedex__pokemon-info`}>
                {pokemonData.id && <PokedexEntry pokemonData={pokemonData} />}
            </div>
        </section>
    );

};

export default Pokedex;