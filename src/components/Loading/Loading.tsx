import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#2e1f5e"
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent",
      }}
      wrapperClass=""
    />
  );
};

export default Loading;
