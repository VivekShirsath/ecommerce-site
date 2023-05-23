import {Routes,Route} from 'react-router-dom'

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { ProductListing } from './pages/ProductListing/ProductListing';
import { LogIn } from './pages/LogIn/LogIn';
import { SignUp } from './pages/SignUp/SignUp';
import { ProtectedRoute } from './components/ProtectedRoute';
import {Profile} from './pages/Profile/Profile';
import { Cart } from './pages/Cart/Cart';
import { WishList } from './pages/WishList/WishList';
import { Details } from './pages/Details/Details';
import { Address } from './pages/Address/Address';
import Mockman from "mockman-js";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path ="/product" element={<ProductListing/>}/>
          <Route path="/mockman" element={<Mockman/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/> 
          <Route path="/details" element={<Details/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path = "/profile" element = {
            <ProtectedRoute>
              {<Profile/>}
            </ProtectedRoute>
          }/>

          <Route path = "/cart" element = {
            <ProtectedRoute>
              {<Cart/>}
            </ProtectedRoute>
          }/>

        <Route path = "/wishlist" element = {
            <ProtectedRoute>
              {<WishList/>}
            </ProtectedRoute>
          }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
