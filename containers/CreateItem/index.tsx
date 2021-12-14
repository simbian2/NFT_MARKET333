import { useEffect } from 'react';

import {
  data1,
  data2,
  data3,
} from '../../data/data-containers/data-CreateItem.js';
import { CreateItemIcon2, CreateItemIcon3 } from '../../utils/allImgs';
import { getMainWidth, handleTitle } from '../../utils';

import Navbar from '../../layouts/Head/Navbar';

import Breadcrumb from '../../components/Breadcrumb';
import SectionHeading from '../../components/SectionHeading';

import CardForm from './CardForm';
import CategoryCard from './CategoryCard';
import './CreateItem.css';

const CreateItemContainer = () => {
  useEffect(() => {
    // document.title = 'CreateItem'
    handleTitle('CreateItem');
    getMainWidth();
  }, []);

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />
        <div className="container-fluid">
          <div className="page-header breadcrumb-header min-height-300 border-radius-xl mt-4 mb-30 CreateItemIMG">
            <Breadcrumb
              text1="Create Item"
              text2="Create your own brand through your new artworks"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <SectionHeading
                img={CreateItemIcon2}
                text="Create New Item"
                title="New Created Item"
              />
              <div className="col-12 mb-30">
                <div className="card z-index-0">
                  <CardForm data={data3} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-12">
                <SectionHeading
                  img={CreateItemIcon3}
                  text="Item Settings"
                  title="Item Settings"
                />
                <CategoryCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateItemContainer;
