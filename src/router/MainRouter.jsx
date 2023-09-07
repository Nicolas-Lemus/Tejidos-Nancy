import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Tejidos from '../pages/Tejidos'
import SobreMi from '../pages/SobreMi'
import Contactos from '../pages/Contactos'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'


const MainRauter = () => {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/SobreMi' element={<SobreMi/>} />
                <Route exact path='/Tejidos' element={<Tejidos/>} />
                <Route exact path='/Contactos' element={<Contactos/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default MainRauter