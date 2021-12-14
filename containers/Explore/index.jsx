import { useEffect } from 'react';

import { getMainWidth, handleTitle } from '../../utils';
import { ExploreIcon2, ExploreIcon3 } from '../../utils/allImgs';

import Navbar from '../../layouts/Head/Navbar';

import Breadcrumb from '../../components/Breadcrumb';
import SecNewListed from '../../components/SecNewListed';
import SecLiveAuctions from '../../components/SecLiveAuctions';
import SectionHeading from '../../components/SectionHeading';
import './Explore.css';

const ExploreContainer = () => {
  useEffect(() => {
    // document.title = 'Explore'
    handleTitle('Explore');
    getMainWidth();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />

        <div className="container-fluid">
          <div className="page-header breadcrumb-header min-height-300 border-radius-xl mt-4 mb-30 ExploreIMG">
            <Breadcrumb
              text1="Latest Items"
              text2={`A new world where what gainings(you gain) through\nyour artworks become your real assets`}
            />
          </div>
        </div>

        <SectionHeading
          img={ExploreIcon2}
          text="Latest Items"
          title="New Listed Items"
        />

        <SecNewListed />

        <SectionHeading
          img={ExploreIcon3}
          text="Hot Auctions"
          title="Live Auctions"
        />

        <SecLiveAuctions />
      </main>
    </>
  );
};

export default ExploreContainer;
