/*Componente principal statefull, é importado no index.js para ser carregado na aplicação*/

'use strict';

import React from 'react'
import AppContent from './components/AppContent'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            /*Estados da aplicação, são repassados para o AppContent, onde são trabalhados com os componentes */
        }
    }

    /*Método rederizador do App */
    render(){
        return <AppContent /*{Props a serem passadas para o conteúdo do app podendo ser funções ou states.}*/ />
    }
}

export default App