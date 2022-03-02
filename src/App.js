import JobDetail from "./pages/job-detail";
import CreateJob from "./pages/create-job";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/job-list";
import Header from "./components/organisms/shared/header";
import { Fragment } from "react";
import "./App.css";
import { CreateSkill } from "./pages/create-skill";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/jobs/new" element={<CreateJob />} />
            <Route path="/jobs/detail/:jobId" element={<JobDetail />} />
            <Route path="/skills/new" element={<CreateSkill />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
