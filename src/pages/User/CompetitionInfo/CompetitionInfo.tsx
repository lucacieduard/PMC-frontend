import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./CompetitionInfo.module.scss";
import "leaflet/dist/leaflet.css";
import { Link, useParams } from "react-router-dom";

const CompetitionInfo = () => {
  const { id } = useParams();
  return (
    <div className={styles.page}>
      <h1 className={styles.competitionTitle}>Cupa atletis Junior 2024</h1>
      <img className={styles.banner} src="/banner.jpg" />
      <div className={styles.dates}>
        <div className={styles.date}>
          <p className={styles.text}>Perioada Inscrieri</p>
          <p className={styles.dateN}>20.01.2023 - 21.01.2023</p>
        </div>
        <h3 className={styles.message}>Inscrierile sunt deschise ! </h3>

        <div className={styles.date}>
          <p className={styles.text}>Perioada Competitie</p>
          <p className={styles.dateN}>20.01.2023 - 21.01.2023</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.locationContainer}>
          <div className={styles.location}>
            <h3>Loacatie </h3>
            <span>Stadion Emil Alexandrescu</span>
          </div>

          <MapContainer
            center={[47.1845007, 27.5612095]}
            zoom={15}
            scrollWheelZoom={true}
            className={styles.map}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.1845007, 27.5612095]}>
              <Popup>Stadion Emil Alexandrescu</Popup>
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
