// hooks/useTopics.js
import { useEffect, useState } from "react";
import { fetchTopicsList } from "../services/api";

const useTopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  return {
    topics,
    loading,
    error,
  };
};

export default useTopicsList;
