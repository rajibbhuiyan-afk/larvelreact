// src/components/Facilities.jsx
import '../../i18n';
import { useTranslation } from 'react-i18next';
import SingleFacility from './SingleFacilities';


export default function Facilities() {
  const { t } = useTranslation();

  const facilityList = [
    {
      icon: 'fa-tv',
      iconBg: 'bg-primary',
      title: t('projector'),
      text: t('our-school-projector-makes-learning-fun-and-effective'),
      textColor: 'text-primary',
    },
    {
      icon: 'fa-snowflake',
      iconBg: 'bg-success',
      title: t('air-conditioner'),
      text: t('comfortable-ac-classrooms-where-learning-is-fun-and-relaxing'),
      textColor: 'text-success',
    },
    {
      icon: 'fa-video',
      iconBg: 'bg-warning',
      title: t('cctv'),
      text: t('our-school-cctv-ensures-continuous-surveillance-for-students-safety'),
      textColor: 'text-warning',
    },
    {
      icon: 'fa-fingerprint',
      iconBg: 'bg-info',
      title: t('digital-attendance'),
      text: t('fingerprint-scanning-records-attendance-safely-and-accurately'),
      textColor: 'text-info',
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="mb-3">{t('school-facilities')}</h1>
          <p>{t('we-offer-modern-and-well-equipped-facilities-to-ensure-the-overall-development-and-utmost-safety-of-our-students.')}</p>
        </div>

        <div className="row g-4">
          {facilityList.map((facility, index) => (
            <SingleFacility key={index} facility={facility} delay={0.1 + index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}
