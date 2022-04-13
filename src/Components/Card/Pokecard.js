import React, { useContext, useState, useEffect } from 'react'
import Pokedex_Context from '../../Contexts/PokedexContext';
import axios from 'axios';
import './Pokecard.css'
import Pokeinfo from './Pokeinfo';

export const Pokecard = (props) => {

    const [pokemon_info, setpokemon_info] = useState(props.pokemon_info? props.pokemon_info : null);
    const[modal, setmodal] = useState(false);

    async function Get_info() {
        const info = await axios.get(props.url_info)
        setpokemon_info(info);
    }
    /*O useEffect com Get_info está sendo utilizado com o parâmetro de props.url_info 
    para que a informação dos cards seja renderizada junto com a página */
    useEffect(() => {
        Get_info()
    }, [props.url_info])

    if (!pokemon_info) {
        return;
    }


    function showL(){
        if( typeof props.activateModal === 'function'){
            props.activateModal(pokemon_info);
        }          
    }
  


    return (

        <div className='card' onClick={showL}>
           
            <div className='header'>
                {pokemon_info.data.name} <img className='icon' src ={pokemon_info.data.sprites.versions['generation-vii'].icons.front_default}></img>
            </div>
            <div>
                <img className='imagem' src={pokemon_info.data.sprites.other['official-artwork'].front_default}></img>
            </div>
            <div className='tipos'> {pokemon_info.data.types.map(function (tipos, index) {
                return (
                    <div className='tipo'>
                        {tipos.type.name}
                    </div>
                )
            })}
            </div>

            <Pokeinfo 
            descricao = {pokemon_info.data.species.url}
            peso = {pokemon_info.data.weight}
            altura = {pokemon_info.data.height}
            estatisticas = {pokemon_info.data.stats.map(function(estatisticas, index){
                return estatisticas;
            })}
            />

        </div>


    )

}


export default Pokecard;