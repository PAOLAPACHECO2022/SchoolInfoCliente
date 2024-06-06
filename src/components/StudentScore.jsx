import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScores } from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import "../index.css";

const StudentScore = () => {
  const dispatch = useDispatch();
  const scores = useSelector((state) => state.scores);
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const getScoresRecord = async () => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/scores/${user._id}/student`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setScores({ scores: data }));
  };

  useEffect(() => {
    getScoresRecord();
  }, []); // eslint-disable-line

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(scores.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // Filtrar datos por "Área" usando el término de búsqueda
  const filteredScores = scores.filter((score) =>
    score.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scoresToDisplay = filteredScores
    .slice(offset, offset + PER_PAGE)
    .map((score) => (
      <tr key={score._id}  className="bg-white hover:bg-gray-200 border-b">
        <td className="px-6 py-4 whitespace-nowrapp">{score.courseName}</td>
        <td className="px-6 py-4 whitespace-nowrap">{score.studentName}</td>
        <td className="border px-4 py-2 whitespace-nowrap">{score.area}</td>
        <td className="border px-4 py-2 whitespace-nowrap">{score.period}</td>
        <td className="border font-bold px-4 py-2 whitespace-nowrap">{score.score1}</td>
        <td className="border font-bold px-4 py-2 whitespace-nowrap">{score.score2}</td>
        <td className="border font-bold px-4 py-2 whitespace-nowrap">{score.score3}</td>
        <td className="border font-bold px-4 py-2 whitespace-nowrap">{score.score4}</td>
        <td className="border font-bold px-4 py-2 whitespace-nowrap">{score.promedio}</td>
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
                         <h1 className="text-3xl font-bold mb-4  tracking-wider">Scores</h1>
            <div className="flex flex-col sm:flex-row mb-4">
               
                <input
                  type="text"
                  placeholder="Search by Area..."
                  value={searchTerm} // Se vincula al estado
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado
                  className="border px-4 py-2 rounded border-black"
                />
              </div>
              <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-gray-900">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator 1</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator 2</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator 3</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator 4</th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Promedio</th>
                  </tr>
                </thead>
                <tbody>{scoresToDisplay}</tbody>
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

export default StudentScore;
