import React from 'react'
import './Cards.css'

const Cards = ({title,imagen,description}) => {
  return (
        <section className='Card'>
          <img src={imagen} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
  )
}

export default Cards