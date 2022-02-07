import Test from "./test";

const TestList = (props) => {
  return props.testList.map((test) => <Test key={test.id} test={test} />);
};

export default TestList;
