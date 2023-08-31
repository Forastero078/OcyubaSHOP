import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Indumentaria from './components/Indumentaria/Indumentaria';
import Catalogo from './components/Catalogo/Catalogo';

function App() {
  return (
    <div className="App">


      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />  // display some products from inventario
        <Route path='/indumentaria/mujer/' element={<Indumentaria/>} />
        <Route path='/indumentaria/mujer/vestidos' element={<Catalogo/>} />
        <Route path='/indumentaria/mujer/lenceria' element={'Lenceria femenina'} />
        <Route path='/indumentaria/kids' element={'Ropa de niños'} />
        <Route path='/accesorios' element={'Accesorios'} />


      </Routes>

    </div>
  );
}

export default App;
