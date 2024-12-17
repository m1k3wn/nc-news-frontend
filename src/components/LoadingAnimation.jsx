
import Lottie from "lottie-react";
import LoadingSpinner from "../assets/LoadingSpinner.json";

export const LoadingAnimation = () => {
  const style = {
    width: `300px`,
    height: `300px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  };
  return (
    <div style={style}>
      <Lottie animationData={LoadingSpinner} loop={true} />
    </div>
  );
};
