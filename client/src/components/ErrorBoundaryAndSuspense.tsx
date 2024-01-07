import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FallbackUI from "../fallback/FallbackUI";
import LoadingSpinner from "./LoadingSpinner";

interface IProps {
  children: React.ReactNode;
}
export default function ErrorBoundaryAndSuspense({ children }: IProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        return (
          <ErrorBoundary onReset={reset} FallbackComponent={FallbackUI}>
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
}
