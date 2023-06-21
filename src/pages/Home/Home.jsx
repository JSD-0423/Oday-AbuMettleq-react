import SearchBar from "../../Components/Searchbar/Searchbar";
import { Topics } from "../../Components/Topics/TopicsContainer/Topics";
import { ErrorContainer } from "../../Components/common/Error/Error";
import { LoadingContainer } from "../../Components/common/Loading/Loading";
import useTopicsList from "../../hooks/useTopicsList";


import "./Home.css";
function Home() {
  const { topics, loading, error } = useTopicsList();
  if (loading) {
    return <LoadingContainer />;
  }
  if (error) {
    return <ErrorContainer error={error} />;
  }
  return (
    <>
      <SearchBar
        searchInputPlaceHolder={"Search the website..."}
        searchInputIconName={"search-outline"}
      ></SearchBar>

      <Topics TopicsArray={topics}></Topics>
    </>
  );
}
export default Home;
