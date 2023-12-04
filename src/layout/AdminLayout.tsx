import { Routes, Route } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <p>navigatie</p>
      <p>sidebar</p>

      <Routes>
        <Route path="/" element={<p>admin home</p>} />
        <Route path="competitii">
          <Route index element={<p>Competitie</p>} />
          <Route path=":id" element={<p>competitie id</p>} />
        </Route>
        <Route path="adauga" element={<p>Adauga</p>} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
