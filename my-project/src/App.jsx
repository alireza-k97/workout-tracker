import './App.css'
import React, { useState } from "react";
import Navbar from './components/navbar'
import WorkoutForm from './components/form';
import WorkoutList from './components/WorkoutList'
import  ProgressBarChart from './components/chart';

function App() {
   const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };
  
   return(
    <div dir='rtl'>
      <Navbar /> 
      <div className='flex justify-center items-center gap-4'>
        <WorkoutForm onAdd={handleAddWorkout}/>
        <ProgressBarChart data={workouts}/>
      </div>
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App

