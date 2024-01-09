import AdminCompetitionHeader from "../../../components/AdminCompetitionHeader/AdminCompetitionHeader";

type Props = {
  openSidebar: () => void;
};

const Registrations = ({ openSidebar }: Props) => {
  return (
    <>
      <AdminCompetitionHeader
        openSidebar={openSidebar}
        message="Competitie - Inscrisi"
      />
    </>
  );
};

export default Registrations;
