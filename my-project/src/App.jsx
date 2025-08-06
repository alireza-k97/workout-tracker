import './App.css'
import React, { useState , useEffect } from "react";
import Navbar from './components/navbar'
import WorkoutForm from './components/form';
import WorkoutList from './components/WorkoutList'
import  ProgressBarChart from './components/chart';


function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });
  const [editWorkout, setEditWorkout] = useState(null);

  // ایندفعه هر بار workouts تغییر کند، در localStorage به‌روزرسانی میشود
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // اضافه کردن و آپدیت تمرین جدید به آرایه
  const handleAddOrUpdateWorkout = (workout) => {
  if (editWorkout) {
    // ویرایش: مقدار قدیم را با مقدار جدید جایگزین کن
    setWorkouts(workouts.map(w => w === editWorkout ? workout : w));
    setEditWorkout(null); // حالت ویرایش را بردار
  } else {
    // اضافه کردن تمرین جدید
    setWorkouts([...workouts, workout]);
  }
};


  // حذف تمرین (حذف بر اساس اسم و تاریخ یا هر شناسه دیگری)
  const handleDeleteWorkout = (workoutToDelete) => {
    setWorkouts(workouts.filter(w => w !== workoutToDelete));
  };

  // ویرایش تمرین

  const handleEditWorkout = (workoutToEdit) => {
  setEditWorkout(workoutToEdit);
};


   return(
    <div dir='rtl'>
      <Navbar /> 
      <div className='bg-purple-500 shadow-md px-6 py-3 rounded-xl m-4 flex flex-col justify-center items-center gap-4 md:flex-row'>
        <WorkoutForm onAddOrUpdate={handleAddOrUpdateWorkout} editWorkout={editWorkout} />
        <ProgressBarChart data={workouts}/>
      </div>
        <WorkoutList
        workouts={workouts}
        onEdit={handleEditWorkout}
        onDelete={handleDeleteWorkout}
      />
    </div>
  );
}

export default App

