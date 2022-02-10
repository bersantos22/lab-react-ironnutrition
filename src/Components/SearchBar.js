import React from "react"
import foods from '../foods.json'
import { FoodBox } from "./FoodBox"
export function SearchBar(){

function displayFoods(searchFood){
        foods.map((searchFood)=>{
            return (
              <FoodBox
                key={searchFood.name}
                name={searchFood.name}
                calories={searchFood.calories}
                image={searchFood.image}
              />
            )
          })
        
        }

    return(
        <div class="field is-grouped" style={{width:"50%", padding:'20px'}}>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Search a Food"/>
        </p>
        <p class="control">
          <a class="button is-info">
            Search
          </a>
        </p>
      </div>
    )
    }