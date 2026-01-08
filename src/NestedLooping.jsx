const StudentList = ({ student }) => {
  return (
    <>
      <h3>Student</h3>
      {student.map((student, index) => (
        <ul key={index}>
          <li>Name: {student.name}</li>
        </ul>
      ))}
    </>
  );
};

export default StudentList;

/*Nexted Looping 
1. Understand Array structure for nested Looping
2. Make outer Loop
3. Make inner Loop
4. Make component for outer loop
5. Make component for inner loop 
*/
