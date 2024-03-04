import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./CompetitionInfo.module.scss";
import "leaflet/dist/leaflet.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ResponseCompetition } from "../../../types/competitie";
import { getOneCompetition } from "../../../utils/fetch/competitions";
import Loading from "../../../components/Loading/Loading";

const CompetitionInfo = () => {
  const { id: slug } = useParams();

  const { isLoading, isError, data } = useQuery<ResponseCompetition>({
    queryKey: ["competitions", slug],
    queryFn: () => getOneCompetition(slug),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;
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
        {competition?.inscrieriFlag ? (
          <h3 className={styles.message}>Inscrierile sunt deschise ! </h3>
        ) : (
          <h3 className={styles.message} style={{ color: "red" }}>
            Inscrierile sunt inchise !{" "}
          </h3>
        )}

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
              <Popup>{competition?.locatie}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className={styles.inscrieri}>
          <h3>Pentru inscrieri accesati </h3>

          <Link to={`/competitii/${slug}/inscriere`}>
            <button className={`button ${styles.button}`}>Inscriere!</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CompetitionInfo;
