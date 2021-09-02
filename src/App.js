import logo from './logo.svg';
import './App.css';
import { Button,Container,Jumbotron } from 'reactstrap';
import Home from './components/Home';
import Type from './components/Type';

function App() {
  return (
<div>
    <Home />
    <br></br>
    <br></br>
    <Type type={{ title:"FourWheeler",description:"family car,Transport vehicle,others" }}
    />
     <Type type={{ title:"TwoWheeler",description:"Bike,Scooty,SportsBike,Others" }}
    />
     <Type type={{ title:"Transports",description:"Heavy Transport,LocalTransport,Others" }}
    />
    </div>
    
    
  );
}

export default App;
