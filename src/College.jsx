import StudentList from "./NestedLooping";

function College({ college }) {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        borderBottom: "2px solid #000",
        borderRadius: "10px",
      }}
    >
      <h3>Name: {college.name}</h3>
      <ul>
        <li>City: {college.city}</li>
        <li>
          <StudentList student={college.student} />
        </li>
      </ul>
    </div>
  );
}

export default College;
