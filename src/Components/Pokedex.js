import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pokedex_Context from '../Contexts/PokedexContext';
import Pokepage from './Pokepage'

export const Pokedex = () => {


    const [list, setlist] = useState(null)
    const [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon')

    async function List() {
        const url_info = await axios.get(url);
        setlist(url_info);

    }

    useEffect(() => {
        List();
    }, [url])


    if (!list) {
        return;
    }





    return (


        <div>
            Em construção!

            <Pokedex_Context.Provider
                //previous começa com o valor null
                value={{
                    next_page: list.data.next,
                    previous_page: list.data.previous,
                    page_url: seturl,
                    url_data: list.data,
                    url_results: list.data.results,
                    url:url,
                    setlist: setlist
                }}
            >

                <Pokepage

                />

            </Pokedex_Context.Provider>

        </div >


    )
}
export default Pokedex;