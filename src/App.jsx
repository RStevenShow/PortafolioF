import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Inicio/Home.jsx'
import Contacto from './Pages/Contacto/Contacto.jsx'
import Proyectos from './Pages/Proyectos/Proyectos.jsx'
import CV from './Pages/CV/CV.jsx'
import Cursos from './Pages/Cursos/Cursos.jsx'
import Headers from './Components/Header.jsx'
import { FloatingDock } from './Components/FloatingDock.jsx'
function App() {
  return (
    <BrowserRouter>
    <Headers />
    <FloatingDock />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/cursos' element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App