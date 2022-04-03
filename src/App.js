import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='about'></Route>
        </Routes>
    </div>
  );
}

export default App;
