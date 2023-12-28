import { Route, Routes } from "react-router-dom";
import styles from "./UserCompetition.module.scss";
import { Suspense, lazy } from "react";

const CompetitionInfo = lazy(
  () => import("../pages/User/CompetitionInfo/CompetitionInfo")
);

const UserCompetitionLayout = () => {
  return (
    <div className={styles.page}>
      <nav>Nav</nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<CompetitionInfo />} />
          <Route path="info" element={<p>info</p>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserCompetitionLayout;
