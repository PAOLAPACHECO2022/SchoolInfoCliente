import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivities } from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import "../index.css";
const StudentActivity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const getActivitiesRecord = async () => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/activities/${user._id}/student`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setActivities({ activities: data }));
  };

  useEffect(() => {
    getActivitiesRecord();
  }, []); // eslint-disable-line

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(activities.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // Filtrar datos por "Área" usando el término de búsqueda
  const filteredActivities = activities.filter((activity) =>
    activity.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function dateFormated(date) {
    let dateObj = new Date(date);
    let formattedDate = dateObj.toISOString().slice(0, 10);
    return formattedDate;
  }


  const activitiesToDisplay = filteredActivities
    .slice(offset, offset + PER_PAGE)
    .map((activity) => (
      <tr key={activity._id} className="bg-white hover:bg-gray-100 border-b">
        <td className="border  px-4 py-2">{activity.courseName}</td>
        <td className="border px-4 py-2">{activity.studentName}</td>
        <td className="border  px-4 py-2">{activity.area}</td>
        <td className="border  px-4 py-2">{activity.period}</td>
        <td className="border font-bold  px-4 py-2">{activity.indicator}</td>
        <td className="border font-bold px-4 py-2">{activity.actity}</td>
        <td className="border font-bold px-4 py-2">{activity.statea}</td>
        <td className="border font-bold px-4 py-2">{dateFormated(activity.date)}</td>
     
      </tr>
    ));

  return (
    <>
     
     <div className="p-4 sm:ml-64"> 
        <div className="fondoy fondoy-wrap p-5 overflow-x-auto overflow-y-auto">
          <Sidebar />
          <Aside />
          <div className="p-4 sm:ml-64">
            <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
             <h1 className="text-3xl font-bold mb-4 tracking-wider">Activities</h1>
            <div className="flex flex-col sm:flex-row mb-4">
               
                <input
                  type="text"
                  placeholder="Search by Area..."
                  value={searchTerm} // Se vincula al estado
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado
                  className="border px-4 py-2 rounded border-black"
                />
              </div>
              
              <div className="overflow-x-auto overflow-y-auto">
              <table className=" table-auto w-full text-left bg-danger">
                <thead>
                  <tr className="d-flex table-auto w-full text-left bg-danger">
                    <th className="px-4 py-2 uppercase tracking-wider">Course</th>
                    <th className="px-4 py-2 uppercase tracking-wider">Student</th>
                    <th className="px-4 py-2 uppercase tracking-wider">Area</th>
                    <th className="px-4 py-2 uppercase tracking-wider">Period</th>
                    <th className="px-4 py-2 uppercase tracking-wider">Indicator</th>
                    <th className="px-4 py-2 uppercase tracking-wider">Activity</th>
                    <th className="px-4 py-2 uppercase tracking-wider">State</th>
                    <th className="px-4 py-2 uppercase tracking-wider">Date</th>
                   
                  </tr>
                </thead>
                <tbody>{activitiesToDisplay}</tbody>
              </table>
              </div>
              <div className="flex justify-center mt-4">
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  previousLinkClassName={"previous_page"}
                  nextLinkClassName={"next_page"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentActivity;
