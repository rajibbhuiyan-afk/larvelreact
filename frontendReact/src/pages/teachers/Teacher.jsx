
import teamImageOne from "/assets/frontend_assets/img/teachers/mitun.jpeg";
import teamImageTwo from "/assets/frontend_assets/img/teachers/jannat.png";
import teamImageThree from "/assets/frontend_assets/img/teachers/tajbin-bhuiyan.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Teacher() {
  const { t } = useTranslation();
  const navigate = useNavigate();
    return (
      <div className="container-xxl py-5">
        <div className="container">         
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 mx-auto wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative" >
                <img className="img-fluid rounded-circle w-75" src={teamImageOne} alt="Mithun Mojundar" />            
                <div
                    style={{ cursor: 'pointer' }}
                    className="team-text text-center"
                    onClick={() => navigate('/teacher-profile')}
                  >
                  <h3>{t('mitun-mazumder')}</h3>
                  <p>{t('head-teacher')}</p>                 
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-between mt-1">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageTwo} alt="Jannatul Ferdous" />               
                 <div
                    style={{ cursor: 'pointer'}}
                    className="team-text text-center"
                    onClick={() => navigate('/teacher-profile')}
                  >
                  <h3>{t('jannatul-ferdous')}</h3>
                  <p>{t('in-charge')}</p>                
                </div>                
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageThree} alt="Tajbin Bhuiyan" />                
                 <div
                    style={{ cursor: 'pointer' ,  }}
                    className="team-text text-center"
                    onClick={() => navigate('/teacher-profile')}
                  >
                  <h3>{t('tajbin-bhuiyan')}</h3>
                  <p>{t('in-charge')}</p>             
                </div>                
              </div>
            </div>                    
          </div>
        </div>
      </div>
    );
  }
  