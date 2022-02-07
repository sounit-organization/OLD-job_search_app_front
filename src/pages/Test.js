const Test = () => {
  const fetchDataHandler = () => {
    console.log("fetch data from node");
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={fetchDataHandler}>Fetch Data from Node</button>
    </div>
  );
};

export default Test;
