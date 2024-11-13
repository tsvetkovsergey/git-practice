export default function DateBlock() {
  const date = new Date();

  return <div>Current date: {date.toDateString()}</div>;
}
