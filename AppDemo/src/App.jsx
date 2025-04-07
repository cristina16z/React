import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Usuari.jsx'
import { Usuario } from './Usuari.jsx'

import { Cart } from './Components/Cart/Cart.jsx'

import { Comptador } from './Components/Comptador/Comptador.jsx'

function App() {

  const llistaProductes = [{name:"Portàtil", preu:500, desc:"Portàtil Asus"},
                          {name:"Auriculars", preu:50, desc:"Auriculars amb NC"},
                          {name:"Ratolí", preu:20, desc:"Ratolí inalàmbric"}]

  console.log(llistaProductes)

  return (
    <div>
      
      <h1>Hello world</h1>
      <Usuario/>
      

      <section className='products-container'>
        {
          llistaProductes.map((product, index) => (
            <Cart key={index} name={product.name} preu={product.preu} desc={product.desc}/>
          ))

        }
        
      </section>

        <Comptador/>


    </div>
  )
}

export default App
