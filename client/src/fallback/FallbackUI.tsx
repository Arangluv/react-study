import { FallbackProps } from "react-error-boundary";

export default function FallbackUI({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  console.log("Error의 fallback UI 렌더링");
  console.log(error);
  return (
    <div>
      <p>오류가 발생했습니다.</p>
      <p>재시도 해주세요.</p>
      <button onClick={() => resetErrorBoundary()}>재시도</button>
    </div>
  );
}
