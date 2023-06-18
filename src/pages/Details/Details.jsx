import { Header } from "../../Components/Header/Header";
import { Welcome } from "../../Components/Welcome/Welcome";
import { Footer } from "../../Components/Footer/Footer";
import "./Details.css";
import { DetailsCard } from "../../Components/DetailsCard/DetailsCard";
function Details({
  mainTitle,
  subTitle,
  rating,
  description,
  cardDetails,
  subTopics,
}) {
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

        <div className="topic-details details-container">
          <div className="main-width">
            <h2 className="category">Web Development Languages</h2>
            <h3 className="title">HTML</h3>
            <div className="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              sit ipsam sint inventore exercitationem ex rem deserunt, odit sed
              quis, officiis veniam? Explicabo quaerat sunt voluptates eaque
              distinctio! Error, dolore! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae adipisci similique at provident nemo
              porro distinctio et velit, consectetur vitae. Architecto sunt
              accusamus ab maxime doloribus dicta similique
            </p>
          </div>

          <DetailsCard imgUrl={"html.png"} mainTitle={"HTML"} author={"Oday"}></DetailsCard>
        </div>

        <div className="sub-topics details-container">
          <section className="sub-topics-content main-width">
            <h2>HTML Sub Topics</h2>

            <div>
              <ion-icon
                name="checkmark-circle-outline"
                className="check-mark"
              ></ion-icon>
              <h3>HTML syntax and structure</h3>
            </div>

            <div>
              <ion-icon
                name="checkmark-circle-outline"
                className="check-mark"
              ></ion-icon>
              <h3>HTML syntax and structure</h3>
            </div>
            <div>
              <ion-icon
                name="checkmark-circle-outline"
                className="check-mark"
              ></ion-icon>
              <h3>HTML syntax and structure</h3>
            </div>
            <div>
              <ion-icon
                name="checkmark-circle-outline"
                className="check-mark"
              ></ion-icon>
              <h3>HTML syntax and structure</h3>
            </div>
            <div>
              <ion-icon
                name="checkmark-circle-outline"
                className="check-mark"
              ></ion-icon>
              <h3>HTML syntax and structure</h3>
            </div>
            <div>
              <ion-icon
                name="checkmark-circle-outline"
                className="check-mark"
              ></ion-icon>
              <h3>HTML syntax and structure</h3>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Details;
