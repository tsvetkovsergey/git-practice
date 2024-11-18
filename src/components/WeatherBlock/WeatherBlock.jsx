import Block from '../Block/Block';

export default function WeatherBlock() {
  return (
    <Block styles={{ backgroundColor: 'cornflowerblue', margin: '1rem 0' }}>
      <div>Today is cloudy and rainy. Temperature is 5 degrees Celsius.</div>
    </Block>
  );
}
