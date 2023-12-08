import { Routes, Route } from "react-router-dom";
import styles from "./AdminLayout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import AddCompetition from "../pages/Admin/AddCompetition/AddCompetition";

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);
  const changeVisible = () => setVisible((prev) => !prev);

  return (
    <div className={styles.container}>
      <Sidebar changeVisible={changeVisible} visibility={visible} />

      <div className={styles.page}>
          <Routes>
            <Route path="competitii">
              <Route
                index
                element={
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    imus quae a deleniti error
                  </p>
                }
              />
              <Route path=":id" element={<p>competitie id</p>} />
            </Route>
            <Route
              path="adauga"
              element={<AddCompetition openSidebar={changeVisible} />}
            />
          </Routes>{" "}
      </div>
    </div>
  );
};

export default AdminLayout;
