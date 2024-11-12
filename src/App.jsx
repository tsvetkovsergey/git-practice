import { useState } from 'react';
import './App.css';
import { UserBox } from './components/UserBox/UserBox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UserBox />
        <p>Press button to add likes:</p>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </>
  );
}

export default App;
