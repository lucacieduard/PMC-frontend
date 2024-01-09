import { useEffect } from "react";

type Props = {
  changeMessage: (message: string) => void;
};

const CompetitionStatistics = ({ changeMessage }: Props) => {
  useEffect(() => {
    changeMessage("Competitie - Statistici");
  }, []);
  return <div>CompetitionStatistics</div>;
};

export default CompetitionStatistics;
