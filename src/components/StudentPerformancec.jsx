import Aside from "./Aside";
import Sidebar from "./Sidebar";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import '../index.css'; 

const StudentPerformancec = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(0);
  const [performancecRecord, setPerformancecRecord] = useState([]);

  const getPerformancecRecord = async () => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/performancec/${user._id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setPerformancecRecord(data);
  };

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(performancecRecord.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  function dateFormated(date) {
    let dateObj = new Date(date);
    let formattedDate = dateObj.toISOString().slice(0, 10);
    return formattedDate;
  }

  useEffect(() => {
    getPerformancecRecord();
  }, []); // eslint-disable-line

  const recordsToDisplay = performancecRecord
    .slice(offset, offset + PER_PAGE)
    .map((performancec) => (
      <tr key={performancec._id} className="bg-white hover:bg-gray-100 border-b">
        <td className="border px-2 md:px-4 py-2">{`${performancec.studentFirstName} ${performancec.studentLastName}`}</td>
        <td className="border px-2 md:px-4 py-2">{dateFormated(performancec.date)}</td>
        <td className="border px-2 md:px-4 py-2">{performancec.status}</td>
        <td className="border px-2 md:px-4 py-2">{performancec.period}</td>
      </tr>
    ));

  return (
    <>
        <div className="p-4 sm:ml-64"> 
        <div className="fondoy fondoy-wrap p-5 overflow-x-auto overflow-y-auto ">
          <Sidebar />
          <Aside />
          <div className="p-4 sm:ml-64">
            <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 overflow-x-auto overflow-y-auto">
               <h1 className="text-2xl md:text-3xl font-bold mb-4  uppercase tracking-wider">Performance Convivial</h1>
            <div className="flex flex-col sm:flex-row mb-4">
                
              </div>
              <div className="border-dashed rounded-lg p-2 md:p-4 overflow-x-auto overflow-y-auto">
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-2 md:px-4 py-2 uppercase tracking-wider">Full Name</th>
                      <th className="px-2 md:px-4 py-2  uppercase tracking-wider">Date</th>
                      <th className="px-2 md:px-4 py-2  uppercase tracking-wider">Status</th>
                      <th className="px-2 md:px-4 py-2  uppercase tracking-wider">Period</th>
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

export default StudentPerformancec;
