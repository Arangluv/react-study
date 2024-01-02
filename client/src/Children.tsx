import { useState } from "react";

interface IProps {
  parentNum: number;
  temp: string;
}
export default function Children({ parentNum, temp }: IProps) {
  console.log("props");
  console.log(parentNum);
  const [child, setChild] = useState(0);
  console.log("자식 렌더링");
  return (
    <div>
      <span>{`자식 번호 : ${child}`}</span>
      <button onClick={() => setChild((pre) => pre + 1)}>자식</button>
    </div>
  );
}
