import { CSSProperties, useState } from "react";
import { PulseLoader } from "react-spinners";

export const useSpinner = (initialLoading = false) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const [loading, setLoading] = useState(initialLoading);

  const Spinner = ({ size = 25, color = "#2C3E50" }) => (
    <PulseLoader
      size={size}
      color={color}
      loading={loading}
      cssOverride={override}
    />
  );

  return { loading, setLoading, Spinner };
};
