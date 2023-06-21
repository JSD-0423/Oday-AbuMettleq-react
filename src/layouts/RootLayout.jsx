import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Welcome } from "../Components/Welcome/Welcome";
import { Footer } from "../Components/common/Footer/Footer";


export default function RootLayout() {
  return (
    <>
      <Header
        pageTitle={"Web Topics"}
        icons={[
          { name: "moon-outline", title: "Dark Mode" },
          { name: "heart-outline", title: "Favourites" },
        ]}
      />
      <main>
        <Welcome 
          title={"Welcome to our website!"}
          subTitle={
            "We have a new design that's fresh, modern and easy to use."
          }
        />
        <Outlet />

        <Footer></Footer>
      </main>
    </>
  );
}
