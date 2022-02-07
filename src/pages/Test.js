const Test = () => {
  const fetchDataHandler = async () => {
    console.log("fetch data from node");

    // FIXME
    // create http-request hook
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tests`);

    if (!response.ok) {
      return;
    }

    const responseData = await response.json();

    console.log(responseData);
  };

  const createDataHandler = () => {
    console.log("create data in node");
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={fetchDataHandler}>Fetch Data from Node</button>
      <button onClick={createDataHandler}>Create Test Data in Node</button>
    </div>
  );
};

export default Test;
