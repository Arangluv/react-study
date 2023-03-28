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
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <input
          {...register("username", {
            required: "usename must be required",
            minLength: {
              value: 5,
              message: "too short",
            },
          })}
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
        <input
          {...register("password", { required: "password must be required" })}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <input
          {...register("password1", { required: "password2 must be required" })}
          type="password"
          placeholder="비밀번호를 확인합니다."
        />
        <button>제출하기</button>
      </form>
    </div>
  );
}
export default ToDoList;
