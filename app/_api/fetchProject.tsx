import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://3.27.239.197",
});

export const fetchProject = async () => {
  try {
    const { data } = await axiosClient.get(`/project/getProject`);
    return data;
  } catch (error) {
    throw error;
  }
};
