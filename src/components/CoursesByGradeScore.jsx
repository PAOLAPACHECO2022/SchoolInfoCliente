import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCourses } from "state";
import Aside from "./Aside";
import Sidebar from "./Sidebar";
import CardCourse from "./CardCourse";
import '../index.css'; 
const CoursesByGradeScore = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
    const token = useSelector((state) => state.token);
    const {gradeId} = useParams();
    const API_URL = process.env.REACT_APP_API_URL;

    const getCourses = async () => {
        const response = await fetch(`${API_URL}/courses/${gradeId}`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        dispatch(setCourses({courses: data}));
    };

    useEffect(() => {
        getCourses();
    }, [gradeId]); // eslint-disable-line

    return (
        <>
           <div className="p-4 sm:ml-64"> 
    <div className="fondoy fondoy-wrap p-5 overflow-x-auto overflow-y-auto">
          <Sidebar />
          <Aside />
          <div className="p-4 sm:ml-64">
            <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 overflow-x-auto overflow-y-auto">
              <div>
                {courses.map((course) => (
                    <CardCourse key={course._id} courseId={course._id} courseName={course.nameCourse} teacherName={course.teacherName} gradeId={course.gradeId} />
                ))}
              </div>
            </div>
          </div>
          </div>
          </div>
        </>
      );
};

export default CoursesByGradeScore;
