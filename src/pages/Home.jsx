import '../styles/Home.css';
import HomeBanner from '../compenents/HomeBanner';
import ContainerCard from '../compenents/ContainerCard';
import React from 'react';

function Home() {
  return (
    <React.Fragment>
      <HomeBanner />
      <ContainerCard />
    </React.Fragment>
  );
}

export default Home;
