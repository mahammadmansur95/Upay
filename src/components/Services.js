import React, { useState } from 'react';
import data from '../API/servicesApi';

const Services = () => {
  const [serviceData, setServiceData] = useState(data);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">How send money</h1>
          <div className="row">
            {serviceData.map((curEle) => {
                const {id,logo,title,info} = curEle;
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                    <i className={`fontawesome_style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main_hero_para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
