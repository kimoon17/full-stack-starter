import './Items.scss';
import { Link } from 'react-router-dom';

function Items({ id, title, img }) {
  return (
    <div className="card col-md-6">
      <img className="card-img-top items-image" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"></p>
        <Link to={`/detail/${id}`} className="btn btn-primary">
          Go somehwere
        </Link>
      </div>
    </div>
  );
}

export default Items;
