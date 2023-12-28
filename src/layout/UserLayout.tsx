import { Route, Routes } from "react-router-dom";
import styles from "./UserLayout.module.scss";
import NavBar from "../components/NavBarUser/NavBar";
import Footer from "../components/FooterUser/Footer";
import { Suspense, lazy } from "react";

const CompetitionsPage = lazy(
  () => import("../pages/User/Competitions/CompetitionsPage")
);

const UserLayout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={`${styles.page} wrapper`}>
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="competitii">
              <Route index element={<CompetitionsPage />} />
              <Route path=":id" element={<p>comp id</p>} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
