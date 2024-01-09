import AdminCompetitionNavBar from "../AdminCompetitionNav/AdminCompetitionNavBar";
import Header from "../PageHeader/Header";

type Props = {
  openSidebar: () => void;
  message: string;
};

const AdminCompetitionHeader = ({ openSidebar, message }: Props) => {
  return (
    <>
      <Header message={message} openSidebar={openSidebar} />
      <AdminCompetitionNavBar />
    </>
  );
};

export default AdminCompetitionHeader;
