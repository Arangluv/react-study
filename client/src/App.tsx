import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundaryAndSuspense from "./components/ErrorBoundaryAndSuspense";
const Parent = lazy(() => import("./Parent"));
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        throwOnError: true,
        gcTime: 50000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* fallback은 Component도 argument로 받을 수 있다 */}
      <ErrorBoundaryAndSuspense>
        <Parent></Parent>
      </ErrorBoundaryAndSuspense>
      <ToastContainer limit={1} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
