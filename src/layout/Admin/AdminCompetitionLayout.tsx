import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

type Props = {
  changeMessage: (message: string) => void;
};

const Transations = lazy(
  () => import("../../pages/Admin/Trasactions/Transactions")
);
const Registrations = lazy(
  () => import("../../pages/Admin/Registrations/Registrations")
);
const Statistics = lazy(
  () => import("../../pages/Admin/CompetitionStatistics/CompetitionStatistics")
);

const AdminCompetitionLayout = ({ changeMessage }: Props) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path=""
            element={<Statistics changeMessage={changeMessage} />}
          />
          <Route
            path="tranzactii"
            element={<Transations changeMessage={changeMessage} />}
          />
          <Route
            path="inscrieri"
            element={<Registrations changeMessage={changeMessage} />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default AdminCompetitionLayout;
