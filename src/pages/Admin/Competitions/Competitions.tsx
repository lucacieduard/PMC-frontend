import { useQuery } from "@tanstack/react-query";
import Header from "../../../components/PageHeader/Header";
import Competition from "./Competition";
import styles from "./Competitions.module.scss";
import { ResponseCompetitions } from "../../../types/competitie";
import { getAllCompetitions } from "../../../utils/fetch/competitions";

type Props = {
  openSidebar: () => void;
};

const Competitions = ({ openSidebar }: Props) => {
  const { isLoading, isError, data } = useQuery<ResponseCompetitions>({
    queryKey: ["competitions"],
    queryFn: getAllCompetitions,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  return (
    <div className={styles.container}>
      <Header message="Competiții" openSidebar={openSidebar} />
      <div className={styles.page}>
        <h1>Toate competitiile</h1>
        <div className={styles.competitions}>
          {data?.data.competitions.map((competition) => (
            <Competition competition={competition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions;
