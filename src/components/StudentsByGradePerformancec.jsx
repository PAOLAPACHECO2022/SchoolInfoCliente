
import Aside from "./Aside";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { setStudents } from "state";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../index.css'; 
const StudentsByGradePerformancec = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [ performancecData, setPerformancecData] = useState([]);
  const students = useSelector((state) => state.students);
  const token = useSelector((state) => state.token);
  const { gradeId } = useParams();

  const getStudents = async () => {
    const response = await fetch(`https://schoolinfoserver.onrender.com/students/${gradeId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setStudents({ students: data }));
  };

  const getPerformancecData = async () => {
    const response = await fetch(
      `https://schoolinfoserver.onrender.com/performancec/${gradeId}/${date}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setPerformancecData(data);
  };

  useEffect(() => {
    getStudents();
    getPerformancecData();
  }, [gradeId, date]); // eslint-disable-line

  const handleInputChange = (index, e) => {
    const { value } = e.target;
    const updatedPerformancecData = [...performancecData];
    updatedPerformancecData[index].status = value;
    setPerformancecData(updatedPerformancecData);
  };

  const handleSavePerformancec = async (e) => {
    try {
      e.preventDefault();
      const savedPerformancecResponse = await fetch(
        "https://schoolinfoserver.onrender.com/performancec/registerPerformancec",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: date,
            performancecData: performancecData,
            period: new Date().getFullYear(),
            gradeId: gradeId,
          }),
        }
      );

      const savedPerformancec = await savedPerformancecResponse.json();
      if (savedPerformancec) {
        alert("Performance Convivial data saved successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Merge Performancec data with student data
  const mergedData = students.map((student) => {
    const performancec = performancecData.find(
      (data) => data.student._id === student._id
    );
    return performancec ? performancec : {student: student, status: "High disciplinary deficiency"};
  });

  return (
    <>
     <div className="p-4 sm:ml-64"> 
    <div className="fondoy fondoy-wrap p-5">
      <Sidebar />
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Performance Convivial</h2>
            <div className="flex mb-4">
              <label htmlFor="date" className="mr-4">
                Date:
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border rounded-md mr-4"
              />
            </div>
            <div>
              <table className="w-full mb-4">
                <thead>
                  <tr>
                    <th className="text-left">Student Name</th>
                    <th className="text-left">Performance Convivial Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mergedData.map((data, index) => (
                    <tr key={data.student._id}>
                      <td className="py-2">{`${data.student.firstName} ${data.student.lastName}`}</td>
                      <td className="py-2">
                        <select
                          value={data.status}
                          onChange={(e) => handleInputChange(index, e)}
                          className="p-2 border rounded-md"
                        >
                          <option value="Very good discipline">Very good discipline</option>
                          <option value="Must improve">Must improve</option>
                          <option value="High disciplinary deficiency">High disciplinary deficiency</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={handleSavePerformancec}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save Performance Convivial
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default StudentsByGradePerformancec;
