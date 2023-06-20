import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {

  const [data, setData] = useState();

  const fetchEndpoint = async () => {
    console.log(process.env.REACT_APP_ENDPOINT)
    const response = await fetch(process.env.REACT_APP_ENDPOINT);
    const parsed = await response.json();
    setData(JSON.stringify(parsed));
  };


  useEffect(() => {
    fetchEndpoint();
  }, []);

  return (
    <div style={{ justifyContent: "center", background: "#006699" }}>
      <Card sx={{ margin: "16px", minWidth: "98vw", background: "#006699", justifyContent: "center", textAlign: "center", }}>
        <CardContent>
          <Typography sx={{ fontSize: 22, fontWeight: "bold" }} color="white" gutterBottom>
            Data can be pulled from internal, or external source.
          </Typography>
          <TextField 
          id="tf" 
          label="Data from endpoint" 
          variant="outlined"
          multiline 
          focused 
          defaultValue={data} 
          style={{ width: "90%" }} 
          InputProps={{
            readOnly: true,
          }} 
        />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
