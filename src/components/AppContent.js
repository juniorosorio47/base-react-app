'use strict'

//Componente para trabalhar os states passados pelo app principal
//É recomendado trabalhar com states somente em um componente. No caso deste projeto é o app.

import React from 'react'
import '../css/style.css'

const AppContent = ({/*Props passadas pelo app para manipulação dos states*/}) => (
    <div className='app'>
        {/*Componentes da aplicação*/}
    </div>
)

AppContent.propTypes = {
    /*PropTypes são os tipos que seram recebidas as props do componente*/
}

export default AppContent