import './DateBlock.styles.css';

export default function DateBlock() {
  const date = new Date();

  return (
    <div className="date-block shadow border">
      <p>Показывает дату</p>
      <p>Current date: {date.toDateString()}</p>
    </div>
  );
}
