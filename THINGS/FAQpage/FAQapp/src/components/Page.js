import React from 'react';
import FaqImage from './FaqImage';
import FaqQuestion from './FaqQuestion';

import './Page.css';

const Page = () => {
  return (
    <div className="faq-container">
      <div className="faq-image">
        <FaqImage />
      </div>
      <div className="faq-content">
        <FaqQuestion />
      </div>
    </div>
  );
};

export default Page;
