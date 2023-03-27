
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/*' element={<NotFound/>}/>
    <Route path='/cart' element={<Cart/>}/>
   
   </Routes>
  );
}

export default App;
