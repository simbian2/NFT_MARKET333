import { useEffect } from 'react';

import {
  data1,
  data2,
  data3,
} from '../../data/data-containers/data-Profile.js';

import Navbar from '../../layouts/Head/Navbar';

import { ProfileBruce } from '../../utils/allImgs';
import { getMainWidth, handleTitle } from '../../utils';

import SecAvatar from './SecAvatar';
import SecName from './SecName';
import SecNavWrapper from './SecNavWrapper';
import SecSettings from './SecSettings';
import SecInformation from './SecInformation';
import SecLatest from './SecLatest';
import SecProjects from './SecProjects';
import './Profile.css';

const ProfileContainer = () => {
  useEffect(() => {
    // document.title = 'Profile'
    handleTitle('Profile');
    getMainWidth();
  }, []);

  return (
    <>
      <div className="main-content position-relative bg-gray-100">
        <Navbar />
        <div className="container-fluid">
          <div className="page-header min-height-300 border-radius-xl mt-4 ProfileIMG">
            <span className="mask bg-gradient-primary opacity-6"></span>
          </div>
          <div className="card card-body blur shadow-blur mx-4 mt-n6">
            <div className="row gx-4">
              {/* <SecAvatar img={ProfileBruce} /> */}

              <SecName />

              <SecNavWrapper />
            </div>
          </div>
        </div>
        <div className="container-fluid pb-0">
          <div className="row">
            {/* <SecSettings data2={data2} data3={data3} />

            <div className="col-12 col-xl-4 col-lg-6 mt-s">
              <SecInformation />
            </div>

            <SecLatest data1={data1} /> */}

            <SecProjects />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
