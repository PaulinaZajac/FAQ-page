import React from 'react';
import faqImageDesktop from '../images/illustration-woman-online-desktop.svg';
import faqImageMobile from '../images/illustration-woman-online-mobile.svg';
import faqImageDesktopBox from '../images/illustration-box-desktop.svg';
import FaqPatternDesktop from '../images/bg-pattern-desktop.svg';
import './Page.css';

const FaqImage = () => {
  return (
    <div className="faq-image-woman">
      <img className="image-desktop-only" src={faqImageDesktop} alt="woman" />
      <img className="box-image-desktop-only" src={faqImageDesktopBox} />
      <img className="image-mobile-only" src={faqImageMobile} alt="woman" />
      {/* <div className="faq-image-pattern">
        <img src={FaqPatternDesktop} alt="" />
      </div> */}
    </div>
  );
};
export default FaqImage;
