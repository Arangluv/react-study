import { useState } from "react";
import Children from "./Children";

export default function Parent() {
  const [parent, setPanrent] = useState(0);
  console.log("부모 렌더링");
  return (
    <div>
      <span>{`부모 번호 : ${parent}`}</span>
      <button onClick={() => setPanrent((pre) => pre + 1)}>부모</button>
      <Children parentNum={parent} temp="하하하"></Children>
    </div>
  );
}
