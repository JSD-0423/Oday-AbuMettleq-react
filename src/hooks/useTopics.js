// hooks/useTopics.js
import { useEffect, useState } from "react";
import { fetchTopicsList } from "../services/api";

const useTopics = (searchValue) => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue) {
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
        
    }
  }, [searchValue]);

  return {
    topics,
    loading,
    error,
  };
};

export default useTopics;
