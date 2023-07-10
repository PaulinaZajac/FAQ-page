import React from 'react';
import faqImageDesktop from '../images/illustration-woman-online-desktop.svg';
import FaqPatternDesktop from '../images/bg-pattern-desktop.svg';
import './Page.css';

const FaqImage = () => {
  return (
    <div className="faq-image-woman">
      <img src={faqImageDesktop} alt="woman" />
    </div>
  );
};
export default FaqImage;
