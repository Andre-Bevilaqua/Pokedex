import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Complementary_Info = (props) => {

    const [species_info, setspecies_info] = useState(null);

    console.log(props.species)

    async function Species_Info() {
        const info = await axios.get(props.species);
        setspecies_info(info);

    }

    useEffect(() => {
        Species_Info();
    }, [])

    if (species_info === null) {

        return;

    }
    console.log(species_info)


    return (

        <div>
            <div>Geração: {species_info.data.generation.name}</div>
            <div>Desenvolvimento:{species_info.data.growth_rate.name}</div>
            <div>Habitat:{species_info.data.habitat.name}</div>
            <div>Forma:{species_info.data.shape.name}</div>
        </div>


    )

}

export default Complementary_Info