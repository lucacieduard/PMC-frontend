import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/Admin/AdminLayout";
import UserLayout from "./layout/User/UserLayout";
import Login from "./pages/Admin/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { persistLogin } from "./utils/fetch/auth";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const persistlogin = async () => {
    try {
      const data = await persistLogin();
      authContext.setAuth(data.user ? data.user : null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    persistlogin();
  }, []);

  return loading ? (
    <p>Loading </p>
  ) : (
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
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
