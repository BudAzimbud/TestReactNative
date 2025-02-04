import { MusicTrack } from "../interface";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    data: MusicTrack;
  };
};
