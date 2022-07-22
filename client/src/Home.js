import Items from './Components/Items';
import './Home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

function Home() {
  const { user } = useAuthContext();
  const [items, setItems] = useState([]);

  useEffect(function () {
    const request = fetch(`/api/dishes`);
    request.then((response) => response.json()).then((data) => setItems(data));
  }, []);

  return (
    <main className="home-container">
      <h2>Welcome</h2>
      <p>This is a collection of some of my favorite foods, with cooking instructions. I hope you like it!</p>
      <div className="row">
        {items.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            food_name={item.food_name}
            food_image={item.food_image}
            food_ingredients={item.food_ingredients}
            food_instructions={item.food_instructions}
          />
        ))}
      </div>
      <div className="row">
        {user?.isAdmin && (
          <p>
            <Link to="/detail/new" className="btn btn-primary">
              New Dish
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}

export default Home;
