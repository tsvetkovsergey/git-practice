import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </>
  );
}

export default App;
