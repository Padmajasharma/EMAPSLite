import React, { useEffect } from 'react';
import './OverlapContainer.scss';
import Award1 from '../assets/Award1.png';
import Award2 from '../assets/Award2.png';
import Brand1 from '../assets/brand1.jpg';
import Brand2 from '../assets/brand2.png';

const OverlapContainer = () => {
  useEffect(() => {
    console.log('OverlapContainer is rendered');
  }, []);

  return (
    <div className="overlap-container">
      <div className="top-half">
        
        <div className="left-half">
          <div className="award">
            <img src={Award1} alt="Award 1" />
            <div>
              <a href="https://support.upwork.com/hc/en-us/articles/211068468-Top-Rated">Read More</a>
            </div>
          </div>
        </div>
        <div className="right-half">
          <div className="award">
            <img src={Award2} alt="Award 2" />
            <div>
              <a href="https://www.goodfirms.co/">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <h3>Trusted By Brands</h3>
        <div className="brand-logos">
          <div className="brand">
            <img src={Brand1} alt="Brand 1" />
          </div>
          <div className="brand">
            <img src={Brand2} alt="Brand 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlapContainer;
