import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://54.206.89.205",
});

export const fetchProject = async () => {
  try {
    const { data } = await axiosClient.get(`/project/getProject`);
    return data;
  } catch (error) {
    throw error;
  }
};
