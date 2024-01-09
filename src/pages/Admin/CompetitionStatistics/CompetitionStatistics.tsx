import AdminCompetitionHeader from "../../../components/AdminCompetitionHeader/AdminCompetitionHeader";

type Props = {
  openSidebar: () => void;
};

const CompetitionStatistics = ({ openSidebar }: Props) => {
  return (
    <>
      <AdminCompetitionHeader
        openSidebar={openSidebar}
        message="Competitii - Statistici"
      />
    </>
  );
};

export default CompetitionStatistics;
