
import React, { useContext, useState, useEffect } from 'react'
import Pokedex_Context from '../Contexts/PokedexContext';
import Pokecard from './Card/Pokecard'
import './Pokepage.css'
import axios from 'axios';
import Modalandre from './Modal-andre/Modal-andre';
import './Modal-andre/Modal-andre.css';
import Pokeinfo from './Card/Pokeinfo';
import Complementary_Info from './Complementary_Info';

export const Pokepage = () => {
  const [modal, setModal] = useState(false);
  const context = useContext(Pokedex_Context);
  const [pokemodal, setPokemodal] = useState(null);

  function page_forward() {

    if (!context.next_page) {
      return console.log('Não não não');
    }

    const aux_url = context.next_page;
    context.page_url(aux_url);


  }

  function page_backward() {

    if (!context.previous_page) {
      return console.log('Ooopss');
    }

    const aux_url = context.previous_page;
    context.page_url(aux_url);


  }

  function activateModal(poke_card_info = null) {
    console.log(poke_card_info);
    setPokemodal(poke_card_info);
    setModal(!modal);//Seta o valor do modal como o inverso do modal atual
  }

  useEffect(() => {
  }, [context.url_results])


  return (

    <div className='Pagina'>
      {modal && pokemodal && <Modalandre activateModal={activateModal} pokemon={pokemodal} >
        <div className='body'>
          <Pokecard
            pokemon_info={pokemodal}
          />
          <Complementary_Info 
            species = {pokemodal.data.species.url}
          />
        </div>
        <div className='footer'>
          <button className='btn-close' onClick={activateModal}>Fechar</button>
        </div>
      </Modalandre>}
      <div className='botoes'>
        <button className='voltar' onClick={page_backward}></button>
        <button className='avançar' onClick={page_forward}></button>
      </div>

      <div className='card-container'>

        {context.url_results.map(function (results, index) {
          return <Pokecard
            modal_tal={modal}
            activateModal={activateModal}
            url_info={results.url}


          />;
        })}

      </div>

      <div className='botoes'>
        <button className='voltar' onClick={page_backward}></button>
        <button className='avançar' onClick={page_forward}></button>
      </div>



    </div>

  )
}


export default Pokepage;
/*

      Em processo!!
      {context.url_data.map(function (pokemon_data, index) {

        return (
          <div>
            {pokemon_data.name}: {pokemon_data.url}
          </div>
        )
      })}

*/