import Card from '../UI/Card';
import classes from './AvaiableMeals.module.css'
import MealsItem from './MealsItem/MealsItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableFood = () => {
  
    const meals = DUMMY_MEALS.map(data => <MealsItem 
      key={data.id} name={data.name} description={data.description} 
      price={data.price}/>)

    return(
        <section className={classes.meals}>
          <Card>
          <ul>  
            {meals}
          </ul>
          </Card>
        </section>
    )
}

export default AvailableFood