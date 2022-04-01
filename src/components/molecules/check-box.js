import { useState } from "react";

const jobTypes = [
  { id: 1, name: "part time" },
  { id: 2, name: "full time" },
];

const CheckBox = () => {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState([]);
  const showCheckBoxHandler = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const inputChangeHandler = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
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
                onChange={() => inputChangeHandler(job.id)}
              ></input>
            </div>
          );
        })}
    </>
  );
};

export default CheckBox;
