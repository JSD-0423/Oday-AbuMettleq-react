// hooks/useTopics.js
import { useEffect, useState } from "react";
import { fetchTopicsList, searchTopics } from "../services/api";
import { debounce } from "../utils/Debounce";

const useTopics = () => {
  const { searchValue, setSearchValue } = useState("");
  const [topics, setTopics] = useState([]);
  const [searchedTopics, setSearchedTopics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchValue) {
      const fetchTopics = async () => {
        setLoading(true);

        const topicsData = await fetchTopicsList();

        if (!topicsData) {
          setError("Something went wrong. Web topics failed to load.");
        } else {
          setTopics(topicsData);
        }

        setLoading(false);
      };

      fetchTopics();
    } else {
      const debouncedSearch = debounce(() => {
        setLoading(true);

        const topics = searchTopics(searchValue);
        if (!topics) {
          setError("Something went wrong. Web topics failed to load.");
        } else {
          setTopics(topics);
        }
        setLoading(false);
      }, 300);

      debouncedSearch();

      return () => {
        clearTimeout(debouncedSearch);
      };
    }
  }, [searchValue]);

  return {
    topics,

    loading,
    error,
    setSearchValue,
    searchValue,
  };
};

export default useTopics;
