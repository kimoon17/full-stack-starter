import Items from './Components/Items';
import './Home.scss';

function Home() {
  return (
    <main className="home-container">
      <h2>Welcome</h2>
      <p>This is a collection of some of my favorite foods, with cooking instructions. I hope you like it!</p>
      <Items
        title="Meat Cennelloni"
        text="flour, eggs, celery, etc."
        img="https://recipetineats.com/wp-content/uploads/2019/11/Beef-Cannelloni_9.jpg"
      />
      <Items
        title="Pasta Puttanesca"
        text="spaghetti, capers, black olives, etc."
        img="https://www.acouplecooks.com/wp-content/uploads/2018/04/Pasta-Puttanesca-005.jpg"
      />
      <Items
        title="Tiramisu"
        text="mascarpone, eggs, sugar"
        img="https://www.mybakingaddiction.com/wp-content/uploads/2021/01/plated-tiramisu.jpg"
      />
    </main>
  );
}

export default Home;
