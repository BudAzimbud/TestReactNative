import { ApiResponseList, MusicTrack } from "../interface";
import { api } from "../utils/api";

export const getList = async ({term}: {term: string}) : Promise<ApiResponseList<MusicTrack>> => {
  const response = await api.get<ApiResponseList<MusicTrack>>(`/search?term=${term}`);
  return response.data;
};
