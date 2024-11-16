import './Block.styles.css';

export default function Block({ children, styles }) {
  return (
    <div className="block" style={styles}>
      {children}
    </div>
  );
}
