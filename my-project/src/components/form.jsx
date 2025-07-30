import React, { useState } from "react";


function WorkoutForm(){
    const [form , setForm] = useState({
        name : "",
        type : "",
        duration : "",
        calories : ""
    });
    const handleChange = (e)=>{
        setForm({...form , [e.target.name] : e.target.value})
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("ثبت شد فعلا برای تست");
        setForm({name : "" , type : "" , duration : "" , calories : ""});
    };

    return(
        <form onSubmit={handleSubmit} className="bg-white shadow-md px-6 py-3 rounded-xl m-4">
            <div className="flex justify-between items-center">
                <label htmlFor="Inp-name" className="mb-2 font-medium text-gray-700">نام تمرین:</label>
                <input type="text" name="name" id="Inp-name" onChange={handleChange} value={form.name} className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            </div>
            <div className="flex justify-between items-center">
                <label htmlFor="type-id" className="mb-2 font-medium text-gray-700">نوع تمرین:</label>
                <select name="type" id="type-id" onChange={handleChange} value={form.type} className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required>
                    <option value="">نوع تمرین را انتخاب کنید</option>
                    <option value="cardio">هوازی</option>
                    <option value="strength">قدرتی</option>
                    <option value="stretch">کششی</option>
                    <option value="other">سایر</option>
                </select>
            </div>
            <div className="flex justify-between items-center">
                <label htmlFor="duration-id" className="mb-2 font-medium text-gray-700">زمان :</label>
                <input type="number" name="duration" id="duration-id" onChange={handleChange} value={form.duration} placeholder="مثلا 30 دقیقه" min={1} className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            </div>
            <div className="flex justify-between items-center">
                <label htmlFor="calories-id" className="mb-2 font-medium text-gray-700">کالری :</label>
                <input type="number" name="calories" id="calories-id" onChange={handleChange} value={form.calories} placeholder="مثلا 200" min={1} className="m-4 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            </div>
            <div className="flex justify-center items-center gap-8 my-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow transition cursor-pointer">
               ثبت تمرین 
            </button>
            <button type="button" className="bg-green-500 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow transition cursor-pointer">
               مشاهده تاریخچه 
            </button>
            </div>
        </form>
    )
}
export default WorkoutForm;