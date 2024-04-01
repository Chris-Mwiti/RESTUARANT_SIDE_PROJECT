import axios from "axios";

const useAxiosInstance = () => {
  const accessToken = localStorage.getItem("venusAccessToken");
  const refreshToken = localStorage.getItem("venusRefreshToken");

  console.log(accessToken, refreshToken);
  return axios.create({
    baseURL:
      "http://localhost:4000",
    timeout: 3000,
    headers: {
      authorization: `Bearer ${accessToken} ${refreshToken}`,
    },
  });
};

export default useAxiosInstance;
