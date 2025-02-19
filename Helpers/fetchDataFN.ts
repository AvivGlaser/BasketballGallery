import axios from "axios";
import { IAPITeams, IFetchData, ITeams } from "./Interfaces";

async function fetchDataFN(props: IFetchData): Promise<ITeams[] | IAPITeams[]> {
  const { API_KEY, API_URL } = props;


  const response = await axios.get(`${API_URL}`, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  });
  const { data } = response?.data;
  console.log("DATA FETCHED!");
  return data;
}

export default fetchDataFN;
