import axios from "axios";

export const getMetrics = async () => {
  const res = await axios.get("http://localhost:3001/metrics");
  return res.data;
};