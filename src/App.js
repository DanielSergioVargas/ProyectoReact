import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Navbar } from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/> }/>
        <Route path='/categoria/:categoriaId' element= {<ItemListContainer/> }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
