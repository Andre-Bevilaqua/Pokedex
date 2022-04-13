import React from 'react'
import Pokecard from '../Card/Pokecard';
import Pokeinfo from '../Card/Pokeinfo';
import './Modal-andre.css'

const Modalandre = (props) => {




    function Modal_Close() {

        props.activateModal();
        
    }


    return (
        
            <div className='modal'>
                <div className='modal-backdrop' onClick={Modal_Close}></div>
                <div className='content'>
                    {props.children}
                    
                </div>
                
            </div>
        


    )

}


export default Modalandre;