import axios from "axios";
const BASE_URL = "http://localhost:4000/";
export const getData = async () => {
  console.log("queryFn의 getData 호출");
  const { data } = await axios({
    url: "http://localhost:4000",
    method: "GET",
  });
  return data;
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     return reject("asd");
  //   }, 3000);
  // });
};
