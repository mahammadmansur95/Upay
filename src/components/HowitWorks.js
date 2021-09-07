import React, { useState } from 'react';
import workapi from '../API/workApi';

const HowitWorks = () => {
  const [workData, setWorkData] = useState(workapi);

  return (
    <>
      <section>
        <div className="work_container container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {workData.map((curEle) => {
              const { id, logo, title, info } = curEle;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work_container_subdiv">
                    <i class={`fontawesome_style ${logo}`}></i>
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

export default HowitWorks;
