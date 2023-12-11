import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import Login from "./pages/Admin/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route path="/admin" element={<Login />} />
      <Route path="admin/*" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
