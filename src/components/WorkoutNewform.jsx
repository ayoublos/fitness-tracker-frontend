import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WorkoutNewForm(){
    const API=import.meta.env.VITE_API_URL
    let navigate=useNavigate()

    const[workout,setWorkout]=useState({
        type: "",
        durationInMinutes: 0,
        caloriesBurned: "",
        date: "",
      })
      const handleTextChange=(event)=>{
        setWorkout({...workout,[event.target.id]:event.target.value})
      }
      function addWorkOut(){
        fetch(`${API}/workouts`,{
            method:`POST`,
            body:JSON.stringify(workout),
            headers:{
                "content-Type":"application/json"
            }
        }).then(()=>{navigate(`/workouts`)}).catch(error=>console.error(error))
      }
      function handleSubmit(event){
        event.preventDefault();
        addWorkOut()
      }
return (<>
<div>
    WorkoutNewForm
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">type:
            <input id="type" type="text" value={workout.type} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">duration:
            <input id="durationInMinutes" type="text" value={workout.durationInMinutes} onChange={handleTextChange} />
        </label>
        <label htmlFor="">Calories Burned:
            <input id="caloriesBurned" type="text" value={workout.caloriesBurned} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">Date:
            <input type="text" id="date" value={workout.date} onChange={handleTextChange}/>
        </label>
        <button>Submit</button>
  
    </form >
    
    </div></>)

}
export default WorkoutNewForm;