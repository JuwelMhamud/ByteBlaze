import { ScaleLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <ScaleLoader size={100} color="#F92FD3" />
    </div>
  );
};

export default Spinner;
