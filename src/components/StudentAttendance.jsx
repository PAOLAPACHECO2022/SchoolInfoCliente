import Aside from "./Aside";
import Sidebar from "./Sidebar";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import '../index.css'; 
const StudentAttendance = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(0);
  const [attendanceRecord, setAttendanceRecord] = useState([]);

  const getAttendanceRecord = async () => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/attendance/${user._id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setAttendanceRecord(data);
  };

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(attendanceRecord.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  function dateFormated(date) {
    let dateObj = new Date(date);
    let formattedDate = dateObj.toISOString().slice(0, 10);
    return formattedDate;
  }

  useEffect(() => {
    getAttendanceRecord();
  }, []); // eslint-disable-line

  const recordsToDisplay = attendanceRecord
  .slice(offset, offset + PER_PAGE)
  .map((attendance) => (
    <tr key={attendance._id} className="bg-white hover:bg-gray-100 border-b">
      <td className="border px-4 py-2">{`${attendance.studentFirstName} ${attendance.studentLastName}`}</td>
      <td className="border px-4 py-2">{dateFormated(attendance.date)}</td>
      <td className="border px-4 py-2">{attendance.status}</td>
      <td className="border px-4 py-2">{attendance.period}</td>
    </tr>
  ));

  return (
    <>
     <div className="p-4 sm:ml-64"> 
     <div className="fondoy fondoy-wrap p-5 overflow-x-auto overflow-y-auto">
      <Sidebar />
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 overflow-x-auto overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4  tracking-wider">Attendance</h1>
        <div className="flex flex-col sm:flex-row mb-4">
            
          </div>
          <div className=" border-dashed rounded-lg p-4 overflow-x-auto overflow-y-auto">
          <table className="table-auto w-full text-left">
            <thead >
              <tr >
                <th className="px-4 py-2 uppercase tracking-wider">Full Name</th>
                <th className="px-4 py-2 uppercase tracking-wider">Date</th>
                <th className="px-4 py-2 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 uppercase tracking-wider">Period</th>
              </tr>
            </thead>
            <tbody>{recordsToDisplay}</tbody>
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

export default StudentAttendance;

