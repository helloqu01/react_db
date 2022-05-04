
import './App.css';
import Axios from 'axios';
import {React, useEffect} from 'react';
function App() {

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((Response)=>{
      console.log(Response.data)
    })

    
  }, [])
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
