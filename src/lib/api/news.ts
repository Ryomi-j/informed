import { News } from "../types/news";
import fetchService from "../utils/fetch";
import { useQuery } from "@tanstack/react-query";

export const useNews = (category: string) => {
  const { data: news } = useQuery({
    queryKey: ["news", category],
    queryFn: async () =>
      await fetchService.get<News[]>(`/api/news?category=${category}`),
    staleTime: 1000 * 60 * 5, // 5분
    refetchOnWindowFocus: false,
    retry: 1,
    meta: {
      errorMessage: "Error fetching news data",
    },
  });

  return news;
};
