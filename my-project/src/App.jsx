import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import WorkoutForm from "./components/form";
import WorkoutList from "./components/WorkoutList";
import ProgressBarChart from "./components/chart";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(null);

  // ایندفعه هر بار workouts تغییر کند، در localStorage به‌روزرسانی میشود
  useEffect(() => {
    fetch("http://localhost:8000/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((err) => console.error("خطا در دریافت داده:", err));
  }, []);

  // اضافه کردن و آپدیت تمرین جدید به آرایه
  const handleAddOrUpdateWorkout = (workout, id) => {
    if (editWorkout) {
      fetch(`http://localhost:8000/workouts/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(workout),
      })
        .then((res) => res.json())
        .then((data) =>
          setWorkouts(workout => workout.map(w => w.id === id ? data : w))
        .catch((err) => console.error("خطا در ویرایش:", err))
        );
      // ویرایش: مقدار قدیم را با مقدار جدید جایگزین کن
      // setWorkouts(workouts.map(w => w === editWorkout ? workout : w));
      // setEditWorkout(null); // حالت ویرایش را بردار
    } else {
      fetch("http://localhost:8000/workouts", {
        method: "post",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(workout),
      })
        .then((res) => res.json())
        .then((data) => setWorkouts([...workouts, data]))
        .catch((err) => console.error("خطا در اضافه کردن:", err));
    }
  };

  // حذف تمرین (حذف بر اساس اسم و تاریخ یا هر شناسه دیگری)
  const handleDeleteWorkout = (workoutToDelete) => {
    setWorkouts(workouts.filter((w) => w !== workoutToDelete));
  };

  // ویرایش تمرین

  const handleEditWorkout = (workoutToEdit) => {
    setEditWorkout(workoutToEdit);
  };

  return (
    <div dir="rtl">
      <Navbar />
      <div className="bg-purple-500 shadow-md px-6 py-3 rounded-xl m-4 flex flex-col justify-center items-center gap-4 md:flex-row">
        <WorkoutForm
          onAddOrUpdate={handleAddOrUpdateWorkout}
          editWorkout={editWorkout}
        />
        <ProgressBarChart data={workouts} />
      </div>
      <WorkoutList
        workouts={workouts}
        onEdit={handleEditWorkout}
        onDelete={handleDeleteWorkout}
      />
    </div>
  );
}

export default App;
