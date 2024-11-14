import './DateBlock.styles.css';

export default function DateBlock() {
  const date = new Date();

  return <div className="block">Current date: {date.toDateString()}</div>;
}
