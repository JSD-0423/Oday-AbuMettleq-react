import { Results } from "../../Components/Results/Results";
import SearchBar from "../../Components/Searchbar/Searchbar";
import { Topics } from "../../Components/Topics/TopicsContainer/Topics";

import "./Home.css";
function Home({ topicsArray }) {
  return (
    <>
      <SearchBar
        searchInputPlaceHolder={"Search the website..."}
        searchInputIconName={"search-outline"}
      ></SearchBar>
      <Results resultsContent={'"23" Web Topics Found'} />
      <Topics TopicsArray={topicsArray}></Topics>
    </>
  );
}
export default Home;
