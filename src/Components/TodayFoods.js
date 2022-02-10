import React from "react";

export function TodayFoods(){
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{fontSize:'27px'}}> Today's Foods</h2>
            <br></br>
        <ul>
          
            <li>2 - Hamburger - 800 cal</li>
          
        </ul>
        <br></br>
        <p><b>Total Calories:</b> 800 cal</p>
        </div>
    )
}