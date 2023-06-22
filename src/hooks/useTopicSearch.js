import { useEffect, useState } from "react";

import { searchTopics } from "../services/api";
import { debounce } from "../utils/Debounce";

export const useSearchTopics = (searchValue) => {
  const [searchedTopics, setSearchedTopics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const debouncedSearch = debounce(() => {
      setLoading(true);

      const topics = searchTopics(searchValue);
      if (!topics) {
        setError("Something went wrong. Web topics failed to load.");
      } else {
        setSearchedTopics(topics);
      }
      setLoading(false);
    }, 300);

    debouncedSearch();

    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchValue]);

  return { searchedTopics, loading, error };
};
