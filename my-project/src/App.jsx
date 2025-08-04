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

  // ایندفعه هر بار workouts تغییر کند، در localStorage به‌روزرسانی میشود
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // اضافه کردن تمرین جدید به آرایه
  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  // حذف تمرین (حذف بر اساس اسم و تاریخ یا هر شناسه دیگری)
  const handleDeleteWorkout = (workoutToDelete) => {
    setWorkouts(workouts.filter(w => w !== workoutToDelete));
  };

  // ویرایش تمرین (برای شروع فقط پیام نمایش میده)
  const handleEditWorkout = (workoutToEdit) => {
    alert(`میخواهید تمرین "${workoutToEdit.name}" را ویرایش کنید.`);
    // میتوانی اینجا مکانیزم ارسال داده به فرم برای ویرایش را بعدا اضافه کنی
  };

   return(
    <div dir='rtl'>
      <Navbar /> 
      <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
        <WorkoutForm onAdd={handleAddWorkout}/>
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

