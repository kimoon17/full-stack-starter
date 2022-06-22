import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <main id="container">
      <h1>
        Detail: {id} {data?.fields?.food_name}
      </h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}

export default Detail;
