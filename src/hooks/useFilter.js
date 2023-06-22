// hooks/useTopics.js
import { useEffect, useState } from "react";
import { fetchTopicsList } from "../services/api";

const useTopicsList = () => {
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState("default");

  useEffect(() => {

  }, []);

  return {
    
  };
};

export default useTopicsList;
