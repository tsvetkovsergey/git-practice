import { useState } from 'react';
import './App.css';
import { UserBox } from './components/UserBox/UserBox';
import DateBlock from './components/DateBlock/DateBlock';
import BlueBlock from './components/BlueBlock/BlueBlock';
import WeatherBlock from './components/WeatherBlock/WeatherBlock';
import Header from './components/Header/header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div>
        <div className="container">
          <BlueBlock />
        </div>
        <WeatherBlock />
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
