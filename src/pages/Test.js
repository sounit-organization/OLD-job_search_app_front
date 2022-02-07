import { useState } from "react";
import TestList from "../components/test/test-list";

const Test = () => {
  const [testDataList, setTestDataList] = useState([]);

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

    setTestDataList(responseData.tests);
  };

  const createDataHandler = async () => {
    console.log("create data in node");
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/tests`, {
      method: "POST",
    });
  };

  return (
    <div>
      <h1>Test</h1>
      <TestList testList={testDataList} />
      <button onClick={fetchDataHandler}>Fetch Data from Node</button>
      <button onClick={createDataHandler}>Create Test Data in Node</button>
    </div>
  );
};

export default Test;
