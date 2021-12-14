import './SecHeadContact.css';

const SecHeadContact = () => {
  return (
    <div className="page-header align-items-start section-height-50 pt-5 pb-11 m-3 border-radius-lg ContactIMG">
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center mx-auto">
            <h1 className="text-white mb-2 mt-5">Contact Us!</h1>
            <p className="text-lead text-white">
              06143 서울 강남구 봉은사로 302, 2층 YGBS
            </p>
            <p className="text-lead text-white">
              <a href="mailto:ceo@ygbs.co.kr">ceo@ygbs.co.kr</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecHeadContact;
