import React from 'react';

const Header = () => {
  return (
    <header>
      <section className="container main_hero_container">
        <div className="row">
          <div className="col-12 col-lg-6 header_left d-flex justify-content-center flex-column align-items-start">
            <h1 className="display-2">
              Online Payment Made <br /> Easy For you
            </h1>
            <p className="main_her0_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h3>Get early access for you</h3>
            <div className="input_group mt-3">
              <input
                type="text"
                className="rounded-pill me-3 p-2 form_control_text"
                placeholder="Enter your Email"
              />
              <div className="input_group_button">Get it now</div>
            </div>
          </div>
          <div className="col-12 col-lg-6 header_right d-flex justify-content-center align-items-center main_herosection_images">
            <img src="./images/hero1.jpg" alt="hero" className="img-fluid"/>
            <img src="./images/hero4.jpg" alt="hero" className="img-fluid main_herosecton_img2"/>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
