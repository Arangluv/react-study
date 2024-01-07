import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getData } from "../api/api";

// export const useGetDataQuery = () => {
//   const { data, isError, isLoading } = useQuery<DataProps>({
//     queryKey: ["test-data"],
//     queryFn: getData,
//     throwOnError: true,
//   });
//   return { data, isError, isLoading };
// };

export const useGetDataQuery = () => {
  const { data, isError, isLoading, error } = useSuspenseQuery({
    queryKey: ["test-data"],
    queryFn: getData,
  });
  if (error) {
    throw error;
  }
  return { data, isError, isLoading, error };
};
