import React,{useState} from 'react';
import Search from './Search';
import Cats from './Cats';


function Home() {

  const [cats,setCats] = useState({cats:""})

  const dataBring = (data)=>{
    setCats({cats:data})
  }
  
  return (
    <div className="Home">
      <Search dataBring={dataBring} />
      <Cats cats={cats}/>
    </div>
  );
}

export default Home;
