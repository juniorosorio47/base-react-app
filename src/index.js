'use strict';

/*Index da aplicação que serve para renderizar toda vez que os componentes são alterados */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App'; 

const renderApp = (NextApp)=>{
    render(
        <AppContainer >
            <NextApp/>
        </AppContainer>,   
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App);

if(module.hot){
    module.hot.accept('./app', ()=>{
        const NextApp = require('./app').default;
        renderApp(NextApp);
    })
}