import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/Admin/AdminLayout";
import UserLayout from "./layout/User/UserLayout";
import Login from "./pages/Admin/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="/admin" element={<Login />} />
        <Route path="admin/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default App;
