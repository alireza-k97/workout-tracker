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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    })
      .then((res) => res.json())
      .then((data) => {
        setWorkouts((prev) =>
          prev.map((w) => String(w.id) === String(id) ? data : w)
        );
        setEditWorkout(null);
      })
      .catch((err) => console.error("خطا در ویرایش:", err));
  } else {
    fetch("http://localhost:8000/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    })
      .then((res) => res.json())
      .then((data) => setWorkouts((prev) => [...prev, data]))
      .catch((err) => console.error("خطا در اضافه کردن:", err));
  }
};


  // حذف تمرین (حذف بر اساس اسم و تاریخ یا هر شناسه دیگری)
  // const handleDeleteWorkout = (workoutToDelete) => {
  //   setWorkouts(workouts.filter((w) => w !== workoutToDelete));
  // };
  const handleDeleteWorkout = (workoutToDelete) => {
  fetch(`http://localhost:8000/workouts/${workoutToDelete.id}`, {
    method: "DELETE",
  })
    .then(() => {
      // پس از حذف موفق، به‌روزرسانی state
      setWorkouts((prev) => prev.filter((w) => w.id !== workoutToDelete.id));
    })
    .catch((err) => console.error("خطا در حذف:", err));
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
