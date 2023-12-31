import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./CompetitionInfo.module.scss";
import "leaflet/dist/leaflet.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ResponseCompetition } from "../../../types/competitie";

const CompetitionInfo = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery<ResponseCompetition>({
    queryKey: ["competitions", id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/competitii/${id}`).then(
        (response) => {
          if (!response.ok) throw new Error();
          return response.json();
        }
      ),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error</h2>;

  const competition = data?.data.competition;

  return (
    <div className={styles.page}>
      <h1 className={styles.competitionTitle}>{competition?.nume}</h1>
      <img className={styles.banner} src="/banner.jpg" />
      <div className={styles.dates}>
        <div className={styles.date}>
          <p className={styles.text}>Perioada Inscrieri</p>
          <p className={styles.dateN}>
            {competition?.startInscrieri.split("T")[0].replaceAll("-", ".")} -{" "}
            {competition?.sfarsitInscrieri.split("T")[0].replaceAll("-", ".")}
          </p>
        </div>
        <h3 className={styles.message}>Inscrierile sunt deschise ! </h3>

        <div className={styles.date}>
          <p className={styles.text}>Perioada Competitie</p>
          <p className={styles.dateN}>
            {competition?.startCompetitie.split("T")[0].replaceAll("-", ".")} -{" "}
            {competition?.sfarsitCompetitie.split("T")[0].replaceAll("-", ".")}
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.locationContainer}>
          <div className={styles.location}>
            <h3>Loacatie </h3>
            <span>{competition?.locatie}</span>
          </div>

          <MapContainer
            center={competition ? [competition.lat, competition.lng] : [20, 40]}
            zoom={15}
            scrollWheelZoom={true}
            className={styles.map}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={
                competition ? [competition.lat, competition.lng] : [20, 40]
              }
            >
              <Popup>{data?.data.competition.locatie}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className={styles.inscrieri}>
          <h3>Pentru inscrieri accesati </h3>

          <Link to={`/competitii/${id}/inscriere`}>
            <button className={`button ${styles.button}`}>Inscriere!</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CompetitionInfo;
