
import { useTranslation } from "react-i18next";
import SingleTeacher from './SingleTeacher';
import aloRaniSaha from '/assets/frontend_assets/img/teachers/alo-rani-saha.png';
import kabiMowshumiMow from '/assets/frontend_assets/img/teachers/kabi-mowshumi-mow.png';
import Mansura from '/assets/frontend_assets/img/teachers/mansura.png';
import MituRaniHalder from '/assets/frontend_assets/img/teachers/mitu-rani-halder.png';
import afsanaMimi from '/assets/frontend_assets/img/teachers/nasima-khan.png';
import nironjonaGhoshProma from '/assets/frontend_assets/img/teachers/nironjona-ghosh-proma.png';
import rabeaAlamgir from '/assets/frontend_assets/img/teachers/rabea-alamgir.png';
import ritaKhatun from '/assets/frontend_assets/img/teachers/rita-khatun.png';
import sharminAkterJothi from '/assets/frontend_assets/img/teachers/sharmin-akter-jothi.png';
import tamannaAkter from '/assets/frontend_assets/img/teachers/tamanna-akter.png';
import nasrinAkter from '/assets/frontend_assets/img/teachers/nasrin-akter.png';
import ruponDey from '/assets/frontend_assets/img/teachers/rupon-dey.png';
import sharminAkter from '/assets/frontend_assets/img/teachers/sharmin-akter.png';
import rehenaAkterOpi from '/assets/frontend_assets/img/teachers/rehena-akter-opi.png';
import etiSutrdhar from '/assets/frontend_assets/img/teachers/eti-sutrdhar.png';
import rezwanaKarimEshita from '/assets/frontend_assets/img/teachers/rezwana-karim eshita.png';
import hamidaChowdhury from '/assets/frontend_assets/img/teachers/hamida-chowdhury.png';
import shamsunNahar from '/assets/frontend_assets/img/teachers/shamsun-naher.png';
import abdulAzizShekh from '/assets/frontend_assets/img/teachers/abdul-aziz-shekh.png';
import marufaDelower from '/assets/frontend_assets/img/teachers/marufa-delower.png';
import nasrinAkterSharmin from '/assets/frontend_assets/img/teachers/nasrin-akter-sharmin.png';
import bonhiShikhaDas from '/assets/frontend_assets/img/teachers/bonhi-shikha-das.png';
import shakilAhmmed from '/assets/frontend_assets/img/teachers/shakil-ahmmed.png';
import sanjidaAlam from '/assets/frontend_assets/img/teachers/sanjida-alam.png';
import humairaNazmun from '/assets/frontend_assets/img/teachers/humaira-nazmun.png';
import abuTaherMollah from '/assets/frontend_assets/img/teachers/abu-taher-mollah.png';


export default function TeacherList() {
  const { t } = useTranslation();  

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">{t('all-teachers-list')}</h1>
          <p>{t('all-teachers-description')}</p>
        </div>
          <div className="row g-4">

             <SingleTeacher 
              teacherName={t('sharmin-akter-jothi')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={sharminAkterJothi}  
              educationalQualification={t('Degree in BSS ')}
            />  
            <SingleTeacher 
              teacherName={t('mitu-rani-halder')} 
              teacherDesignation={t('sinior-assistant-teacher')} 
              teacherImage={MituRaniHalder}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('rabea-alamgir')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={rabeaAlamgir}  
              educationalQualification={t('-')}
            />  
            <SingleTeacher 
              teacherName={t('rita-khatun')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={ritaKhatun}  
              educationalQualification={t('-')}
            />  
            <SingleTeacher 
              teacherName={t('rehena-akter-opi')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={rehenaAkterOpi}  
              educationalQualification={t('-')}
            />  
            <SingleTeacher 
              teacherName={t('eti-sutrdhar')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={etiSutrdhar}  
              educationalQualification={t('-')}
            />  
            <SingleTeacher 
              teacherName={t('rupon-dey')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={ruponDey}  
              educationalQualification={t('MSC')}
            />  
            <SingleTeacher 
              teacherName={t('afsana-mimi')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={afsanaMimi}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('alo-rani-saha')} 
              teacherDesignation={t('drawing-teacher')} 
              teacherImage={aloRaniSaha} 
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('rezwana-karim-eshita')} 
              teacherDesignation={t('drawing-teacher')} 
              teacherImage={rezwanaKarimEshita} 
              educationalQualification={t('-')}
            />
             <SingleTeacher 
              teacherName={t('tamanna-akter')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={tamannaAkter}  
              educationalQualification={t('Honours')}
            /> 
            <SingleTeacher 
              teacherName={t('nironjona-ghosh-proma')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={nironjonaGhoshProma}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('hamida-chowdhury')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={hamidaChowdhury}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('shamsun-nahar')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={shamsunNahar}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('abdul-aziz-shekh')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={abdulAzizShekh}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('mansura-begum-baby')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={Mansura}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('marufa-delower')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={marufaDelower}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('nasrin-akter-sharmin')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={nasrinAkterSharmin}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('bonhi-shikha-das')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={bonhiShikhaDas}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('shakil-ahmmed')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={shakilAhmmed}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('sanjida-alam')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={sanjidaAlam}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('humaira-nazmun')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={humairaNazmun}  
              educationalQualification={t('-')}
            />
            <SingleTeacher 
              teacherName={t('abu-taher-mollah')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={abuTaherMollah}  
              educationalQualification={t('-')}
            />   
            <SingleTeacher 
              teacherName={t('kabi-mowshumi-mow')} 
              teacherDesignation={t('music-teacher')} 
              teacherImage={kabiMowshumiMow}  
              educationalQualification={t('-')}
            />        
            <SingleTeacher 
              teacherName={t('nasrin-akter')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={nasrinAkter}  
              educationalQualification={t('Honours BSS')}
            />              
            <SingleTeacher 
              teacherName={t('sharmin-akter')} 
              teacherDesignation={t('assistant-teacher')} 
              teacherImage={sharminAkter}  
              educationalQualification={t('Master’s in Management ')}
            />              
          </div>      
      </div>
    </div>
  );
}
