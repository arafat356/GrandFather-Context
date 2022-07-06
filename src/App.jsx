import { useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'diamond Ring';
  return (
    <div className="App">
      <button onClick={() => setHouse(house + 1)}>Buy A new House</button>
      <GrandFather house={house} ornaments={ornaments}></GrandFather>
    </div>
  );
}

export default App;
