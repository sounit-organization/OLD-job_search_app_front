import { useState } from "react";

const jobTypes = [
  { id: 1, name: "part time" },
  { id: 2, name: "full time" },
];

const CheckBox = () => {
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const showCheckBoxHandler = (event) => {
    event.preventDefault();
    setShow(!show);
  };
  const inputChangeHandler = (event) => {
    setInputValues(event.target.value);
  };
  return (
    <>
      <button onClick={showCheckBoxHandler}>Job Type</button>
      {show &&
        jobTypes.map((job) => {
          return (
            <div key={job.id}>
              <label>{job.name}</label>
              <input
                type="checkbox"
                name={job.name}
                value={job.id}
                onChange={inputChangeHandler}
              ></input>
            </div>
          );
        })}
      {console.log(inputValues)}
    </>
  );
};

export default CheckBox;
