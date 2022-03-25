import JobDetail from "./pages/job-detail";
import CreateJob from "./pages/create-job";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/job-list";
import Header from "./components/organisms/shared/header";
import { Fragment } from "react";
import "./App.css";
import { CreateSkill } from "./pages/create-skill";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<JobList />}>
              <Route path="/jobs/detail/:jobId" element={<JobDetail />} />
            </Route>
            <Route path="/jobs/new" element={<CreateJob />} />
            <Route path="/skills/new" element={<CreateSkill />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
