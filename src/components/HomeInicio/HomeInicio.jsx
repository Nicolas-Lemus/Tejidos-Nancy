import React from 'react'
import ImagenIncio from '../../images/TejidosNancy.gif'
import './HomeInicio.css'



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
      
    </>
  )

}

export default HomeInicio