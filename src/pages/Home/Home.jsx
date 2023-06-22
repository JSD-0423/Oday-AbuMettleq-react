import { useState } from "react";
import SearchBar from "../../Components/Searchbar/Searchbar";
import { Topics } from "../../Components/Topics/TopicsContainer/Topics";
import { ErrorContainer } from "../../Components/common/Error/Error";
import { LoadingContainer } from "../../Components/common/Loading/Loading";
import useTopicsList from "../../hooks/useTopicsList";

import "./Home.css";
import { useSearchTopics } from "../../hooks/useTopicSearch";
function Home() {
  const { topics, loading, error } = useTopicsList();
  const { searchValue, setSearchValue } = useState();
  const { searchTopics, SearchLoading, SearchError } =
    useSearchTopics(searchValue);

  if (loading) {
    return (
      <>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchInputPlaceHolder={"Search the website..."}
          searchInputIconName={"search-outline"}
          topics={topics}
        ></SearchBar>
        ;
        <LoadingContainer />
      </>
    );
  }
  if (error) {
    return (
      <>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchInputPlaceHolder={"Search the website..."}
          searchInputIconName={"search-outline"}
          topics={topics}
        ></SearchBar>
        <ErrorContainer error={error} />
      </>
    );
  }
  return (
    <>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchInputPlaceHolder={"Search the website..."}
        searchInputIconName={"search-outline"}
        topics={topics}
      ></SearchBar>

      <Topics TopicsArray={topics}></Topics>
    </>
  );
}
export default Home;
