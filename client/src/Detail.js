import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Detail.scss';

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`https://api.airtable.com/v0/appm1y6M0Hw6ZkDvG/dishes/${id}?api_key=keyU6v1pSNASaRh2E`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  return (
    <main className="detail-container">
      <h1 className="detail-heading">{data?.fields?.food_name}</h1>
      <div className="img-container">
        <img className="detail-img" src={data?.fields?.food_image} />
      </div>
      <p>
        <strong>Ingredients:</strong> {data?.fields?.food_ingredients}
      </p>
      <p>
        <strong>Instructions:</strong> {data?.fields?.food_instructions}
      </p>
    </main>
  );
}

export default Detail;
