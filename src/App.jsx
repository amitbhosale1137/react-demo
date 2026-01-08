import College from "./College";

function App() {
  const collegeData = [
    {
      name: "RSML College",
      city: "Latur",
      student: [
        {
          name: "Amit Bhosale",
          age: "30",
          email: "amit@test.com",
        },
        {
          name: "Priyanka Bhosale",
          age: "25",
          email: "priya@test.com",
        },
      ],
    },
    {
      name: "Dayanand College",
      city: "Pune",
      student: [
        {
          name: "Akash Bhosale",
          age: "30",
          email: "Akash@test.com",
        },
        {
          name: "Raj Kumar",
          age: "25",
          email: "raj@test.com",
        },
      ],
    },
    {
      name: "Bidve Engineering College",
      city: "Mumbai",
      student: [
        {
          name: "Anil D",
          age: "30",
          email: "anil@test.com",
        },
        {
          name: "Rajesh D",
          age: "25",
          email: "rajesh@test.com",
        },
      ],
    },
    {
      name: "VDF College",
      city: "Nashik",
      student: [
        {
          name: "Arun",
          age: "30",
          email: "arun@test.com",
        },
        {
          name: "Mahesh",
          age: "25",
          email: "mahesh@test.com",
        },
      ],
    },
  ];
  return (
    <>
      <h3>Nested Looping with Component</h3>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </>
  );
}

export default App;
