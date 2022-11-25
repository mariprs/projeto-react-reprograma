import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Contato } from './pages/Contato'
import { Sobre } from './pages/Sobre'
import { Repos } from './pages/Portfolio'
import { Footer } from './components/Footer'

export function Router(){
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/portfolio' element={<Repos />} />
            <Route path ='/contato' element={<Contato />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}