import React from 'react';
import FaqImage from './FaqImage';
import FaqQuestion from './FaqQuestion';

import './Page.css';

const Page = () => {
  return (
    <div className="faq-container">
      <div className="faq-image-desktop">
        <FaqImage />
      </div>
      <div className="faq-text">
        {/* <div className="faq-text-header">FAQ</div> */}
        <FaqQuestion />
      </div>
    </div>
  );
};

export default Page;
