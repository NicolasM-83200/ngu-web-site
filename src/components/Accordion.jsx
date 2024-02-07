import React, { useEffect, useRef, useState } from 'react';
import arrow from '../assets/img/arrow_up.png';

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const contentHeight = ref.current.scrollHeight;
    ref.current.style.height = isOpen ? `${contentHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className='accordion'>
      <div className='accordion__title' onClick={toggleAccordion}>
        <span className='accordion__title-text'>{props.title}</span>
        <img
          className={`accordion__title-arrow ${isOpen ? 'open' : 'closed'}`}
          src={arrow}
          alt='arrow collapse item'
        />
      </div>
      <div
        ref={ref}
        className={`accordion__content ${isOpen ? 'open' : 'closed'}`}
      >
        <div className={`accordion__content-${props.content}`}>
          {props.item}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
