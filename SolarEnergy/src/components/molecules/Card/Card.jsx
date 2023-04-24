import "./Card.css";

export default function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {value && <p>{value}</p>}
    </div>
  );
}
