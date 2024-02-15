

import "../css/Card.scss";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  source?: string;
  site?: string;
}

function Card({ image, title, subtitle, source, site }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button type="button" className="btn btn-secondary" onClick={() => window.open(source)}>
        {" "}
        Source{" "}
      </button>
      <button type="button" className="btn btn-primary" onClick={() => window.open(site)}>
        {" "}
        Demo{" "}
      </button>
    </div>
  );
}

export default Card;
