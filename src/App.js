import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cats from './components/Cats';
import Parvifolia from './components/Parvifolia';


function App() {

  const [cats,setCats] = useState({cats:""})

  const dataBring = (data)=>{
    setCats({cats:data})
  }
  
  return (
    <div className="App">
      <Navbar />
      <Search dataBring={dataBring} />
      <Cats cats={cats}/>
      <Parvifolia />
    </div>
  );
}

export default App;
