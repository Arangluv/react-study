import { useGetDataQuery } from "./hooks/dataHook";

export default function Parent() {
  console.log("Parent에서 가장 위의 단계임");
  const data = useGetDataQuery();
  console.log("Parent에서 data?");
  console.log(data);
  return <div>"asd"</div>;
}
