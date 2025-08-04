// import edit from "../assets/edit.png";
// import trash from "../assets/trash.png";

// function WorkoutList({ workouts }) {
//   return (
//     <div className="bg-white shadow-md px-6 py-3 rounded-xl m-4">
//       <h3 className="text-xl font-bold mb-4 text-gray-800">تمرینات ثبت شده</h3>
//       {workouts.length === 0 ? (
//         <p>هیچ تمرینی ثبت نشده است</p>
//       ) : (
//         <ul className="space-y-4">
//           {workouts.map((workout, index) => (
//             <li
//               key={index}
//               className="border-b border-gray-200 pb-3 flex justify-between items-center"
//             >
//               <div>
//                 <strong>نام:</strong> {workout.name} | <strong>نوع:</strong>{" "}
//                 {workout.type} | <strong>تاریخ:</strong> {workout.date} |{" "}
//                 <strong>کالری:</strong> {workout.calories}
//               </div>
//               <div className="flex justify-center items-center gap-4">
//                 <button
//                   className="bg-green-500 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-bold text-lg shadow transition cursor-pointer"
//                 >
//                   مشاهده نمودار
//                 </button>
//                 <button
//                   className="bg-white cursor-pointer w-[50px] h-[30px] flex justify-center items-center"
//                 ><img src={edit} alt="edit" />
//                 </button>
//                 <button
//                   className="bg-white cursor-pointer w-[50px] h-[30px] flex justify-center items-center"
//                 ><img src={trash} alt="edit" className="w-[25px]" />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default WorkoutList;
import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ثبت ماژول‌های ag-Grid برای فعال شدن امکانات
ModuleRegistry.registerModules([AllCommunityModule]);

function WorkoutList({ workouts, onEdit, onDelete }) {
  const columnDefs = useMemo(
    () => [
      { headerName: "نام", field: "name", flex: 1 },
      { headerName: "نوع", field: "type", flex: 1 },
      { headerName: "تاریخ", field: "date", flex: 1 },
      { headerName: "کالری", field: "calories", flex: 1 },
      {
        headerName: "عملیات",
        flex: 1,
        cellRenderer: (params) => (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => onEdit(params.data)}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded px-3 py-1 cursor-pointer"
            >
              ویرایش
            </button>
            <button
              onClick={() => onDelete(params.data)}
              className="bg-red-500 hover:bg-red-700 text-white rounded px-3 py-1 cursor-pointer"
            >
              حذف
            </button>
          </div>
        ),
      },
    ],
    [onEdit, onDelete]
  );

  return (
    <div className="bg-white shadow-md px-6 py-3 rounded-xl m-4">
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={workouts}
          columnDefs={columnDefs}
          defaultColDef={{ resizable: true, sortable: true, filter: true }}
          theme="legacy"
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50, 100]}
        />
      </div>
    </div>
  );
}

export default WorkoutList;
