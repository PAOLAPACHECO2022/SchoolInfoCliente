import CoursesByGrade from "components/CoursesByGrade";
import CoursesByGradeScore from "components/CoursesByGradeScore";
import CoursesByGradeActivity from "components/CoursesByGradeActivity";
import EditCourse from "components/EditCourse";
import EditGrade from "components/EditGrade";
import EditScore from "components/EditScore";
import EditActivity from "components/EditActivity";
import EditStudent from "components/EditStudent";
import EditTeacher from "components/EditTeacher";
import Grades from "components/Grades";
import GradesByLevel from "components/GradesByLevel";
import HomePage from "components/HomePage";
import LoginPage from "components/LoginPage";
import NewCourse from "components/NewCourse";
import NewGrade from "components/NewGrade";
import NewScore from "components/NewScore";
import NewActivity from "components/NewActivity";
import NewStudent from "components/NewStudent";
import NewTeacher from "components/NewTeacher";
import ScoresByCourse from "components/ScoresByCourse";
import ActivitiesByCourse from "components/ActivitiesByCourse";
import StudentAttendance from "components/StudentAttendance";
import StudentsByGrade from "components/StudentsByGrade";
import StudentsByGradeAttendance from "components/StudentsByGradeAttendance";
import StudentScore from "components/StudentScore";
import StudentActivity from "components/StudentActivity";
import TeacherCourses from "components/TeacherCourses";
import TeacherActivities from "components/TeacherActivities";
import Teachers from "components/Teachers";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import StudentPerformancec from "components/StudentPerformancec";
import StudentsByGradePerformancec from "components/StudentsByGradePerformancec";
import Contacto from "components/Contacto"
import Contactologin from "components/Contactologin";


function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App p-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            path="/teachers"
            element={isAuth ? <Teachers /> : <Navigate to="/" />}
          />
          <Route
            path="/newTeacher"
            element={isAuth ? <NewTeacher /> : <Navigate to="/" />}
          />
          <Route
            path="/grades/:level"
            element={isAuth ? <Grades /> : <Navigate to="/" />}
          />
          <Route
            path="/newGrade/:level"
            element={isAuth ? <NewGrade /> : <Navigate to="/" />}
          />
          <Route
            path="/gradesByLevel/:level/:action"
            element={isAuth ? <GradesByLevel /> : <Navigate to="/" />}
          />
          <Route
            path="/studentsByGrade/:gradeId"
            element={isAuth ? <StudentsByGrade /> : <Navigate to="/" />}
          />
          <Route
            path="/newStudent/:gradeId"
            element={isAuth ? <NewStudent /> : <Navigate to="/" />}
          />
          <Route
            path="/coursesByGrade/:gradeId"
            element={isAuth ? <CoursesByGrade /> : <Navigate to="/" />}
          />
          <Route
            path="/newCourse/:gradeId"
            element={isAuth ? <NewCourse /> : <Navigate to="/" />}
          />
          <Route
            path="/coursesByGradeScore/:gradeId"
            element={isAuth ? <CoursesByGradeScore /> : <Navigate to="/" />}
          />
          <Route
            path="/scoresByCourse/:courseId/:gradeId"
            element={isAuth ? <ScoresByCourse /> : <Navigate to="/" />}
          />
          <Route
            path="/newScore/:courseId/:gradeId"
            element={isAuth ? <NewScore /> : <Navigate to="/" />}
          />

          <Route
            path="/coursesByGradeActivity/:gradeId"
            element={isAuth ? <CoursesByGradeActivity /> : <Navigate to="/" />}
          />
          <Route
            path="/activitiesByCourse/:courseId/:gradeId"
            element={isAuth ? <ActivitiesByCourse /> : <Navigate to="/" />}
          />
          <Route
            path="/newActivity/:courseId/:gradeId"
            element={isAuth ? <NewActivity /> : <Navigate to="/" />}
          />


          <Route
            path="/studentsByGradeAttendance/:gradeId"
            element={isAuth ? <StudentsByGradeAttendance /> : <Navigate to="/" />}
          />
          <Route
            path="/studentAttendance"
            element={isAuth ? <StudentAttendance /> : <Navigate to="/" />}
          />





          <Route
            path="/studentsByGradePerformancec/:gradeId"
            element={isAuth ? <StudentsByGradePerformancec /> : <Navigate to="/" />}
          />
          <Route
            path="/studentPerformancec"
            element={isAuth ? <StudentPerformancec /> : <Navigate to="/" />}
          />



         <Route
            path="/studentScore"
            element={isAuth ? <StudentScore /> : <Navigate to="/" />}
          />

        <Route
            path="/studentActivity"
            element={isAuth ? <StudentActivity /> : <Navigate to="/" />}
          />

          <Route
            path="/teacherCourses"
            element={isAuth ? <TeacherCourses /> : <Navigate to="/" />}
          />
            <Route
            path="/teacherActivities"
            element={isAuth ? <TeacherActivities /> : <Navigate to="/" />}
          />
          <Route
            path="/editGrade/:level/:gradeId"
            element={isAuth ? <EditGrade /> : <Navigate to="/" />}
          />
          <Route
            path="/editScore/:courseId/:gradeId/:scoreId"
            element={isAuth ? <EditScore /> : <Navigate to="/" />}
          />

          <Route
            path="/editActivity/:courseId/:gradeId/:activityId"
            element={isAuth ? <EditActivity /> : <Navigate to="/" />}
          />

          <Route
            path="/editCourse/:gradeId/:courseId"
            element={isAuth ? <EditCourse /> : <Navigate to="/" />}
          />
          <Route
            path="/editStudent/:gradeId/:studentId"
            element={isAuth ? <EditStudent /> : <Navigate to="/" />}
          />
          <Route
            path="/editTeacher/:teacherId"
            element={isAuth ? <EditTeacher /> : <Navigate to="/" />}
          />

         <Route
            path="/contacto"
            element={isAuth ? <Contacto /> : <Navigate  target="_blank" 
           />}
          />
        <Route path="/contactologin" element={<Contactologin />} />
                
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
