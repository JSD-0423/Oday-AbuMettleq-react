import { Header } from "../../Components/Header/Header";
import { Results } from "../../Components/Results/Results";
import { SearchBar } from "../../Components/Searchbar/Searchbar";
import { Topics } from "../../Components/Topics/Topics";
import { Welcome } from "../../Components/Welcome/Welcome";
import "./Home.css";
function Home() {
  return (
    <>
      <Header
        pageTitle={"Web Topics"}
        icons={[
          { name: "moon-outline", title: "Dark Mode" },
          { name: "heart-outline", title: "Favourites" },
        ]}
      ></Header>
      <main>
        <Welcome
          title={"Welcome to our website!"}
          subTitle={
            "We have a new design that's fresh, modern and easy to use."
          }
        />
        <SearchBar></SearchBar>
        <Results></Results>
        <Topics></Topics>
      </main>
    </>
  );
}
export default Home;
