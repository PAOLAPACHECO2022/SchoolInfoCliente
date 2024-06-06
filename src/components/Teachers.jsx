import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeachers } from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useNavigate } from "react-router-dom";
import '../index.css'; 

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);
  const token = useSelector((state) => state.token);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el valor de búsqueda
  const navigate = useNavigate();

  const getTeachers = async () => {
    const response = await fetch("https://schoolinfoserver.onrender.com/teachers",{
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setTeachers({ teachers: data }));
  };

  useEffect(() => {
    getTeachers();
  }, []); // eslint-disable-line

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleDelete = async (teacherId) => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/teachers/${teacherId}/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log("Teacher deleted");
    getTeachers();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrar los profesores por el valor de búsqueda
  const filteredTeachers = teachers.filter(teacher =>
    `${teacher.firstName} ${teacher.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredTeachers.length / PER_PAGE);

  const teachersToDisplay = filteredTeachers
    .slice(offset, offset + PER_PAGE)
    .map((teacher) => (
      <tr key={teacher._id}>
        <td className="border px-4 py-2">{teacher.firstName}</td>
        <td className="border px-4 py-2">{teacher.lastName}</td>
        <td className="border px-4 py-2">{teacher.email}</td>
        <td className="border px-4 py-2">{teacher.phone}</td>
        <td className="border px-4 py-2">{teacher.area}</td>
        <td className="border px-4 py-2">
          <div className="flex space-x-2">
          <button
          className="bottonstu bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => navigate(`/editTeacher/${teacher._id}`)}>
            Edit
          </button>
          <button 
         className="fondo-gris bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
         onClick={() => handleDelete(teacher._id)}>
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
          <Sidebar />
          <Aside />
          <div className="p-4 sm:ml-64">
          <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <h1 className="text-3xl font-bold mb-4 justify-center">Teachers</h1>
              <div className="flex flex-col sm:flex-row mb-4">
                <input
                  type="text"
                  placeholder="Search by name Teachers"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 border rounded"
                />
                <button
                  className="bottonstu bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate("/newTeacher")}
                >
                  New teacher
                </button>
              </div>
              <div className="overflow-x-auto overflow-y-auto">
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">First Name</th>
                      <th className="px-4 py-2">Last Name</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Phone</th>
                      <th className="px-4 py-2">Area</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>{teachersToDisplay}</tbody>
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

export default Teachers;


