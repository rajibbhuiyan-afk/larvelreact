// src/components/SingleFacility.jsx

import PropTypes from "prop-types";


export default function SingleFacility({ facility, delay }) {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="facility-item">
        <div className={`facility-icon ${facility.iconBg}`}>
          <span className={facility.iconBg}></span>
          <img
            className="facility-image"
            src={facility.image}
            alt={facility.title}
            loading="lazy"
          />
          <span className={facility.iconBg}></span>
        </div>
        <div className={`facility-text ${facility.iconBg}`}>
          <h3 className={`${facility.textColor} mb-3`}>{facility.title}</h3>
          <p className="mb-0">{facility.text}</p>
        </div>
      </div>
    </div>
  );
}

SingleFacility.propTypes = {
  facility: PropTypes.shape({
    iconBg: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
};
