import { Routes, Route } from "react-router-dom";
import styles from "./AdminLayout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import Header from "../components/PageHeader/Header";

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);
  const changeVisible = () => setVisible((prev) => !prev);

  return (
    <div className={styles.container}>
      <Sidebar changeVisible={changeVisible} visibility={visible} />

      <div className={styles.page}>
        <Header openSidebar={changeVisible}/>
        <Routes>
          <Route path="competitii">
            <Route index element={<p>Competitie</p>} />
            <Route path=":id" element={<p>competitie id</p>} />
          </Route>
          <Route path="adauga" element={<p>Adauga</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
