import { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList() {
//   const [value, setValue] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setValue(value);
//   };

//   // Some Error Validation ....
//   return (
//     <div>
//       <form>
//         <input
//           onChange={onChange}
//           value={value}
//           type="text"
//           placeholder="할 일을 입력해주세요"
//         />
//         <button>제출하기</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(register("email"));
  return (
    <div>
      <form>
        <input
          {...register("email")}
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <input
          {...register("username")}
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <input
          {...register("password1")}
          type="password"
          placeholder="비밀번호를 확인합니다."
        />
        <button>제출하기</button>
      </form>
    </div>
  );
}
export default ToDoList;
