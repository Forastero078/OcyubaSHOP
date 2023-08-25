import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">



      <Routes>

       <Route path='/' element={<Home/>}/>  // display some products from inventario
       <Route path='/indumentaria/mujer/' element={'Ropa de Mujer'}/>
       <Route path='/indumentaria/mujer/lenceria' element={'Lenceria femenina'}/>
       <Route path='/indumentaria/kids' element={'Ropa de niños'}/>
       <Route path='/accesorios' element={'Accesorios'}/>


      </Routes>
      
    </div>
  );
}

export default App;
