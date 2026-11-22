import { Link, Navigate, useParams } from "react-router-dom";
import { events } from "./Event";
import "./event.css";

export default function EventDetails() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <section className="event-detail-section">
      <div className="container">
        <Link className="event-back-link" to="/events">
          <span aria-hidden="true">←</span> সব অনুষ্ঠান
        </Link>
        <article className="event-detail">
          <div className="event-detail-image">
            <img src={event.image} alt={event.title} />
          </div>
          <div className="event-detail-content">
            <span className="event-eyebrow">{event.category}</span>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
