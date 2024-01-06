import { Routes, Route } from "react-router-dom";
import styles from "./AdminLayout.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Suspense, lazy, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
const Competitions = lazy(
  () => import("../../pages/Admin/Competitions/Competitions")
);
const AddCompetition = lazy(
  () => import("../../pages/Admin/AddCompetition/AddCompetition")
);

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);
  const changeVisible = () => setVisible((prev) => !prev);

  return (
    <div className={styles.container}>
      <Sidebar changeVisible={changeVisible} visibility={visible} />
      <div className={styles.page}>
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="competitii">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Competitions openSidebar={changeVisible} />
                  </ProtectedRoute>
                }
              />
              <Route path=":id" element={<p>competitie id</p>} />
            </Route>

            <Route
              path="adauga"
              element={<AddCompetition openSidebar={changeVisible} />}
            />
          </Routes>{" "}
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
