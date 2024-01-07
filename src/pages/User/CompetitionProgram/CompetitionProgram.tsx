import styles from "./CompetitionProgram.module.scss";
import { ScrollMode, ViewMode, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";

import type {
  ToolbarSlot,
  TransformToolbarSlot,
} from "@react-pdf-viewer/toolbar";

const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
  ...slot,
  Open: () => <></>,
  OpenMenuItem: () => <></>,
  GoToNextPage: () => <></>,
  GoToPreviousPage: () => <></>,
  CurrentPageInput: () => <></>,
  NumberOfPages: () => <></>,
  GoToLastPage: () => <></>,
  SwitchTheme: () => <></>,
  SwitchScrollModeMenuItem: () => <></>,
  GoToLastPageMenuItem: () => <></>,
  GoToFirstPageMenuItem: () => <></>,
});

// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { getOneCompetition } from "../../../utils/fetch/competitions";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ResponseCompetition } from "../../../types/competitie";
const CompetitionProgram = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const { id: slug } = useParams();

  const { isLoading, isError, data } = useQuery<ResponseCompetition>({
    queryKey: ["competitions", slug],
    queryFn: () => getOneCompetition(slug),
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error</h2>;
  return (
    <>
      {data?.data.competition?.program ? (
        <div className={styles.pdf}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#eeeeee",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                display: "flex",
                padding: "0.25rem",
              }}
            >
              <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
            </div>
            <Viewer
              fileUrl={`${
                import.meta.env.VITE_API_URL
              }/pdf/program/program.pdf`}
              scrollMode={ScrollMode.Vertical}
              theme={{
                theme: "light",
              }}
              viewMode={ViewMode.SinglePage}
              plugins={[toolbarPluginInstance]}
            ></Viewer>
          </Worker>
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          Programul nu este disponibil
        </h2>
      )}
    </>
  );
};

export default CompetitionProgram;
