import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import DataContext, { data } from './dados/Contexto'
import Store from './dados/Store'

const root = createRoot(document.getElementById('root'))
root.render(
    <Store>
        <DataContext.Provider value={data}>
            <App />
        </DataContext.Provider>
    </Store>
)