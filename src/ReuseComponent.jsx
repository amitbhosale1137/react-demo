import Product from "./Product";

function ReuseComponent() {
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
      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <Product data={user} />
        </div>
      ))}
    </>
  );
}

export default ReuseComponent;
