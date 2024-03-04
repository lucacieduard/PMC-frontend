import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import CompetitionNavBar from "../../components/CompetitionNavBar/CompetitionNavBar";
import Loading from "../../components/Loading/Loading";

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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<CompetitionInfo />} />
          <Route path="program" element={<CompetitionProgram />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserCompetitionLayout;
