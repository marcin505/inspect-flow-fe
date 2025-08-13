import { useEffect, useState } from "react";

import { ArticlesSearchResponse, Hit } from "./articles";
import { baseURL, genericFetch } from "@utils/utils";

type GenericFetch = <T>({
  url,
  method,
}: {
  url: string;
  method?: "GET" | "POST";
  signal?: AbortSignal;
}) => Promise<T>;

export const FetchExample = () => {
  const [hits, setHits] = useState<Hit[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const articles = await genericFetch<ArticlesSearchResponse>({
          url: baseURL,
        });
        setHits(articles.hits);
      })();
    } catch (error) {}
  }, []);

  return (
    <ul>
      {hits.map((hit) => (
        <li key={hit.story_id}>{hit.title}</li>
      ))}
    </ul>
  );
};
