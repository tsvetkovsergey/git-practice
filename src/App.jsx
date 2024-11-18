import { useState } from 'react';
import './App.css';
import { UserBox } from './components/UserBox/UserBox';
import DateBlock from './components/DateBlock/DateBlock';
import BlueBlock from './components/BlueBlock/BlueBlock';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="container">
          <BlueBlock />
        </div>
        Здесь будет погодный блок
        <DateBlock />
        <UserBox />
        <p className="like-text">Press button to add likes:</p>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <DateBlock />
      </div>
    </>
  );
}

export default App;
