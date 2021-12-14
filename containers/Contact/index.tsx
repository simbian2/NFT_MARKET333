import { useEffect } from 'react';
import NavbarLast from '../../layouts/Head/NavbarLast';
import SecHeadContact from './SecHeadContact';
import CardForm from './CardForm';
import { handleTitle } from '../../utils';

const ContactContainer = () => {
  useEffect(() => {
    handleTitle('Contact');
  }, []);

  return (
    <>
      <NavbarLast />
      <section className="h-100-vh mb-8">
        <SecHeadContact />
        {/* <div className="container">
          <div
            className="row mt-lg-n10 mt-md-n11 mt-n10"
            style={{ marginTop: '-10rem' }}
          >
            <div className="col-md-7 mx-auto mb-30">
              <div className="card z-index-0">
                <div className="card-header gray-bg text-center pt-4">
                  <h5>Leave Us a Message</h5>
                </div>
                <CardForm />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ContactContainer;
