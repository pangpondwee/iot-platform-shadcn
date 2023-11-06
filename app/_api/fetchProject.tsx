import axios from "axios";

export const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          _id: "654505149fdd5b233c3c35c2",
          name: "Boat track 2",
          owner: "Withawat T",
          location: "Bangkok",
          imgUrl: "sadaddasdasdliscliisclasCASFsPAOfhas",
        },
        {
          _id: "6547495608e26a89b5a62f33",
          name: "Boat track 1",
          owner: "Anan",
          location: "Songkhla",
          imgUrl: "sadaddasdasdliscliisclasCAS22FsPAOfhas",
        },
      ]);
    }, 2000);
  });
};

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
