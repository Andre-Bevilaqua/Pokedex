import React, { useState, useEffect } from 'react'
import './Pokeinfo.css'
import axios from 'axios'


export const Pokeinfo = (props) => {

  const [info, setinfo] = useState(null)

  async function Url_info() {
    const url = await axios.get(props.descricao)
    setinfo(url);
  }

  useEffect(() => {
    Url_info()
  }, [props.descricao])


  if (!info) {
    return;
  }

  return (
    <div className='info' style={{ backgroundColor: info.data.color.name, position: 'relative', flex: '1' }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.5',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1
      }}>

      </div>
      <div className='descriçao'>{info.data.flavor_text_entries[1].flavor_text.replaceAll('\f', ' ').replaceAll('\n', ' ')}</div>
      
      <div>
        <div className='status_normal'>
          <div >Atk:{props.estatisticas[1].base_stat}</div>
          <div>Def:{props.estatisticas[2].base_stat}</div>
        </div>
        <div className='status_especial' >
          <div >Atk-Spec: {props.estatisticas[3].base_stat}</div>
          <div >Def-Spec: {props.estatisticas[4].base_stat}</div>
        </div>
      </div>

    </div>


  )
}

export default Pokeinfo;