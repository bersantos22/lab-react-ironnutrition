import 'bulma/css/bulma.css';
import React from 'react';
import './addNewFood.css'
import { useState } from 'react';
export function AddNewFood(){

 const [show,setShow] = useState(false)

function handleButton(){
    if (show=== false){
        setShow(true)
    }else{
        setShow(false)
    }
}
   
    return(
<div class='aqui' style={{padding:'20px'}}>

    <div className="control" style={{display:'flex',justifyContent:'center'}}>
        <button onClick={handleButton} className="button is-primary">Add Food Here </button>
    </div>
    <br></br>
   {show? <section className='container' style={{width:'50%'}}>
            <div className="field">
                <label className="label">Food name:</label>
                <div className="control">
                    <input className="input" name='name' type="text" placeholder=" Type the Food Name here"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Calories:</label>
                <div className="control">
                    <input className="input" name='calories' type="text" placeholder="Type the number of calories"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Image:</label>
                <div className="control">
                    <input className="input" name='image' type="text" placeholder="Type the url of the image"/>
                </div>
            </div>
        <br></br>
            <div className="control" style={{display:'flex', justifyContent:'flex-end'}}>
        <button className="button is-primary">Submit</button>
        </div>
    </section> : null}
 </div>   
    )
}