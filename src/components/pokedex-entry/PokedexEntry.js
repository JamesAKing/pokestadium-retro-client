import './PokedexEntry.scss';

function PokedexEntry({ pokemonData }) {

    const { name, id, sprites, abilities, weight, height, types } = pokemonData

    return (
        <div className="pokedex-entry">
            <header className="pokedex-entry__header">
                <h4># {id}</h4>
                <h3>{name}</h3>
            </header>   
            <div className="pokedex-entry__content">
                <img className="pokedex-entry__icon" src={sprites.front_default} alt={name} />
                <div className="pokedex-entry__main-info">
                    <div className="pokedex-entry__column">
                        <h4>Height</h4>
                        <p>{height}</p>
                        <h4>Weight</h4>
                        <p>{weight}</p> 
                    </div>
                    <div className="pokedex-entry__column">
                        <h4>Abilities</h4>
                        {abilities.map((ability, i) => <p key={i}>{ability.ability.name}</p>)}
                        <h4>Type</h4>
                        {types.map((type, i) => <p key={i}>{type.type.name}</p>)}
                    </div>
                </div>
            </div>
        </div>
);
}

export default PokedexEntry;