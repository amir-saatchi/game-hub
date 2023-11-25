import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  console.log(gameQuery.genre?.slug);
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.slug,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
};

export default useGames;
