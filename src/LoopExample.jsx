function LoopExample() {
  const userData = [
    {
      name: "Amit",
      age: "29",
      email: "amit@test.com",
      id: 1,
    },
    {
      name: "Priya",
      age: "25",
      email: "priya@test.com",
      id: 2,
    },
    {
      name: "Akash",
      age: "20",
      email: "akash@test.com",
      id: 3,
    },
  ];
  return (
    <>
      <h1>Loop in JSX with Map Function</h1>

      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Dummy Data</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amit</td>
            <td>amit@test.com</td>
            <td>30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Priya</td>
            <td>Priya@test.com</td>
            <td>28</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default LoopExample;
