import { useState } from 'react';
import './App.css';
import { UserBox } from './components/UserBox/UserBox';
import DateBlock from './components/DateBlock/DateBlock';
import BlueBlock from './components/BlueBlock/BlueBlock';
import WeatherBlock from './components/WeatherBlock/WeatherBlock';
import ImageBlock from './components/ImageBlock/ImageBlock';
import Header from './components/Header/header';
import TimeComponent from './components/GigaCodeComponent/GigaComp';
import RedBlock from './components/RedBlock/RedBlock';
import StupidText from './components/StupidText/StupidText';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div>
          <StupidText />
          <TimeComponent />
          <div className="container">
            <BlueBlock />
            <RedBlock />
          </div>
          <WeatherBlock />
          <ImageBlock />
          <DateBlock />
          <UserBox />
          <p className="like-text">Press button to add likes:</p>
          <button onClick={() => setCount(count + 1)}>{count}</button>
          <DateBlock />
        </div>
      </main>
    </>
  );
}

export default App;
