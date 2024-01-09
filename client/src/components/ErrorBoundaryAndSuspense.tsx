import {
  QueryErrorResetBoundary,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FallbackUI from "../fallback/FallbackUI";
import LoadingSpinner from "./LoadingSpinner";
import Parent from "../Parent";
interface IProps {
  children: React.ReactNode;
}
export default function ErrorBoundaryAndSuspense() {
  console.log("ErrorBoundaryAndSuspense 실행");
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onError={(err) => {
        console.log("에러 바운더리에 error가 전파!");
        console.log("그때 err?");
        console.log(err);
      }}
      onReset={reset}
      FallbackComponent={FallbackUI}
    >
      <Suspense fallback={<p>로딩중...</p>}>
        <Parent />
      </Suspense>
    </ErrorBoundary>
  );
}
