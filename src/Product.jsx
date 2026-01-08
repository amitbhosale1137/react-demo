const Product = ({ data }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid green",
          padding: "10px",
          margin: "10px",
          width: "400px",
          borderRadius: "10px",
        }}
      >
        <h3>
          Name: <span style={{ color: "green" }}>{data.name}</span>
        </h3>
        <h3>
          Email: <span style={{ color: "green" }}>{data.email}</span>
        </h3>
        <h3>
          Age: <span style={{ color: "green" }}>{data.age}</span>
        </h3>
      </div>
    </>
  );
};

export default Product;

// Reuse Component in Loop
// 1. Make Component
// 2. Apply Map for loop in JSX.
// 3. Render Component in loop.
// 4. Pass data in component inside loop.
// 5. Add Style
