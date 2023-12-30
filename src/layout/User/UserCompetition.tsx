import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import CompetitionNavBar from "../../components/CompetitionNavBar/CompetitionNavBar";

const CompetitionInfo = lazy(
  () => import("../../pages/User/CompetitionInfo/CompetitionInfo")
);
const CompetitionProgram = lazy(
  () => import("../../pages/User/CompetitionProgram/CompetitionProgram")
);

const UserCompetitionLayout = () => {
  return (
    <>
      <CompetitionNavBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<CompetitionInfo />} />
          <Route path="program" element={<CompetitionProgram />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserCompetitionLayout;
