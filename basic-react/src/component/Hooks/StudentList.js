import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://pnintership.onrender.com/api/getAllCertificate')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the API response to the console
        setStudents(data.data); // Set the 'data' array to the 'students' state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.studentName}, <strong>Course:</strong> {student.courseName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
