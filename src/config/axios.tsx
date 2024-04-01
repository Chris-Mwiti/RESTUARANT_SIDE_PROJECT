import axios from "axios";

const useAxiosInstance = () => {
  const accessToken = localStorage.getItem("venusAccessToken");
  const refreshToken = localStorage.getItem("venusRefreshToken");

  console.log(accessToken, refreshToken);
  return axios.create({
    baseURL: "https://restaurant-backend-sable.vercel.app/",
    timeout: 3000,
    headers: {
      authorization: `Bearer ${accessToken} ${refreshToken}`,
    },
  });
};

export default useAxiosInstance;
