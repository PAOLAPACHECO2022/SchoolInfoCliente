import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormEditCourse from "./FormEditCourse";

const EditCourse = () => {
    const token = useSelector((state) => state.token);
    const {gradeId, courseId} = useParams();
    const [courseData, setCourseData] = useState(null);
    

    const getGrade = async () => {
        const response = await fetch(`https://schoolinfoserver.onrender.com/courses/${courseId}/course`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        setCourseData(data);
    };

    useEffect(() => {
        getGrade();
    }, []); // eslint-disable-line

    if (!courseData) return null;
// card por grados vs Curso
    return(
        <>
            <Sidebar />
            <Aside />
            <FormEditCourse courseData={courseData} setCourseData={setCourseData} gradeId={gradeId} />
        </>
    )
};

export default EditCourse;
