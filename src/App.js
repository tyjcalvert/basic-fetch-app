import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState();

  const fetchEndpoint = async () => {
    const response = await fetch(process.env.REACT_APP_ENDPOINT);
    const parsed = await response.json();
    setData(JSON.stringify(parsed));
  };


  useEffect(() =>{
    fetchEndpoint();
  }, []);

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
