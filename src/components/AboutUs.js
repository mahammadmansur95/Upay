import React, { useState } from 'react';
import howtoUseApp from '../API/howToUse';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(howtoUseApp);

  return (
    <>
      <section className="common_section our_services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our_service_leftside_img">
              <img src="./images/hero3.jpg" alt="aboutUsImg" />
            </div>
            <div className="col-12 col-lg-7 our_services_list">
              <h1 className="main-heading">How to Use the APP</h1>
              {aboutData.map((curEle) => {
                const { id, title, info } = curEle;
                return (
                  <>
                    <div className="row our_services_info">
                      <div className="col-1 our_services_number">{id}</div>
                      <div className="col-10 our_services_data">
                        <h2>{title}</h2>
                        <p className="main_hero_para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
