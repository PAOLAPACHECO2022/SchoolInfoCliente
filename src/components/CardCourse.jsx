import { useNavigate } from "react-router-dom";
import '../index.css'; 
import Card from 'react-bootstrap/Card';

const CardCourse = ({ courseId, courseName, teacherName, gradeId }) => {
  const navigate = useNavigate();




  return (
    <>
      <Card border="primary"     
      className="fondox max-w-sm rounded overflow-hidden shadow-lg m-5 px-4 py-4 overflow-x-auto overflow-y-auto"
      key={courseId}
      role="button"
      onClick={() => navigate(`/scoresByCourse/${courseId}/${gradeId}`)}
      >
        <Card.Header>Scores</Card.Header>
        <Card.Body>
          <Card.Title className="font-bold text-xl mb-2">{courseName}</Card.Title>
          <Card.Text className="text-gray-700 text-base">
            Teacher: {teacherName}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

    
    </>
  );




};

export default CardCourse;
