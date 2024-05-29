import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assets/banner_mens.png'
import womens_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner= {mens_banner} category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="womens" />}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category = "kids" />} />
          <Route path='product' element={<Product/>}>
            < Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
