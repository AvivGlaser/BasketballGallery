import react from "react";
import { useQuery } from "@tanstack/react-query";
import fetchDataFN from "../../../../Helpers/fetchDataFN";
import { API_URL, API_KEY } from "../../../Environment/environment";

export function GetTeams() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["myData"],
    queryFn: async () => await fetchDataFN({ API_URL, API_KEY }),
  });
  return {
    data: data || [], // if data is undefined or null, return an empty array
    error,
    isLoading,
  };
}
