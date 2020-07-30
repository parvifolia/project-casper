import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import AddCat from './components/AddCat';
import Parvifolia from './components/Parvifolia'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/add' component={AddCat} />
        <Parvifolia />
      </BrowserRouter>
    </div>
  );
}

export default App;
