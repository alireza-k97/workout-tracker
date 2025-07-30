import './App.css'
import React, { useState } from "react";
import Navbar from './components/navbar'
import WorkoutForm from './components/form';
import WorkoutList from './components/WorkoutList'

function App() {
   const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

   return(
    <div dir='rtl'>
      <Navbar /> 
      <WorkoutForm onAdd={handleAddWorkout}/>
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App

