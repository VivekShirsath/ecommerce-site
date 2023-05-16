import {Routes,Route} from 'react-router-dom'

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { ProductListing } from './pages/ProductListing/ProductListing';
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path ="/product" element={<ProductListing/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
