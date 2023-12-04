import { Route, Routes } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <p>Navigare</p>
      <Routes>
        <Route path="competitii">
          <Route index element={<p>lista competitii</p>} />
          <Route path=":id" element={<p>comp id</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default UserLayout;
