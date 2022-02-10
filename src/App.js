import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { FoodBox } from './Components/FoodBox';
 import foods from './foods.json' 
import { AddNewFood } from './Components/AddNewFood';
import {SearchBar} from './Components/SearchBar'
import { TodayFoods } from './Components/TodayFoods';
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
     <SearchBar />
    <AddNewFood />
      <section style={{display:'flex',justifyContent:'space-around' }}>
      <div style={{width:'50%', padding:'20px'}}>
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
        </div>
        <div style={{width:'50%', padding:'20px'}}>
          <TodayFoods />
        </div>
      </section>

    </>
  );
}

export default App;
