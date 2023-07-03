import React from 'react';
import faqQuestionArrow from '../images/icon-arrow-down.svg';

const FaqQuestion = () => {
  return (
    <div className="faq-text-wrapper">
      <div className="faq-questions">
        {data.map((item, i) => (
          <div className="item">
            <div className="title">
              <h2>{item.question}</h2>
              <img src={faqQuestionArrow} alt=""></img>
            </div>
            <div className="content">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: 'How many team members I can invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. ',
  },
  {
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do I reset my password? ',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. ',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes! Send us a message and we’ll process your request no questions asked. ',
  },
  {
    question: 'Do you provide additional support? ',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

export default FaqQuestion;
