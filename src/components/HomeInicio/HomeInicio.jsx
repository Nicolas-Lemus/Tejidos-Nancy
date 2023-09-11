import React from 'react'
import ImagenIncio from '../../images/TejidosNancy.gif'
import './HomeInicio.css'
import Cards from '../Cards/Cards'
import imagen1 from "../../images/prendas/IMG-20230904-WA0073-removebg-preview.png"
import imagen2 from "../../images/prendas/IMG-20230904-WA0080-removebg-preview.png"
import imagen3 from "../../images/prendas/IMG-20230904-WA0068-removebg-preview.png"

const HomeInicio = () => {
  return (
    <>
      <article className='ImagenInicio animate__animated animate__fadeInLeft'>
        <img src={ImagenIncio} alt="Tejidos nancy"/>
      </article>
      <section className='bienvenidos container '>
        <div className='bienvenidosHijos'>B</div>
        <div className='bienvenidosHijos '>i</div>
        <div className='bienvenidosHijos'>e</div>
        <div className='bienvenidosHijos '>n</div>
        <div className='bienvenidosHijos'>v</div>
        <div className='bienvenidosHijos '>e</div>
        <div className='bienvenidosHijos '>n</div>
        <div className='bienvenidosHijos '>i</div>
        <div className='bienvenidosHijos'>d</div>
        <div className='bienvenidosHijos '>@</div>
        <div className='bienvenidosHijos'>s</div>
      </section>
      <>
        <h1>Tejidos Artesanales: Calidez y Creatividad Hechos a Mano</h1>
      </>
      <section className='CardsAll'>
        <Cards
          imagen={imagen1}
          title="Hola"
          description="Descripcion del producto"
        />
        <Cards
          imagen={imagen2}
          title="mama"
          description="Descripcion del producto"
        />
        <Cards
          imagen={imagen3}
          title="nose"
          description="Descripcion del producto"
        />
      </section>
    </>
  )

}

export default HomeInicio