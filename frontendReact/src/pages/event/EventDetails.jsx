import { Link, Navigate, useParams } from "react-router-dom";
import { events } from "./events";
import "./event.css";

export default function EventDetails() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const galleryByYear = (event.gallery ?? [])
    .reduce((years, item) => {
      const year = String(item.year);
      const existing = years.find((group) => group.year === year);
      const images = Array.isArray(item.images) ? item.images : [];

      if (existing) {
        existing.images.push(...images);
      } else {
        years.push({ year, images: [...images] });
      }

      return years;
    }, [])
    .sort((a, b) => Number(b.year) - Number(a.year));

  const gallery = galleryByYear.length > 0
    ? galleryByYear
    : [{ year: null, images: [event.image] }];

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

        <div className="event-gallery" aria-label={`${event.title} ছবির সংগ্রহ`}>
          {gallery.map((group) => (
            <section className="event-gallery-year" key={group.year ?? "gallery"}>
              {group.year && (
                <h2>
                  <span>{group.year}</span> সালের ছবি
                </h2>
              )}
              <div className="event-gallery-grid">
                {group.images.map((image, index) => (
                  <figure className="event-gallery-item" key={`${group.year}-${index}`}>
                    <img
                      src={image}
                      alt={`${event.title}${group.year ? ` - ${group.year}` : ""} ছবি ${index + 1}`}
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
