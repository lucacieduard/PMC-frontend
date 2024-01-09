import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Transations = lazy(
  () => import("../../pages/Admin/Trasactions/Transactions")
);
const Registrations = lazy(
  () => import("../../pages/Admin/Registrations/Registrations")
);
const Statistics = lazy(
  () => import("../../pages/Admin/CompetitionStatistics/CompetitionStatistics")
);

type Props = {
  openSidebar: () => void;
};

const AdminCompetitionLayout = ({ openSidebar }: Props) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path=""
            element={<Statistics openSidebar={openSidebar} />}
          />
          <Route
            path="tranzactii"
            element={<Transations openSidebar={openSidebar} />}
          />
          <Route
            path="inscrieri"
            element={<Registrations openSidebar={openSidebar} />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default AdminCompetitionLayout;
