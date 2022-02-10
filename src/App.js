import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { FoodBox } from './Components/FoodBox';
 import foods from './foods.json' 
import { AddNewFood } from './Components/AddNewFood';
/* import {useState ,useEffect} from 'react'
import axios from 'axios'; */

function App() {
  /* const [food, setFood] = useState([])

    useEffect(()=>{
        async function fetchFood(){
            try{
                const result = await axios.get('./foods.json');
                setFood([...result.data])
            } catch(error){
                console.error(error)
            }
        }
        fetchFood()
    }) */

  return (
    <>
     <h1 style={{fontSize:'35px',padding:'20px'}}>Nutritional Calculator</h1>
    <AddNewFood />
      <section>
        {foods.map((currentFood)=>{
          return (
            <FoodBox
              key={currentFood.name}
              name={currentFood.name}
              calories={currentFood.calories}
              image={currentFood.image}
            />
          )
        })}   
      </section>

    </>
  );
}

export default App;
