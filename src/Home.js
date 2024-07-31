import React from 'react';
import './Home.scss';
import BillingSoftware from './Components/BillingSoftware';
import OverlapContainer from './components/OverlapContainer';
import ProductExplanation from './Components/ProductExplanation';


const Home = () => {
  return (
    <div className="home">

      <BillingSoftware />

      <section className="overlap-section">
        <OverlapContainer />
      </section>

      {/* Product Explanation */}
      <ProductExplanation />

    
    </div>
  );
};

export default Home;


