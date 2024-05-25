import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCourses} from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import {useNavigate, useParams} from "react-router-dom";
import "../index.css";

const CoursesByGrade = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
    const token = useSelector((state) => state.token);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const {gradeId} = useParams();

    const getCourses = async () => {
        const response = await fetch(`https://schoolinfoserver.onrender.com/courses/${gradeId}`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        dispatch(setCourses({courses: data}));
    };

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(courses.length / PER_PAGE);

    const handlePageClick = ({selected: selectedPage}) => {
        setCurrentPage(selectedPage);
    };

    const handleDelete = async (courseId) => {
        const response = await fetch(`https://schoolinfoserver.onrender.com/courses/${courseId}/delete`, {
            method: "DELETE",
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "application/json"},
        });
        console.log(response);
        console.log("Course deleted");
        getCourses();
    };

    useEffect(() => {
        getCourses();
    }, [gradeId]); // eslint-disable-line

    const coursesToDisplay = courses.slice(offset, offset + PER_PAGE).map((course) => (
        <tr key={course._id}>
            <td className="border px-4 py-2">{course.nameCourse}</td>
            <td className="border px-4 py-2">{course.teacherName}</td>
            <td className="border px-4 py-2">{course.gradeName}</td>
            <td className="border px-4 py-2">{course.level}</td>
            <td className="border px-4 py-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => navigate(`/editCourse/${gradeId}/${course._id}`)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(course._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="fondoy fondoy-wrap p-5">
                    <Sidebar />
                    <Aside />
                    <div className="p-4 sm:ml-64">
                        <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 overflow-x-auto overflow-y-auto">
                            <div className="flex flex-row justify-between mb-4">
                                <h1 className="text-3xl font-bold mb-4">Courses</h1>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"

                                    style={{ marginRight: '-2cm' }}
                                    onClick={() => navigate(`/newCourse/${gradeId}`)}
                                >
                                    New course
                                </button>
                            </div>
                            <table className="overflow-x-auto">
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
