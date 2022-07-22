import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from './Api';

function ItemForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    food_name: '',
    food_image: '',
    food_ingredients: '',
    food_instructions: '',
  });

  useEffect(() => {
    if (id) {
      Api.dishes.get(id).then((response) => setData(response.data));
    }
  }, [id]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      let response;
      if (id) {
        response = await Api.dishes.update(id, data);
      } else {
        response = await Api.dishes.create(data);
      }
      navigate(`/detail/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <h1>Dish</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="food_name">
                Food Name
              </label>
              <input type="text" className="form-control" id="food_name" name="food_name" onChange={onChange} value={data.food_name} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="food_image">
                Food Image
              </label>
              <input type="text" className="form-control" id="food_image" name="food_image" onChange={onChange} value={data.food_image} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="food_ingredients">
                Food Ingredients
              </label>
              <input
                type="text"
                className="form-control"
                id="food_ingredients"
                name="food_ingredients"
                onChange={onChange}
                value={data.food_ingredients}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="food_instructions">
                Food Instructions
              </label>
              <input
                type="text"
                className="form-control"
                id="food_instructions"
                name="food_instructions"
                onChange={onChange}
                value={data.food_instructions}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default ItemForm;
