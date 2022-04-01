import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='about'></Route>
            <Route path='/productDetail' element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
    </div>
  );
}

export default App;
