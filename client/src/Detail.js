import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Detail.scss';

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`/api/items/${id}`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  return (
    <main className="detail-container">
      <h1 className="detail-heading">{data?.food_name}</h1>
      <div className="img-container">
        <img className="detail-img" src={data?.food_image} />
      </div>
      <p>
        <strong>Ingredients:</strong> {data?.food_ingredients}
      </p>
      <p>
        <strong>Instructions:</strong> {data?.food_instructions}
      </p>
    </main>
  );
}

export default Detail;
