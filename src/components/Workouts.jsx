import { useState,useEffect } from 'react'

function Workouts(){
    const [workouts,setWorkouts]=useState([])
    const API=import.meta.env.VITE_API_URL
    useEffect(()=>{
        fetch(`${API}/workouts`).then(res=>res.json()).then(res=>{
            setWorkouts(res)
          console.log(res)}
        ).catch(error=>console.error(error))
      },[])
return(
    <div>

        workouts
        {workouts.map(workout=>{
            return <p>{workout.type}</p>})}
    </div>
)

}
export default Workouts