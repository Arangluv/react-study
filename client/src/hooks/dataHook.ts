import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getData } from "../api/api";
import axios from "axios";
export const useGetDataQuery = () => {
  console.log("useGetDataQuery가 실행");
  const { data, isError, isLoading, error } = useSuspenseQuery({
    queryKey: ["test-data"],
    queryFn: getData,
  });
  console.log("data? ");
  console.log(data);
  console.log("isError");
  console.log(isError);
  return data;
};
