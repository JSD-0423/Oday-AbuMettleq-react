// hooks/useTopics.js
import { useEffect, useState } from "react";
import { getTopicDetails } from "../services/api";

const useTopicDetails = (id) => {
  const [topicDetails, setTopicDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopicDetails = async () => {
      setLoading(true);

      const topicDetailsData = await getTopicDetails(id);
  
      if (!topicDetailsData) {
        setError("Something went wrong. Topic Details failed to load.");
      } else {
        setTopicDetails(topicDetailsData);
      }

      setLoading(false);
    };

    fetchTopicDetails();
  }, [id]);

  return {
    topicDetails,
    loading,
    error,
  };
};

export default useTopicDetails;
