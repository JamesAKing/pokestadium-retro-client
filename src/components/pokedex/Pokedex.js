import'./Pokedex.scss';
import React, { useState } from 'react';
import axios from 'axios';

const POKE_API_URL = 'https://pokeapi.co/api/v2';
// const TYPE_API_URL = `${POKE_API_URL}/type`;
const POKEMON_API_URL = `${POKE_API_URL}/pokemon`;

const pokemonArr = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];


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
        }
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