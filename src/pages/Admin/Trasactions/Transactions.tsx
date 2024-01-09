import AdminCompetitionHeader from "../../../components/AdminCompetitionHeader/AdminCompetitionHeader";

type Props = {
  openSidebar: () => void;
};

const Tranzactions = ({ openSidebar }: Props) => {
  return (
    <>
      <AdminCompetitionHeader
        message="Competitii - Tranzactii"
        openSidebar={openSidebar}
      />
    </>
  );
};

export default Tranzactions;
