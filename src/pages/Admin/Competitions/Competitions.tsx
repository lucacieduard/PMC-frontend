import { useQuery } from "@tanstack/react-query";
import Competition from "./Competition";
import styles from "./Competitions.module.scss";
import { ResponseCompetitions } from "../../../types/competitie";
import { getAllCompetitions } from "../../../utils/fetch/competitions";
import { useEffect } from "react";

type Props = {
  changeMessage: (message: string) => void;
};

const Competitions = ({ changeMessage }: Props) => {
  const { isLoading, isError, data } = useQuery<ResponseCompetitions>({
    queryKey: ["competitions"],
    queryFn: getAllCompetitions,
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    changeMessage("Competitii");
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    <div className={styles.page}>
      <h1>Toate competitiile</h1>
      <div className={styles.competitions}>
        {data?.data.competitions.map((competition) => (
          <Competition competition={competition} key={competition._id} />
        ))}
      </div>
    </div>
  );
};

export default Competitions;
