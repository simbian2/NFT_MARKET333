import { NavLink } from "react-router-dom";
import ITag from '../../../components/ITag'

const CardIco = () => {

  return (
      <div className="col-12 py-4">
        <div className="card">
          
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 text-center">
                <NavLink className="btn bg-gradient-dark mb-0" to="/"><ITag ClassName="fas fa-plus mr-10" />Load More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CardIco;