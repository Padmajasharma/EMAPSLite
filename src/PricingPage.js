import React from 'react';

import IntroSection from './components/IntroSection';
import PlanDetails from './components/PlanDetails';
import PlanComparison from'./components/PlanComparison';
import './PricingPage.scss';

const PricingPage = () => {
  return (
    <>
      <div className="pricing-page">
        <IntroSection />
        <PlanDetails />
        <PlanComparison />
      </div>
    </>
  );
};

export default PricingPage;

