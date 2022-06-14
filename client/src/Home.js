import Items from './Components/Items';

function Home() {
  return (
    <main className="container">
      <h2>Kiki's Recipes</h2>
      <p>Welcome</p>
      <p>This is a collection of some of my favorite foods, with cooking instructions. I hope you like it!</p>
      <Items title="title" text="text" />
      <Items />
      <Items />
    </main>
  );
}

export default Home;
