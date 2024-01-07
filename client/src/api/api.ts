import axios from "axios";

const BASE_URL = "http://localhost:4000/";

export const getData = async () => {
  try {
    const { data } = await axios({
      url: `${BASE_URL}`,
      method: "GET",
    });
    return data;
  } catch (error) {
    // 아무것도 안하면 Promise<null>을 return
    return Promise.reject(error);
  }
};
