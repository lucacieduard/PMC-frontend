import styles from "./CompetitionProgram.module.scss";
import { ScrollMode, ViewMode, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
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
const CompetitionProgram = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  return (
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
          fileUrl="d"
          scrollMode={ScrollMode.Vertical}
          theme={{
            theme: "light",
          }}
          viewMode={ViewMode.SinglePage}
          plugins={[toolbarPluginInstance]}
        ></Viewer>
      </Worker>
    </div>
  );
};

export default CompetitionProgram;
