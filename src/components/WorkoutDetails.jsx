import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function WorkoutDetails() {
  const [workout, setWorkout] = useState({
    type: "",
    durationInMinutes: 0,
    caloriesBurned: "",
    date: "",
  });
  let { id } = useParams();
  let navigate=useNavigate()
  const API=import.meta.env.VITE_API_URL
  useEffect(()=>{
    fetch(`${API}/workouts`).then(res=>res.json()).then(res=>
      console.log(res)
    )
  },[id])
  return (<>
  <div>Workout details</div>
  <h1>{workout.type}</h1>
  <h1>{workout.durationInMinutes}</h1>
  <h1>{workout.caloriesBurned}</h1>
  </>
);
}
export default WorkoutDetails;
