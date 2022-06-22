import Items from './Components/Items';
import './Home.scss';
import { useEffect, useState } from 'react';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    const request = fetch('https://api.airtable.com/v0/appm1y6M0Hw6ZkDvG/dishes?api_key=keyU6v1pSNASaRh2E');
    request.then((response) => response.json()).then((data) => setItems(data.records));
  }, []);

  return (
    <main className="home-container">
      <h2>Welcome</h2>
      <p>This is a collection of some of my favorite foods, with cooking instructions. I hope you like it!</p>
      <div className="row">
        {items.map((item) => (
          <Items id={item.id} title={item.fields.food_name} img={item.fields.food_image} />
        ))}
      </div>
    </main>
  );
}

export default Home;
