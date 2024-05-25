import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "state";
import Aside from "./Aside";
import Sidebar from "./Sidebar";
import CardCourseA from "./CardCourseA";
import '../index.css'; 


const TeacherActivities = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
    const token = useSelector((state) => state.token);
    const user = useSelector((state) => state.user);
    
    const getCourses = async () => {
        const response = await fetch(`https://schoolinfoserver.onrender.com/courses/${user._id}/teacher`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        dispatch(setCourses({courses: data}));
    };

    useEffect(() => {
        getCourses();
    }, [user]); // eslint-disable-line

    return (
        <>
    <div className="p-4 sm:ml-64"> 
    <div className="fondoy fondoy-wrap p-5 overflow-y-auto overflow-x-auto">
          <Sidebar />
          <Aside />
          <div className="p-4 sm:ml-64">
            <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 overflow-y-auto overflow-x-auto">
              <div>
                {courses.map((course) => (
                    <CardCourseA key={course._id} courseId={course._id} courseName={course.nameCourse} teacherName={course.teacherName} gradeId={course.gradeId} />
                ))}
              </div>
            </div>
          </div>
          </div>
          </div>
        </>
      );
};

export default TeacherActivities;
