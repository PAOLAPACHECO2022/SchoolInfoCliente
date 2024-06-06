import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudents } from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useNavigate, useParams } from "react-router-dom";
import '../index.css'; 

const StudentsByGrade = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const token = useSelector((state) => state.token);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el valor de búsqueda
  const navigate = useNavigate();
  const { gradeId } = useParams();

  const getStudents = useCallback(async () => {
    const response = await fetch(`https://schoolinfoserver.onrender.com/students/${gradeId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setStudents({ students: data }));
  }, [gradeId, token, dispatch]);

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleDelete = async (studentId) => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/students/${studentId}/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log("Student deleted");
    getStudents();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para formatear la fecha
  const dateFormated = (date) => {
    let dateObj = new Date(date);
    let formattedDate = dateObj.toISOString().slice(0, 10);
    return formattedDate;
  };

  // Filtrar los estudiantes por el valor de búsqueda
  const filteredStudents = students.filter(student =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredStudents.length / PER_PAGE);

  const studentsToDisplay = filteredStudents
    .slice(offset, offset + PER_PAGE)
    .map((student) => (
      <tr key={student._id}>
        <td className="border px-4 py-2">{`${student.firstName} ${student.lastName}`}</td>
        <td className="border px-4 py-2">{student.dni}</td>
        <td className="border px-4 py-2">{student.phone}</td>
        <td className="border px-4 py-2">
          {dateFormated(student.fechaNacimiento)}
        </td>
        <td className="border px-4 py-2">{student.gradeName}</td>
        <td className="border px-4 py-2">
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              onClick={() => navigate(`/editStudent/${gradeId}/${student._id}`)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
              onClick={() => handleDelete(student._id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));

  return (
    <>
      <div className="p-4 sm:ml-64"> 
        <div className="fondoy fondoy-wrap p-5 overflow-x-auto overflow-y-auto">
          <Aside />
          <Sidebar />
          <div className="p-4 sm:ml-64">
            <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <h1 className="text-3xl font-bold mb-4 justify-center">Students</h1>
              <div className="flex flex-col sm:flex-row mb-4">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 border rounded"
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate(`/newStudent/${gradeId}`)}
                >
                  New Student
                </button>
              </div>
              <div className="overflow-x-auto overflow-y-auto">
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Full Name</th>
                      <th className="px-4 py-2">DNI</th>
                      <th className="px-4 py-2">Phone</th>
                      <th className="px-4 py-2">Fecha Nacimiento</th>
                      <th className="px-4 py-2">Grade</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>{studentsToDisplay}</tbody>
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

export default StudentsByGrade;
