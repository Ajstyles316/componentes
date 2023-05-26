/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./body_platos.css";
import { NavBar } from './nav_bar';
ReactDOM.createRoot(document.getElementById('root')).render(
    <div style={{ 'display': 'block' }}>
        <NavBar></NavBar>
        <BodyPlatos />

    </div>

)
function BodyPlatos() {
    return (
        <div style={{ 'display': 'flex', 'marginTop': '20px' }}>
            <Details />
            <Source />
        </div>
    )
}

function Source() {

    return (
        <div className='ContainerSource'>
            <img className='img' src='./public/image1.png'></img>
            <Detail param='Stock apertura' label={40} />
            <Detail param='Stock restante' label={34} />
            <Detail param='Valor Limite' label={12} />
        </div>
    )
}



function Details() {
    return (
        <div className='Details' >
            <h1>Detalles Principales</h1>
            <hr></hr>
            <Detail param='Nombre del plato' label='Salchipapa' />
            <Detail param='ID Plato' label='456567' />
            <Detail param='Valor Limite' label='12' />
            <Detail param='Ingredientes' label='Papa, Salchicha, Mayonesa,
                                                Ketchup, Mostaza' />
        </div>
    )
}
function Detail({param,label1}) {
    return (
        <div className='Detail'>
            <h2 className='d1'> {param}</h2>
            <h2 className='d2'>{label1}</h2>
        </div>
    )
}