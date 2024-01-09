import { BeatLoader } from "react-spinners";

export default function LoadingSpinner() {
  console.log("Suspense 렌더링");
  return <BeatLoader color="blue"></BeatLoader>;
}
