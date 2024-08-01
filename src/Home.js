import React from 'react';
import './Home.scss';
import BillingSoftware from './components/BillingSoftware';
import OverlapContainer from './components/OverlapContainer';
import ProductExplanation from './cmponents/ProductExplanation';


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


