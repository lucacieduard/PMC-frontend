import { Routes, Route } from "react-router-dom";
import styles from "./AdminLayout.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Suspense, lazy, useState } from "react";
import Header from "../../components/PageHeader/Header";
const Competitions = lazy(
  () => import("../../pages/Admin/Competitions/Competitions")
);
const AddCompetition = lazy(
  () => import("../../pages/Admin/AddCompetition/AddCompetition")
);
const Users = lazy(() => import("../../pages/Admin/Users/Users"));

const AdminCompetitionLayout = lazy(() => import("./AdminCompetitionLayout"));

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);
  const changeVisible = () => setVisible((prev) => !prev);
  const [message, setMessage] = useState("Competitii");
  const changeMessage = (message: string) => setMessage(message);

  return (
    <div className={styles.container}>
      <Sidebar changeVisible={changeVisible} visibility={visible} />
      <div className={styles.page}>
        <Header message={message} openSidebar={changeVisible} />
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="competitii">
              <Route
                index
                element={<Competitions changeMessage={changeMessage} />}
              />
              <Route
                path=":id/*"
                element={
                  <AdminCompetitionLayout changeMessage={changeMessage} />
                }
              />
            </Route>

            <Route
              path="adauga"
              element={<AddCompetition changeMessage={changeMessage} />}
            />
            <Route
              path="utilizatori"
              element={<Users changeMessage={changeMessage} />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
