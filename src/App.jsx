import { createContext, useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

// const RingContext = createContext('ring');

export const RingContext = createContext('ring');

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'alo bhorta Ring';
  return (
    <RingContext.Provider value="diamond Ring">
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy A new House</button>
        <GrandFather house={house} ornaments={ornaments}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
