import { useState } from 'react';
import './App.css';
import { UserBox } from './components/UserBox/UserBox';
import DateBlock from './components/DateBlock/DateBlock';
import BlueBlock from './components/BlueBlock/BlueBlock';
import WeatherBlock from './components/WeatherBlock/WeatherBlock';
import ImageBlock from './components/ImageBlock/ImageBlock';
import Header from './components/Header/header';
import TimeComponent from './components/GigaCodeComponent/GigaComp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div>
        <TimeComponent />
        <div className="container">
          <BlueBlock />
        </div>
        <WeatherBlock />
        <ImageBlock />
        <div className="container"></div>
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
