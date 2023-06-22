export const handleFilter = (topics, filterOption, sortOption) => {
  let filterd = topics.filter((topic) => topic.category === filterOption);

  if (sortOption === "Author") {
    filterd.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  if (sortOption === "Topics") {
    filterd.sort((a, b) => {
      return a.topic.localeCompare(b.topic);
    });
  }

  return filterd;
};
