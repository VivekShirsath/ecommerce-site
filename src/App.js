import {Routes,Route} from 'react-router-dom'

import { Home } from './pages/Home/Home';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
