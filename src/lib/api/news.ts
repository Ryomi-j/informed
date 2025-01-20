import { News } from "../types/news";
import fetchService from "../utils/fetch";
import { useQuery } from "@tanstack/react-query";

export const useNews = (keyword: string) => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ["news", keyword],
    queryFn: async () =>
      await fetchService.get<News[]>(`/api/news?keyword=${keyword}`),
    staleTime: 1000 * 60 * 5, // 5분
    refetchOnWindowFocus: false,
    retry: 1,
    meta: {
      errorMessage: "Error fetching news data",
    },
  });

  return { news, isLoading, error };
};
