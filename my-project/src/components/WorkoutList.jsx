import edit from "../assets/edit.png";
import trash from "../assets/trash.png";

function WorkoutList({ workouts }) {
  return (
    <div className="bg-white shadow-md px-6 py-3 rounded-xl m-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800">تمرینات ثبت شده</h3>
      {workouts.length === 0 ? (
        <p>هیچ تمرینی ثبت نشده است</p>
      ) : (
        <ul className="space-y-4">
          {workouts.map((workout, index) => (
            <li
              key={index}
              className="border-b border-gray-200 pb-3 flex justify-between items-center"
            >
              <div>
                <strong>نام:</strong> {workout.name} | <strong>نوع:</strong>{" "}
                {workout.type} | <strong>تاریخ:</strong> {workout.date} |{" "}
                <strong>کالری:</strong> {workout.calories}
              </div>
              <div className="flex justify-center items-center gap-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow transition cursor-pointer"
                >
                  مشاهده نمودار
                </button>
                <button
                  className="bg-white cursor-pointer w-[50px] h-[30px] flex justify-center items-center"
                ><img src={edit} alt="edit" />
                </button>
                <button
                  className="bg-white cursor-pointer w-[50px] h-[30px] flex justify-center items-center"
                ><img src={trash} alt="edit" className="w-[25px]" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutList;
