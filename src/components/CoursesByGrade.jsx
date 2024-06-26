import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useNavigate, useParams } from "react-router-dom";
import '../index.css'; 

const CoursesByGrade = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const token = useSelector((state) => state.token);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { gradeId } = useParams();

  const getCourses = async () => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/courses/${gradeId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setCourses({ courses: data }));
  };

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(courses.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleDelete = async (courseId) => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/courses/${courseId}/delete`, {
      method: "DELETE",
      headers: {Authorization: `Bearer ${token}`, "Content-Type": "application/json",},
    });
    console.log(response);
    console.log("Course deleted");
    getCourses();
  }

  useEffect(() => {
    getCourses();
  }, [gradeId]); // eslint-disable-line

  const filteredCourses = courses.filter(course =>
    course.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const coursesToDisplay = filteredCourses
    .slice(offset, offset + PER_PAGE)
    .map((course) => (
      <tr key={course._id}  className="bg-white hover:bg-gray-100 border-b">
        <td className="border px-4 py-2">{course.nameCourse}</td>
        <td className="border px-4 py-2">{course.teacherName}</td>
        <td className="border px-4 py-2">{course.gradeName}</td>
        <td className="border px-4 py-2">{course.level}</td>
        <td className="border px-4 py-2">
        <div className="flex justify-center space-x-2">
          <button className="bottonstu  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => navigate(`/editCourse/${gradeId}/${course._id}`)}>
            Edit
          </button>
          <button className="fondo-gris bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(course._id)}>
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
        <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 overflow-x-auto overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Courses</h1>
          <div className="flex flex-col sm:flex-row mb-4">
            
            <button
              className="bottonstu bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => navigate(`/newCourse/${gradeId}`)}
            >
              New course
            </button>
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search by teacher name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">Name Course</th>
                <th className="px-4 py-2">Teacher</th>
                <th className="px-4 py-2">Grade</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>{coursesToDisplay}</tbody>
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

export default CoursesByGrade;
