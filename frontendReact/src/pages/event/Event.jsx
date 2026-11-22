import { Link } from "react-router-dom";
import { events } from "./events";
import "./event.css";

export default function Event() {
  return (
    <section className="event-section">
      <div className="container">
        <header className="event-heading">
          <span className="event-eyebrow">স্মৃতি, শিক্ষা ও আনন্দ</span>
          <h1>আমাদের আয়োজিত অনুষ্ঠানসমূহ</h1>
          <p>
            বিদ্যালয়ের জাতীয় ও প্রাতিষ্ঠানিক অনুষ্ঠানগুলোর ছবি এবং সংক্ষিপ্ত
            বিবরণ দেখুন।
          </p>
        </header>

        <div className="event-grid">
          {events.map((event) => (
            <Link
              className="event-card"
              key={event.slug}
              to={`/events/${event.slug}`}
              aria-label={`${event.title} সম্পর্কে বিস্তারিত দেখুন`}
            >
              <div className="event-card-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <span className="event-card-category">{event.category}</span>
              </div>
              <div className="event-card-content">
                <h2>{event.title}</h2>
                <span className="event-card-link">বিস্তারিত দেখুন <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
