import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/Admin/AdminLayout";
import UserLayout from "./layout/User/UserLayout";
import Login from "./pages/Admin/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { persistLogin } from "./utils/fetch/auth";
import { AuthContext } from "./context/AuthContext";

function App() {
  const authContext = useContext(AuthContext)
  const persistMutation = useMutation({
    mutationFn: persistLogin,
    onSuccess: (data) => {
      authContext.setAuth(data.user)
    }
  })
  useEffect(() => {
    persistMutation.mutate();
  }, []);
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
