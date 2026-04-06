import { BrowserRouter as Router , Route, Routes, Link } from 'react-router';
import Equipos from './Equipos'
import Favoritos from './Favortitos'
import Home from './Home'
import Informativa from './Informativa'
import Original from './Original'
import Usuarios from './Usuarios'
import './App.css'


function App() {


  return (
    <Router>
      <Routes>
    

<Route path="/" element={<Home /> } />
<Route path="/Favoritos" element={<Favoritos /> } />
<Route path="/Original" element={<Original /> } />
<Route path="/Usuarios" element={<Usuarios /> } />
<Route path="/Informativa" element={<Informativa/> } />
<Route path="/Equipos/:Equipos" element={<Equipos /> } />

    
      </Routes>
      <nav className="c-Menu">
    <a href="#">Home</a>
    <Link to ="/Favoritos">Favoritos</Link>
    <Link to ="/Original">Orginal</Link>
    <Link to ="/Usuarios">Usuarios</Link>
    <Link to ="/Informativa">Informatia</Link>
    <Link to ="/Equipos">Equipos</Link>
</nav>
    </Router>
    
  )
}

export default App
