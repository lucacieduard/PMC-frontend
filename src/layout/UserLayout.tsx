import { Route, Routes } from "react-router-dom";
import styles from "./UserLayout.module.scss";
import NavBar from "../components/NavBarUser/NavBar";
import Footer from "../components/FooterUser/Footer";

const UserLayout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className="wrapper">
        <Routes>
          <Route path="competitii">
            <Route index element={<p color="white">lorem*1000</p>} />
            <Route path=":id" element={<p>comp id</p>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
