import React, { useState,useEffect } from "react";

function WorkoutForm({ onAddOrUpdate, editWorkout }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    date: "",
    calories: "",
  });

   useEffect(() => {
    if(editWorkout){
      setForm(editWorkout);
    }
  }, [editWorkout]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrUpdate(form);
    setForm({ name: "", type: "", date: "", calories: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md px-6 py-3 rounded-xl m-4"
    >
      <div className="flex justify-between items-center">
        <label htmlFor="Inp-name" className="mb-2 font-medium text-gray-700">
          نام تمرین:
        </label>
        <input
          type="text"
          name="name"
          id="Inp-name"
          onChange={handleChange}
          value={form.name}
          className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
      </div>
      <div className="flex justify-between items-center">
        <label htmlFor="type-id" className="mb-2 font-medium text-gray-700">
          نوع تمرین:
        </label>
        <select
          name="type"
          id="type-id"
          onChange={handleChange}
          value={form.type}
          className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        >
          <option value="">نوع تمرین را انتخاب کنید</option>
          <option value="cardio">هوازی</option>
          <option value="strength">قدرتی</option>
          <option value="stretch">کششی</option>
          <option value="other">سایر</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <label htmlFor="date-id" className="mb-2 font-medium text-gray-700">
          تاریخ :
        </label>
        <input
          type="date"
          name="date"
          id="date-id"
          onChange={handleChange}
          value={form.date}
          className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
      </div>
      <div className="flex justify-between items-center">
        <label htmlFor="calories-id" className="mb-2 font-medium text-gray-700">
          کالری :
        </label>
        <input
          type="number"
          name="calories"
          id="calories-id"
          onChange={handleChange}
          value={form.calories}
          placeholder="مثلا 200"
          min={1}
          className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow transition cursor-pointer"
      >
      {editWorkout ? "ویرایش تمرین" : "ثبت تمرین"}
      </button>
    </form>
  );
}
export default WorkoutForm;
